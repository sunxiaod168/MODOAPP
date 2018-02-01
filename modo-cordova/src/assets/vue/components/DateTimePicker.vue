<template>
    <date-picker v-model="date" :type="type" :format="format" :placeholder="placeholder" confirm confirm-text="完成" width="100%" :minute-step="1"></date-picker>
</template>
<style>
.mx-datepicker {
  width: 100%;
  margin-bottom: 10px;
}
</style>

<script>
import DatePicker from "vue2-datepicker";

export default {
  props: ["value", "type", "placeholder"],
  components: {
    DatePicker
  },
  data() {
    return {
      date: null,
      unwatch: []
    };
  },
  computed: {
    format() {
      if (this.type === "datetime") {
        return "yyyy-MM-dd HH:mm";
      } else {
        return "yyyy-MM-dd";
      }
    }
  },
  mounted() {
    this.date = this.value;
    var dateUnwatch = this.$watch("date", function(newVal, oldVal) {
      this.$emit("input", newVal);
    });
    this.unwatch.push(dateUnwatch);
    var valueUnwatch = this.$watch("value", function(newVal, oldVal) {
      this.date = newVal;
    });
    this.unwatch.push(valueUnwatch);
  },
  beforeDestroy() {
    this.unwatch.forEach(unwatch => {
      unwatch();
    });
  }
};
</script>

