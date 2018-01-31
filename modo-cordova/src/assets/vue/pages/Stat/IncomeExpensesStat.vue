<template>

  <f7-page nav-title="收支统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-buttons>
        <f7-button tab-link="#income-expense-tab1" active>收支总计</f7-button>
        <f7-button tab-link="#income-expense-tab2">收入分析</f7-button>
        <f7-button tab-link="#income-expense-tab3">支出分析</f7-button>
      </f7-buttons>
      <f7-tabs>
        <f7-tab id="income-expense-tab1" active>
          <bar-chart :sdata="totalData" :seriesLabelFormatter="moneyFormatter" :category="['收款总额','支出总额', '现金余额']"></bar-chart>
          <div class="data-list">
            <ul>
              <li v-for="item in totalData" :key="item.name">
                <p class="cell-title">{{item.name}}</p>
                <div class="cell-block">
                  <label>收款总额</label>
                  <span class="cell-money">{{item.data[0] | money}}</span>
                </div>
                <div class="cell-block">
                  <label>支出总额</label>
                  <span class="cell-money">{{item.data[1] | money}}</span>
                </div>
                <div class="cell-block">
                  <label>现金余额</label>
                  <span class="cell-money">{{item.data[2] | money}}</span>
                </div>
              </li>
            </ul>
          </div>
        </f7-tab>
        <f7-tab id="income-expense-tab2" @tab:show="resizeChart()">
          <pie-chart :sdata="incomeData" :refreshTick="refreshTick"></pie-chart>
          <div class="data-table card">
            <table>
              <thead>
                <tr>
                  <th class="label-cell">收入类型</th>
                  <th class="numeric-cell">金额</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in incomeData" :key="item.name">
                  <td class="label-cell">{{item.name}}</td>
                  <td class="numeric-cell">{{item.value | money}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </f7-tab>
        <f7-tab id="income-expense-tab3" @tab:show="resizeChart()">
          <pie-chart :sdata="expenseChartData" :refreshTick="refreshTick"></pie-chart>
          <div class="data-table card">
            <table>
              <thead>
                <tr>
                  <th class="label-cell">支出科目</th>
                  <th class="numeric-cell">金额</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in expenseData" :key="item.name">
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
.data-list {
  margin-top: 15px;
}
.tabs .tab {
  width: 290px;
}
</style>

<style>

</style>
<script>
import { bus, moneyString } from "common";
import Right from "./components/IncomeExpenseRight";
import api from "api/Stat";
import CONST from "const";
import PieChart from "components/PieChart";
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
      totalData: [],
      incomeData: [],
      expenseData: [],
      expenseChartData: [],
      refreshTick: null
    };
  },
  components: { PieChart, BarChart },  
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
        .incomeExpense(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
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
      this.convertTotalData(data.Total);
      this.convertIncomeData(data.Income);
      this.convertExpenseData(data.Expenses);
    },
    convertTotalData(data) {
      this.totalData = data.map(item => {
        return {
          name: item.ZZName,
          data: [item.IncomeTotal, item.ExpensesTotal, item.NetIncomeTotal]
        };
      });
    },
    convertIncomeData(data) {
      this.incomeData = data.map(item => {
        return {
          name: item.Subject,
          value: item.Amount
        };
      });
    },
    convertExpenseData(data) {
      this.expenseData = data.map(item => {
        return {
          name: item.Subject,
          value: item.Amount
        };
      });

      var total = 0;
      data.forEach(item => {
        total += item.Amount;
      });
      var other = 0;
      var chartData = data.filter(item => {
        if (item.Amount / total < 0.01) {
          other += item.Amount;
          return false;
        } else {
          return true;
        }
      });
      if (other > 0) {
        chartData.push({ Subject: "其他", Amount: other });
      }

      this.expenseChartData = chartData.map(item => {
        return {
          name: item.Subject,
          value: item.Amount
        };
      });
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
    },
    resizeChart() {
      this.refreshTick = +new Date();
    }
  }
};
</script>



