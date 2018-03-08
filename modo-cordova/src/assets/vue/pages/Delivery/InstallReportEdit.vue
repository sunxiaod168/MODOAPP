<template>
  <f7-page nav-title="" @page:init="initHandle" @page:beforeinit="beforeinitHandle" @page:back="backHandler">
    <f7-list>
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
        <label>计划开始时间</label>
        <date-picker v-model="install.PlanInstallDate" placeholder="计划开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>计划完成时间</label>
        <date-picker v-model="install.PlanFinishDate" placeholder="计划完成时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>实际开始时间</label>
        <date-picker v-model="install.InstallDate" placeholder="实际开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>实际完成时间</label>
        <date-picker v-model="install.FinishDate" placeholder="实际完成时间" type="datetime" :disabled="editable == false"></date-picker>
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
      install: { InstallStaffs: [] },
      editable: false
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
          me.$f7.alert("获取员工列表失败", "数据异常");
        });
    },
    initHandle(e) {
      var page = e.detail.page;
      var pageData = page.query.data;
      page.container.setAttribute("nav-title", page.query.title);

      this.$store.state.navRightPanelEnabled = false;
      this.$store.state.navRightTitle = "提交";
      this.$store.state.navRightIcon = "";

      this.install = pageData;
      this.editable = page.query.editable;

      Dom7('[name="installMasterStaff"]+.item-after').text(pageData.LeaderName);
      Dom7('[name="installStaffs"]+.item-after').text(
        pageData.InstallStaffsName
      );
      if (this.editable == false) {
        this.$store.state.navRightTitle = "";
        bus.$off("navRightButtonClicked", this.save);
      }
    },
    backHandler(e) {
      this.$store.state.navRightPanelEnabled = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
    },
    save() {
      var date = moment(this.install.PlanInstallDate);
      if (date.isValid()) {
        this.install.PlanInstallDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      date = moment(this.install.PlanFinishDate);
      if (date.isValid()) {
        this.install.PlanFinishDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      date = moment(this.install.InstallDate);
      if (date.isValid()) {
        this.install.InstallDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      date = moment(this.install.FinishDate);
      if (date.isValid()) {
        this.install.FinishDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      this.install.IsFinished = true;

      var params = this.install;
      var me = this;
      api
        .installReport(params)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.$f7.alert("", "提交成功", function() {
              me.$router.back();
            });
          } else {
            me.$f7.alert(data.msg, "提交失败");
          }
        })
        .catch(function(err) {
          me.$f7.alert(err, "提交失败");
        });
    }
  }
};
</script>