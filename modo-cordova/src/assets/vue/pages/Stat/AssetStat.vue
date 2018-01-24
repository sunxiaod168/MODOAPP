<template>
  <f7-page nav-title="资产统计分析">

    <f7-card>
      <f7-card-header>总资产 ¥2,206,044.44</f7-card-header>
      <f7-card-content>存货总额 ¥936,105.00</f7-card-content>
      <f7-card-content>现金余额 ¥977,697.44</f7-card-content>
      <f7-card-content>应收款总额 ¥292,242.00</f7-card-content>
    </f7-card>
    <f7-card>

      <f7-card-content>
        <chart :options="polar" :auto-resize="true" :style="{width: '100%'}"></chart>
      </f7-card-content>

    </f7-card>
  </f7-page>
</template>
<style>
.echarts {
  height: 300px;
}
</style>
<script>
import Vue from "vue";
import ECharts from "vue-echarts/components/ECharts.vue";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import 'echarts/lib/component/polar'

Vue.component("chart", ECharts);

export default {
  data: function() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      polar: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>

