<template>
    <chart :options="option" :auto-resize="true" :style="{width: '100%'}" theme="walden"></chart>
</template>

<style>

</style>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";

export default {
  props: ["sdata"],
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          confine: true,
          formatter: "{b}：{d}%"
        },
        series: []
      },
      unwatch: null
    };
  },
  mounted() {
    var me = this;
    var series = [
      {
        type: "pie",
        radius: "90%",
        center: ["50%", "50%"],
        label: {
          normal: {
            position: "inner"
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        }
      }
    ];
    this.unwatch = this.$watch("sdata", function(newVal, oldVal) {
      series[0].data = newVal;
      me.option.series = series;
    });
  },
  beforeDestroy() {
    this.unwatch();
  }
};
</script>

