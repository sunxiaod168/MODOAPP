<template>
  <f7-page nav-title="" @page:init="initHandle" @page:beforeinit="beforeinitHandle" @page:back="backHandler">
    <f7-list>
      <f7-list-item smart-select title="送货人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="deliveryStaffs" multiple="multiple" v-model="delivery.DeliveryStaffs" :disabled="editable == false">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID" selected="">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item>
        <label>送货开始时间</label>
        <date-picker v-model="delivery.DeliveryDate" placeholder="送货开始时间" type="datetime" :disabled="editable == false"></date-picker>
      </f7-list-item>
      <f7-list-item>
        <label>送货完成时间</label>
        <date-picker v-model="delivery.FinishedDate" placeholder="送货完成时间" type="datetime" :disabled="editable == false"></date-picker>
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
      delivery:{DeliveryStaffs:[]},
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
          me.$f7.alert("获取员工列表失败", "");
        });
    },
    initHandle(e) {
      var page = e.detail.page;      
      page.container.setAttribute("nav-title", page.query.title);

      this.$store.state.navRightPanelEnabled = false;
      this.$store.state.navRightTitle = "提交";
      this.$store.state.navRightIcon = "";

      this.delivery = page.query.data;      
      this.editable = page.query.editable;

      Dom7('[name="deliveryStaffs"]+.item-after').text(
        this.delivery.DeliveryStaffsName
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

      var date = moment(this.delivery.DeliveryDate);
      if (date.isValid()) {
        this.delivery.DeliveryDate = date.format("YYYY-MM-DD HH:mm:ss");
      }

      date = moment(this.delivery.FinishedDate);
      if (date.isValid()) {
        this.delivery.FinishedDate = date.format("YYYY-MM-DD HH:mm:ss");
      }     

      this.delivery.IsFinished = true;

      var params = this.delivery;
      var me = this;
      api
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