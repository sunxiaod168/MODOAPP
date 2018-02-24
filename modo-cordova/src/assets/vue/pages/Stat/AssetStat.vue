<template>
  <f7-page nav-title="资产统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-grid class="asset-total">
      <f7-col>
        <label>总资产</label>
      </f7-col>      
    </f7-grid>
    <f7-grid class="asset-total">      
       <f7-col>
        <span>{{assetData.AssetTotal | money}}</span>
      </f7-col>
    </f7-grid>    
    <pie-chart :sdata="pieData" :formatter="labelFormatter"></pie-chart>
  </f7-page>
</template>
<style scoped>
.page>>>.page-content {
  background-color: #fff;
}
</style>

<style>
.asset-total {
  font-size: 25px;
  padding: 10px 15px;
  font-weight: bold;
  background-color: #007aff;
  color: #fff;
}
.asset-detail {
  padding: 10px 15px;
  background-color: #007aff;
  color: #fff;
}
.asset-detail .col-auto {
  word-break: break-word;
}
</style>
<script>
import { bus, moneyString } from "common";
import Right from "./components/AssetRight";
import api from "api/Stat";
import CONST from "const";
import PieChart from "components/PieChart";

export default {
  data() {
    return {
      msg: "",
      query: {
        zzid: null
      },
      isLoading: false,
      assetData: {},
      pieData: []
    };
  },
  components: { PieChart },
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
        .asset(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.assetData = data.data;
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
      this.pieData = [
        { value: this.assetData.GoodsTotal, name: "存货总额" },
        { value: this.assetData.MoneyTotal, name: "现金余额" },
        { value: this.assetData.ReceiveTotal, name: "应收款总额" }
      ];
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      this.query.zzid = payload;
      this.loadData();
    },
    labelFormatter(params){
      var value = moneyString(params.value);
      return params.name + "\n\n" + value + "（" + params.percent + "%）"
    }
  }
};
</script>
