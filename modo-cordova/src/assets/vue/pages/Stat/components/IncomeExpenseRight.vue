<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-multi-selector :params="orgParams" v-model="zzids" title="组织名称"></org-multi-selector>
    <f7-block-title>日期范围: 此日期为单据的审核通过日期</f7-block-title>
    <f7-block>
      <date-picker title="开始日期" placeholder="请选择开始日期" id="start-date" v-model="startDate"></date-picker>
      <date-picker title="结束日期" placeholder="请选择结束日期" id="end-date" v-model="endDate"></date-picker>
    </f7-block>
  </div>
</template>
<style scoped>
.content-block-title {
  white-space: normal;
  line-height: 1.5;
  margin-top:0;
}
</style>

<style>

</style>

<script>
import { bus } from "common";
import DatePicker from "components/DatePicker";
import OrgMultiSelector from "components/OrgMultiSelector";
import RightNavBar from "components/RightNavBar";

export default {
  data() {
    return {
      orgParams: {
        zzid: this.$store.state.userInfo.zzid,
        type: "income-expense"
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
