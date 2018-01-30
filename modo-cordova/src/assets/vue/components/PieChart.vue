<template>
    <chart :options="option" :auto-resize="true" :style="{width: '100%'}" theme="walden"></chart>
</template>

<style>

</style>
<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";

export default {
  props: ["sdata","refreshTick"],
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
      unwatch: []
    };
  },
  mounted() {   
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
     var sdataUnwatch= this.$watch("sdata", function(newVal, oldVal) {
      series[0].data = newVal;
      this.option.series = series;
    });   
    this.unwatch.push(sdataUnwatch);

    var refreshUnwatch= this.$watch("refreshTick", function(newVal, oldVal) {
      if(newVal !== null){
        this.$children[0].resize()
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

