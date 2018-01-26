<template>
  <f7-page nav-title="订单统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#order-stat-tab1" active>销售业绩</f7-button>
        <f7-button tab-link="#order-stat-tab2">销售趋势</f7-button>
        <f7-button tab-link="#order-stat-tab3">业绩排名</f7-button>
      </f7-buttons>
      <f7-tabs swipeable>
        <f7-tab id="order-stat-tab1" active>
          <bar-chart :sdata="colData"></bar-chart>
        </f7-tab>
        <f7-tab id="order-stat-tab2">
          <line-chart :sdata="lineData"></line-chart>
        </f7-tab>
        <f7-tab id="order-stat-tab3">
          <bar-chart :sdata="barData" :vertical="false"></bar-chart>
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
import { bus } from "common";
import Right from "./components/OrderRight";
import api from "api/Stat";
import CONST from "const";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";

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
      pageData: {},
      colData: [],
      lineData: [],
      barData: []
    };
  },
  components: { BarChart, LineChart },
  mounted() {
    bus.$on("rightDone", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightDone", this.rightDone);
  },
  methods: {
    initHandle() {
      this.$store.state.navRightVisiable = true;
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
            me.pageData = data.data;
            me.refreshChart();
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
    refreshChart() {
      this.colData = [
        {
          name: "Forest",
          data: [320]
        },
        {
          name: "Steppe",
          data: [220]
        },
        {
          name: "Desert",
          data: [150]
        },
        {
          name: "Wetland",
          data: [98]
        }
      ];
      this.lineData = [
          {
            name: "模拟数据1",          
            data: [['2018-1-1', 100],['2018-1-2', 200],['2018-1-3', 300],['2018-1-4', 200],['2018-1-5', 100],]
          },
          {
            name: "模拟数据2",         
            data: [['2018-3-11',5100],['2018-3-12', 6200],['2018-3-13', 7300],['2018-3-14', 1200],['2018-3-15', 3100],]
          }];
      this.barData = [
        {
          name: "Forest",
          data: [320]
        },
        {
          name: "Steppe",
          data: [220]
        },
        {
          name: "Desert",
          data: [150]
        },
        {
          name: "Wetland",
          data: [98]
        }
      ];
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

