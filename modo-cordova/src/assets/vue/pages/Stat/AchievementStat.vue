<template>
  <f7-page nav-title="业绩统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#achievement-stat-tab1" active>门店业绩</f7-button>
        <f7-button tab-link="#achievement-stat-tab2">个人业绩</f7-button>
      </f7-buttons>
      <f7-tabs swipeable>
        <f7-tab id="achievement-stat-tab1" active>
          <bar-chart :sdata="orgData" :category="orgCategory" :seriesLabelFormatter="moneyFormatter" left="20%" :right="10" :top="10" :bottom="20"></bar-chart>
        </f7-tab>
        <f7-tab id="achievement-stat-tab2">
          <bar-chart :sdata="staffData" :category="staffCategory" :seriesLabelFormatter="moneyFormatter" left="20%" :right="10" :top="10" :bottom="20"></bar-chart>
        </f7-tab>
      </f7-tabs>
    </f7-block>
  </f7-page>
</template>
<style scoped>
.page>>>.page-content {
  background-color: #fff;
}
</style>

<style>

</style>
<script>
import { bus, moneyString } from "common";
import Right from "./components/AchievementRight";
import api from "api/Stat";
import CONST from "const";
import BarChart from "components/BarChart";

export default {
  data() {
    return {
      msg: "",
      query: {
        zzids: [],
        startDate: null,
        endDate: null
      },
      isLoading: false,
      orgData: [],
      orgCategory: [],
      staffData: [],
      staffCategory: []
    };
  },
  components: { BarChart },
  mounted() {
    bus.$on("rightDone", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightDone", this.rightDone);
  },
  methods: {
    initHandle() {
      this.$store.state.navRightVisiable = true;
      this.$store.state.navRightPanelEnabled = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
      this.$store.state.currentRightView = Right;
      this.loadData();
    },
    backHandler() {
      this.$store.state.navRightVisiable = false;
    },
    onRefresh() {
      if (this.isLoading) {
        return;
      }
      this.loadData();
    },
    loadData() {
      var me = this;
      me.isLoading = true;
      api
        .achievement(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.convertData(data.data);
          } else {
            me.msg = data.msg;
          }
          me.$f7.pullToRefreshDone();
          me.isLoading = false;
        })
        .catch(function(err) {
          me.$f7.pullToRefreshDone();
          me.msg = err;
          me.isLoading = false;
        });
    },
    convertData(data) {
      var orgData = data.orgData;
      var newOrgData = [
        {
          name: "净增订单",
          data: []
        },
        {
          name: "增加订单",
          stack: "总量",
          data: []
        },
        {
          name: "取消订单",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "left",
              fontSize: 12,
              formatter: this.moneyFormatter
            }
          },
          data: []
        }
      ];
      var newOrgCategory = [];     
      for (var i = 0, len = orgData.length; i < len; i++) {
        newOrgCategory.push(orgData[i].ZZName);
        newOrgData[0].data.push(orgData[i].NetIncrease);
        newOrgData[1].data.push(orgData[i].Increase);
        newOrgData[2].data.push(orgData[i].Cancel);
      }
      this.orgCategory = newOrgCategory;
      this.orgData = newOrgData;

      var staffData = data.staffData;
      var newStaffData = [
        {
          name: "净增订单",
          data: []
        },
        {
          name: "增加订单",
          stack: "总量",
          data: []
        },
        {
          name: "取消订单",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "left",
              fontSize: 12,
              formatter: this.moneyFormatter
            }
          },
          data: []
        }
      ];
      var newStaffCategory = [];
      for (var j = 0, len = staffData.length; j < len; j++) {
        newStaffCategory.push(staffData[j].StaffName);
        newStaffData[0].data.push(staffData[j].NetIncrease);
        newStaffData[1].data.push(staffData[j].Increase);
        newStaffData[2].data.push(staffData[j].Cancel);
      }
      this.staffCategory = newStaffCategory;
      this.staffData = newStaffData;
    },
    moneyFormatter(a) {
      return moneyString(a.value);
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      this.query = payload;
      this.loadData();
    }
  }
};
</script>

