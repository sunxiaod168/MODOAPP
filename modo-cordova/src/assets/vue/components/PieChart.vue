<template>
  <chart :options="option" :auto-resize="true" :style="{width: '100%'}" theme="walden"></chart>
</template>

<style>

</style>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";

export default {
  props: ["sdata", "refreshTick"],
  data() {
    return {
      option: {
        legend: {
          bottom: 0
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "90%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{b}\n{c}\n{d}%"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }, 
            data:[]
          }
        ]
      },
      unwatch: []
    };
  },
  mounted() {
    var sdataUnwatch = this.$watch("sdata", function(newVal, oldVal) {
     
      this.option.series[0].data = newVal;
    });
    this.unwatch.push(sdataUnwatch);

    var refreshUnwatch = this.$watch("refreshTick", function(newVal, oldVal) {
      if (newVal !== null) {
        this.$children[0].resize();
      }
    });
    this.unwatch.push(refreshUnwatch);
  },
  beforeDestroy() {
    this.unwatch.forEach(unwatch => {
      unwatch();
    });
  }
};
</script>

