<template>
  <f7-page nav-title="" @page:init="initHandle" @page:beforeinit="beforeinitHandle" @page:back="backHandler">
    <f7-list>
      <f7-list-item smart-select title="送货人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="deliveryStaffs" multiple="multiple" v-model="DeliveryStaffList" :disabled="editable == false">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID" selected="">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item>
        <label>送货开始时间</label>
        <date-picker v-model="DeliveryDate" placeholder="送货开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>送货完成时间</label>
        <date-picker v-model="DeliveryFinishDate" placeholder="送货完成时间" type="datetime" :disabled="editable == false"></date-picker>
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
import userApi from "api/User";
import deliveryApi from "api/Delivery";
import CONST from "const";

export default {
  data() {
    return {
      staffs: [{ ID: 0, Name: "" }],
      DeliveryStaffList: [],
      DeliveryDate: null,
      DeliveryFinishDate: null,
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
      userApi
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

      this.DeliveryStaffList = pageData.DeliveryStaffList;
      this.DeliveryDate = convertJsonDate(pageData.DeliveryDate);
      this.DeliveryFinishDate = convertJsonDate(pageData.DeliveryFinishDate);
      this.editable = page.query.editable;

      Dom7('[name="deliveryStaffs"]+.item-after').text(pageData.DeliveryStaffs);
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
      var params = {
        DeliveryStaffList: this.DeliveryStaffList,
        DeliveryDate: this.DeliveryDate,
        DeliveryFinishDate: this.DeliveryFinishDate
      };
      var me = this;
      deliveryApi
        .deliveryReport(params)
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