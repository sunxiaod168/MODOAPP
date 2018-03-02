<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-multi-selector :params="orgParams" v-model="zzids" title="组织名称"></org-multi-selector>
    <f7-block-title class="md-block-title">单据保存日期</f7-block-title>
    <f7-block>
      <label>开始日期</label><date-picker  v-model="startDate" placeholder="开始日期"></date-picker>
      <label>结束日期</label><date-picker  v-model="endDate" placeholder="结束日期"></date-picker>     
    </f7-block>
  </div>
</template>
<style>
.md-block-title {
  margin: 20px 15px 0;
}
</style>

<script>
import { bus } from "common";
import DatePicker from "components/DateTimePicker";
import OrgMultiSelector from "components/OrgMultiSelector";
import RightNavBar from "components/RightNavBar";

export default {
  data() {
    return {
      orgParams: {
        type: "order-progress"
      },
      zzids: [],
      startDate: null,
      endDate: null     
    };
  },
  components: { OrgMultiSelector, DatePicker, RightNavBar },
  mounted() {
    bus.$on("rightPanelClosed", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightPanelClosed", this.rightDone);
  },
  methods: {
    rightDone() {
      var query = {
        zzids: this.zzids,
        startDate: this.startDate,
        endDate: this.endDate       
      };
      bus.$emit("rightDone", query);
    },
    clear() {      
      this.zzids = [];
      this.startDate = null;
      this.endDate = null;     
    }
  }
};
</script>
