<template>
  <f7-page nav-title="订单统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#order-stat-tab1" active>全部订单</f7-button>
        <f7-button tab-link="#unfinished-order-stat-tab2">未完成订单</f7-button>
      </f7-buttons>
      <f7-tabs swipeable>
        <f7-tab id="order-stat-tab1" active>
          <bar-chart :sdata="allData" :category="allCategory" :seriesLabelFormatter="moneyFormatter" left="20%" :right="10" :top="10" :bottom="30"></bar-chart>
        </f7-tab>
        <f7-tab id="unfinished-order-stat-tab2">
          <bar-chart :sdata="unfinishedData" :category="unfinishedCategory" :seriesLabelFormatter="moneyFormatter" :left="10" :right="10" :top="10" :bottom="30"></bar-chart>
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
import Right from "./components/OrderRight";
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
      allData: [],
      allCategory: [],
      unfinishedData: [],
      unfinishedCategory: []
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
        .order(this.query)
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
          console.log("err:" + err);
          me.$f7.pullToRefreshDone();
          me.msg = err;
          me.isLoading = false;
        });
    },
    convertData(data) {
      var allData = data.allData;
      var newAllData = [
        {
          name: "成交金额",
          stack: "总量",
          data: []
        },
        {
          name: "取消金额",
          stack: "总量",
          data: [],
          label: {
            normal: {
              show: true,
              position: "left",
              fontSize: 12,
              formatter: this.moneyFormatter
            }
          }
        },
        {
          name: "差额",
          data: []
        }
      ];
      this.allCategory = [];
      this.allCategory.push("合计");
      newAllData[0].data.push(allData.DealAmount);
      newAllData[1].data.push(allData.Cancel);
      newAllData[2].data.push(allData.NetIncrease);
      this.allData = newAllData;

      var unfinishedData = data.unfinishedData;
      var newUnfinishedData = [
        {
          name: "成交金额",
          data: []
        },
        {
          name: "已收金额",
          data: []
        },
        {
          name: "未收金额",
          data: []
        }
      ];
      this.unfinishedCategory = [];
      for (var j = 0, len = unfinishedData.length; j < len; j++) {
        this.unfinishedCategory.push(unfinishedData[j].ZZName);
        newUnfinishedData[0].data.push(unfinishedData[j].DealAmount);
        newUnfinishedData[1].data.push(unfinishedData[j].ReceivedAmonut);
        newUnfinishedData[2].data.push(unfinishedData[j].OrderBalanceAmount);
      }
      this.unfinishedData = newUnfinishedData;
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

