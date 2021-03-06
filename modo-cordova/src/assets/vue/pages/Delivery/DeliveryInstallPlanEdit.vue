<template>
  <f7-page nav-title="" @page:init="initHandle" @page:beforeinit="beforeinitHandle" @page:back="backHandler">
    <f7-list :class="{disabled: editable == false}">
      <f7-list-item smart-select title="送货人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="deliveryStaffs" multiple="multiple" v-model="delivery.DeliveryStaffs" :disabled="editable == false">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID" selected="">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item smart-select title="安装负责人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="installMasterStaff" v-model="install.Leader" :disabled="editable == false">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item smart-select title="安装人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="installStaffs" multiple="multiple" v-model="install.InstallStaffs" :disabled="editable == false">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item>
        <label>送货开始时间</label>
        <date-picker v-model="delivery.DeliveryDate" placeholder="送货开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>安装计划开始时间</label>
        <date-picker v-model="install.PlanInstallDate" placeholder="安装计划开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>安装计划完成时间</label>
        <date-picker v-model="install.PlanFinishDate" placeholder="安装计划完成时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<style scoped>
.list-block>>>.item-inner {
  overflow: visible;
  flex-wrap: wrap;
}
.list-block.disabled>>>.item-link .item-inner {
  background-image: none;
}
</style>
<script>
import { bus, convertJsonDate } from "common";
import DatePicker from "components/DateTimePicker";
import api from "api/Delivery";
import CONST from "const";
import moment from "moment";

export default {
  data() {
    return {
      staffs: [{ ID: 0, Name: "" }],
      delivery: {
        DeliveryStaffs: [],
        DeliveryDate: null
      },
      install: {
        Leader: 0,
        InstallStaffs: [],
        PlanInstallDate: null,
        PlanFinishDate: null
      },
      editable: true
    };
  },
  components: { DatePicker },
  mounted() {
    bus.$on("navRightButtonClicked", this.save);
  },
  beforeDestroy() {
    bus.$off("navRightButtonClicked", this.save);
  },
  methods: {
    beforeinitHandle() {
      var me = this;
      api
        .staffList()
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.staffs = data.data;
          }
        })
        .catch(function(err) {
          me.$f7.alert("获取员工列表失败", "");
        });
    },
    initHandle(e) {
      var page = e.detail.page;
      var pageData = page.query.data;

      this.$store.state.navRightPanelEnabled = false;
      this.$store.state.navRightTitle = "保存";
      this.$store.state.navRightIcon = "";

      this.delivery = this.convertDeliveryData(pageData.DeliveryDispatch);
      this.install = this.convertInstallData(pageData.InstallDispatch);
      this.editable = page.query.editable;
      page.container.setAttribute("nav-title", page.query.title);

      this.initForm();
    },
    initForm() {
      if (this.editable == false) {
        this.$store.state.navRightTitle = "";
        bus.$off("navRightButtonClicked", this.save);
      }

      if (this.delivery.ID > 0) {
        Dom7('[name="deliveryStaffs"]+.item-after').text(
          this.delivery.DeliveryStaffsName
        );
        Dom7('[name="installMasterStaff"]+.item-after').text(
          this.install.LeaderName
        );
        Dom7('[name="installStaffs"]+.item-after').text(
          this.install.InstallStaffsName
        );
      }
    },
    backHandler(e) {
      this.$store.state.navRightPanelEnabled = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
    },
    convertDeliveryData(delivery) {
      delivery.DeliveryDate = convertJsonDate(delivery.DeliveryDate);
      if (!delivery.DeliveryStaffs) {
        delivery.DeliveryStaffs = [];
      }
      return delivery;
    },
    convertInstallData(install) {
      install.PlanInstallDate = convertJsonDate(install.PlanInstallDate);
      install.PlanFinishDate = convertJsonDate(install.PlanFinishDate);
      if (!install.Leader) {
        install.Leader = 0;
      }
      if (!install.InstallStaffs) {
        install.InstallStaffs = [];
      }

      return install;
    },
    save() {
      var date = moment(this.delivery.DeliveryDate);
      if (date.isValid()) {
        this.delivery.DeliveryDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      date = moment(this.install.PlanInstallDate);
      if (date.isValid()) {
        this.install.PlanInstallDate = date.format("YYYY-MM-DD HH:mm:ss");
      }
      
      date = moment(this.install.PlanFinishDate);
      if (date.isValid()) {
        this.install.PlanFinishDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      var params = { delivery: this.delivery, install: this.install };
      var me = this;
      api
        .deliveryInstallPlan(params)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.$f7.alert("", "保存成功", function() {
              me.$router.back();
            });
          } else {
            me.$f7.alert(data.msg, "保存失败");
          }
        })
        .catch(function(err) {
          me.$f7.alert(err, "保存失败");
        });
    }
  }
};
</script>