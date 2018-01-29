<template>
    <chart :options="option" :auto-resize="true" :style="{width: '100%'}" theme="walden"></chart>
</template>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
export default {
  props: ["sdata"],
  data() {
    return {
      option: {
        animation: true,
        legend: {
          top: 0,
          padding: [10,0]
        },
        tooltip: {
          trigger: "item",
          confine: true,
          position: function(pt) {
            return [pt[0], 130];
          }
        },
        grid:{containLabel:true, left:0, right:20, bottom:50},
        xAxis: {
          type: "category"
        },
        yAxis: {
          type: "value",
          axisTick: {show:false},
          axisLabel:{ show: true},
        },       
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: []
      },
      unwatch: null
    };
  },
  mounted() {
    var me = this;
    this.unwatch = this.$watch("sdata", function(newVal, oldVal) {
      newVal.forEach(item => {
        item.type = "line";        
      });
      me.option.series = newVal;
    });
  },
  beforeDestroy(){
      this.unwatch()
  }
};
</script>

<style>

</style>
