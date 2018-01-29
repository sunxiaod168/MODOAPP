<template>
  <f7-page nav-title="利润核算分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#profit-tab1" active>按送货额核算</f7-button>
        <f7-button tab-link="#profit-tab2">按订货额核算</f7-button>
      </f7-buttons>
      <f7-tabs>
        <f7-tab id="profit-tab1" active>
          <f7-card v-for="item in pageData.byDelivery" :key="item.ZZName">
            <f7-card-header>{{item.ZZName}}</f7-card-header>
            <f7-card-content>
              <p>
                <label>送货金额</label>
                <span>{{item.DeliveryAmount | money}}</span>
              </p>
              <p>
                <label>成本金额</label>
                <span>{{item.CostAmount | money}}</span>
              </p>
              <p>
                <label>支出金额</label>
                <span>{{item.OutAmount | money}}</span>
              </p>
              <p>
                <label>利润</label>
                <span>{{item.ProfitAmount | money}}</span>
              </p>
            </f7-card-content>
          </f7-card>
        </f7-tab>
        <f7-tab id="profit-tab2">
          <f7-card v-for="item in pageData.byOrder" :key="item.ZZName">
            <f7-card-header>{{item.ZZName}}</f7-card-header>
            <f7-card-content>
              <p>
                <label>订货金额</label>
                <span>{{item.OrderAmount | money}}</span>
              </p>
              <p>
                <label>取消金额</label>
                <span>{{item.CancelAmount | money}}</span>
              </p>
              <p>
                <label>净增订单金额</label>
                <span>{{item.NetIncreaseAmount | money}}</span>
              </p>
              <p>
                <label>成本金额</label>
                <span>{{item.CostAmount | money}}</span>
              </p>
              <p>
                <label>支出金额</label>
                <span>{{item.OutAmount | money}}</span>
              </p>
              <p>
                <label>利润</label>
                <span>{{item.ProfitAmount | money}}</span>
              </p>

            </f7-card-content>
          </f7-card>
        </f7-tab>
      </f7-tabs>
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
      pageData: { byDelivery: [], byOrder: [] }
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
            me.pageData = data.data;
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


