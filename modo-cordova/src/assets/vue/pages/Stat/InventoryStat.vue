<template>
  <f7-page nav-title="存货统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#inventory-tab1" active>按组织核算</f7-button>
        <f7-button tab-link="#inventory-tab2">按品牌核算</f7-button>
      </f7-buttons>
      <f7-tabs swipeable>
        <f7-tab id="inventory-tab1" active>
         <p class="total">
            <label>存货总额</label>
            <span>{{totalAmount | money}}</span>
          </p>      
          <pie-chart :sdata="orgPieData" :formatter="labelFormatter"></pie-chart>
          <div class="data-table card">
            <table>
              <thead>
                <tr>
                  <th class="label-cell">组织名称</th>
                  <th class="numeric-cell">库存金额</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in orgPieData" :key="item.name">
                  <td class="label-cell">{{item.name}}</td>
                  <td class="numeric-cell">{{item.value | money}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </f7-tab>
        <f7-tab id="inventory-tab2">
          <p class="total">
            <label>存货总额</label>
            <span>{{totalAmount | money}}</span>
          </p>      
          <pie-chart :sdata="brandPieData" :formatter="labelFormatter"></pie-chart>
          <div class="data-table card">
            <table>
              <thead>
                <tr>
                  <th class="label-cell">组织名称</th>
                  <th class="numeric-cell">库存金额</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in brandPieData" :key="item.name">
                  <td class="label-cell">{{item.name}}</td>
                  <td class="numeric-cell">{{item.value | money}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </f7-tab>
      </f7-tabs>
    </f7-block>
  </f7-page>
</template>
<style scoped>
.page>>>.page-content {
  background-color: #fff;
}
.total {
  font-size: 20px;
  margin: 10px 0 0 0;
  position: absolute;
  width: 100%;
}
.total >>> label{
  display: block;
}
</style>

<style>

</style>
<script>
import { bus, moneyString } from "common";
import Right from "./components/InventoryRight";
import api from "api/Stat";
import CONST from "const";
import PieChart from "components/PieChart";

export default {
  data() {
    return {
      msg: "",
      query: {
        zzids: []
      },
      isLoading: false,
      totalAmount: null,
      orgPieData: [],
      brandPieData: []
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
        .inventory(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.totalAmount = data.data.totalAmount;
            me.refreshChart(data.data);
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
    refreshChart(data) {
      this.orgPieData = data.orgList.map(item => {
        return {
          name: item.ZZName,
          value: item.StorageAmount
        };
      });

      this.brandPieData = data.brandList.map(item => {
        return {
          name: item.BrandName,
          value: item.StorageAmount
        };
      });
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      this.query = payload;
      this.loadData();
    },
    labelFormatter(params){
      var value = moneyString(params.value);
      return params.name + "\n\n" + value + "（" + params.percent + "%）"
    }
  }
};
</script>

