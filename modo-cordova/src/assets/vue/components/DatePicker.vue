<template>

  <div class="date-picker">
    <label>{{title}}</label>
    <i class="far fa-calendar-alt"></i>
    <f7-input type="text" :placeholder="placeholder" :id="id" />
  </div>

</template>
<style>
.date-picker {
  margin-bottom: 1em;
}
.date-picker > label {
  margin-right: 1px;
}
.date-picker > i {
  margin-right: 1em;
}
.date-picker > .item-input {
  display: inline-block;
}
</style>
<script>
import { MonthNames, DayNames } from "const";

export default {
  props: ["title", "id", "value", "placeholder"],
  data() {
    return {      
      initValue: null,
      unwatch: null
    };
  },
  created() {
    this.initValue = this.value;
  },
  mounted() {
    var picker = this.$f7.calendar(this.dateConfig("#" + this.id));
    var me = this;
    this.unwatch = this.$watch("value", function(newVal, oldVal) {   
      if(newVal == null){  
        picker.setValue([])
      }
    });
  },
  beforeDestroy() {
    this.unwatch();
  },
  methods: {
    dateConfig(input) {
      var today = new Date();
      var me = this;
      return {
        input: input,
        value: me.initValue,
        monthNames: MonthNames,
        monthNamesShort: MonthNames,
        dayNames: DayNames,
        dayNamesShort: DayNames,
        firstDay: 7,
        onChange(p, values, displayValues) {
          me.$emit("input", values[0]);
        }
      };
    }
  }
};
</script>





