<template>
  <f7-page nav-title="业绩统计分析" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">

    <chart :options="colOption" :auto-resize="true" :style="{width: '100%'}" theme="walden"></chart>

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
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import { bus } from "common";
import Right from "./components/AchievementRight";
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
      pageData: {},
      colOption: {},
      lineOption: {},
      barOption: {}
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
      var labelOption = {
        normal: {
          show: true,
          position: 'insideBottom',
          distance: 15,
          align: 'left',
          verticalAlign:'middle',
          rotate: 90,
          formatter: "{c}  {name|{a}}",
          fontSize: 16,
          rich: {
            name: {
              textBorderColor: "#fff"
            }
          }
        }
      };
      this.colOption = {
        //color: ["#003366", "#006699", "#4cabce", "#e5323e"],
        tooltip: {
          trigger: "item"
        },
        legend: {},
        xAxis: [
          {
            type: "category",
            axisTick: { show: false }           
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: "Forest",
            type: "bar",
            barGap: 0,
            label: labelOption,
            data: [320]
          },
          {
            name: "Steppe",
            type: "bar",
            label: labelOption,
            data: [220]
          },
          {
            name: "Desert",
            type: "bar",
            label: labelOption,
            data: [150]
          },
          {
            name: "Wetland",
            type: "bar",
            label: labelOption,
            data: [98]
          }
        ]
      };
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      this.query.zzid = payload;
      this.loadData();
    }
  }
};
</script>

