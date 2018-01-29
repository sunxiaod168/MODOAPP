<template>
    <chart :options="option" :auto-resize="true" :style="{width:'100%'}" theme="walden"></chart>
</template>

<style>

</style>

<script>
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

export default {
  props: ["sdata", "vertical","seriesLabelFormatter"],
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          confine: true
        },
        legend: {
          bottom: 0
        },
        grid:{containLabel:true, top:20, left:20, right:20},
        xAxis: [
          {
            type: "category",
            axisTick: { show: false }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLabel:{ show: true}
          }
        ],
        
        series: []
      },
      labelOption: {
        normal: {
          show: true,
          position: "insideBottom",
          distance: 10,
          align: "left",
          verticalAlign: "middle",
          rotate: 90,         
          fontSize: 14,
          formatter:this.seriesLabelFormatter,          
        }
      },
      unwatch: null
    };
  },
  mounted() {
    if (this.vertical === false) {
      this.option.xAxis = [
        {
          type: "value",         
          axisLabel:{ show: true, rotate:90 }
        }
      ];
      this.option.yAxis = [
        {
          type: "category",     
          axisLabel:{ show: false }    
        }
      ];
      this.option.xAxis[0].position = "top";
      this.labelOption.normal.rotate = 0;
      this.labelOption.normal.position = "insideLeft";      
    }
    var me = this;
    this.unwatch = this.$watch("sdata", function(newVal, oldVal) {
      newVal.forEach(item => {
        item.type = "bar";
        item.label = me.labelOption;
      });
      me.option.series = newVal;
    });
  },
  beforeDestroy() {
    this.unwatch();
  }
};
</script>
