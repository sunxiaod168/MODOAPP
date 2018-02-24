<template>
  <chart :options="option" :auto-resize="true" :style="{width:'100%'}" theme="walden"></chart>
</template>

<style>

</style>

<script>
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

export default {
  props: [
    "sdata",
    "category",
    "seriesLabelFormatter",
    "left",
    "right",
    "top",
    "bottom"
  ],
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          confine: true,
          axisPointer: {
            type: "shadow"
          },
          extraCssText: "text-align: left;"
        },
        legend: {
          bottom: 0
        },
        grid: {
          left: this.left,
          right: this.right,
          top: this.top,
          bottom: this.bottom,
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            axisLabel: { show: true, rotate: 90 },
            axisTick: { show: false },
            position: "top"
          }
        ],
        yAxis: [
          {
            type: "category",
            data: this.category,
            axisLabel: { show: false }
          }
        ],
        series: []
      },
      labelOption: {
        normal: {
          show: true,
          position: "insideLeft",
          formatter: this.seriesLabelFormatter
        }
      },
      unwatch: []
    };
  },
  mounted() {
    var me = this;
    var unwatch = this.$watch("sdata", function(newVal, oldVal) {
      newVal.forEach(item => {
        item.type = "bar";
        if (!item.label) {
          item.label = me.labelOption;
        }
      });
      me.option.series = newVal;
    });
    this.unwatch.push(unwatch);

    unwatch = this.$watch("category", function(newVal, oldVal) {
      me.option.yAxis[0].data = newVal;
    });
    this.unwatch.push(unwatch);
  },
  beforeDestroy() {
    this.unwatch.forEach(unwatch => {
      unwatch();
    });
  }
};
</script>
