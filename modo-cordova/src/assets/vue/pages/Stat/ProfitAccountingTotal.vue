<template>
    <f7-page nav-title="利润核算分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
        <f7-block>
            <f7-card>
                <f7-card-header>
                    <f7-link @click="go('/profit-accounting-delivery/')">按送货额合计</f7-link>
                </f7-card-header>
                <f7-card-content>
                    <p>
                        <label>送货金额</label>
                        <span>{{byDelivery.DeliveryAmount | money}}</span>
                    </p>
                    <p>
                        <label>成本金额</label>
                        <span>{{byDelivery.CostAmount | money}}</span>
                    </p>
                    <p>
                        <label>支出金额</label>
                        <span>{{byDelivery.OutAmount | money}}</span>
                    </p>
                    <p>
                        <label>利润</label>
                        <span>{{byDelivery.ProfitAmount | money}}</span>
                    </p>
                </f7-card-content>
            </f7-card>
            <f7-card>
                <f7-card-header>
                    <f7-link @click="go('/profit-accounting-order/')">按订货额合计</f7-link>
                </f7-card-header>
                <f7-card-content>
                    <p>
                        <label>订货金额</label>
                        <span>{{byOrder.OrderAmount | money}}</span>
                    </p>
                    <p>
                        <label>取消金额</label>
                        <span>{{byOrder.CancelAmount | money}}</span>
                    </p>
                    <p>
                        <label>净增订单金额</label>
                        <span>{{byOrder.NetIncreaseAmount | money}}</span>
                    </p>
                    <p>
                        <label>成本金额</label>
                        <span>{{byOrder.CostAmount | money}}</span>
                    </p>
                    <p>
                        <label>支出金额</label>
                        <span>{{byOrder.OutAmount | money}}</span>
                    </p>
                    <p>
                        <label>利润</label>
                        <span>{{byOrder.ProfitAmount | money}}</span>
                    </p>
                </f7-card-content>
            </f7-card>
        </f7-block>
    </f7-page>
</template>
<style scoped>
.content-block {
  margin: 10px 0 0;
}
.page>>>.page-content {
  background-color: #fff;
}
.page>>>.card p {
  text-align: left;
}
.page>>>.card p > label {
  display: inline-block;
  width: 40%;
  text-align: right;
  margin-right: 1em;
}
a {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) center;
  padding-right: 35px;
  width: 100%;
  color: #000;
}
</style>

<style>

</style>
<script>
import { bus } from "common";
import Right from "./components/ProfitRight";
import api from "api/Stat";
import CONST from "const";

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
      pageData: null,
      byDelivery: {
        DeliveryAmount: 0,
        CostAmount: 0,
        OutAmount: 0,
        ProfitAmount: 0
      },
      byOrder: {
        OrderAmount: 0,
        CancelAmount: 0,
        NetIncreaseAmount: 0,
        CostAmount: 0,
        OutAmount: 0,
        ProfitAmount: 0
      }
    };
  },
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
        .profit(this.query)
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
          console.log(err);
          me.$f7.pullToRefreshDone();
          me.msg = err;
          me.isLoading = false;
        });
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      this.query = payload;
      this.loadData();
    },
    convertData(data) {     
      this.pageData = data;

      var deliveryAmount = 0,
        costAmount = 0,
        outAmount = 0,
        profitAmount = 0;

      data.byDelivery.forEach(item => {
        deliveryAmount += item.DeliveryAmount;
        costAmount += item.CostAmount;
        outAmount += item.OutAmount;
        profitAmount += item.ProfitAmount;
      });

      this.byDelivery = {
        DeliveryAmount: deliveryAmount,
        CostAmount: costAmount,
        OutAmount: outAmount,
        ProfitAmount: profitAmount
      };

      var orderAmount = 0,
        cancelAmount = 0,
        netIncreaseAmount = 0;
      costAmount = 0;
      outAmount = 0;
      profitAmount = 0;

      data.byOrder.forEach(item => {
        orderAmount += item.OrderAmount;
        cancelAmount += item.CancelAmount;
        netIncreaseAmount += item.NetIncreaseAmount;
        costAmount += item.CostAmount;
        outAmount += item.OutAmount;
        profitAmount += item.ProfitAmount;
      });

      this.byOrder = {
        OrderAmount: orderAmount,
        CancelAmount: cancelAmount,
        NetIncreaseAmount: netIncreaseAmount,
        CostAmount: costAmount,
        OutAmount: outAmount,
        ProfitAmount: profitAmount
      };
    },
    go(url) {
      var me = this;     
      this.$router.load({
        url: url,
        query: this.pageData
      });
    }
  }
};
</script>


