<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-multi-selector :params="orgParams" v-model="zzids" title="组织名称"></org-multi-selector>
    <f7-block-title class="md-block-title">日期范围</f7-block-title>
    <f7-block>
      <label>开始日期</label><date-picker  v-model="startDate" placeholder="开始日期"></date-picker>
      <label>结束日期</label><date-picker  v-model="endDate" placeholder="结束日期"></date-picker>    
      <f7-card>
        <f7-card-header>此日期针对不同的金额统计，有不同的含义。</f7-card-header>
        <f7-card-content>
          <f7-list>
            <f7-list-item>针对送货金额、送货成本金额:此日期表示为单据的安装完成日期</f7-list-item>
            <f7-list-item>针对订货金额、订货成本金额、支出金额:此日期表示为单据的审核通过日期</f7-list-item>
            <f7-list-item>针对取消金额:此日期表示为订单取消日期</f7-list-item>
          </f7-list>

        </f7-card-content>
      </f7-card>
    </f7-block>
  </div>
</template>
<style scoped>
.card{margin:0;}
.card-header{font-size:14px;}
.list-block{font-size: 12px;}
</style>

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
        zzid: this.$store.state.userInfo.zzid,
        type: "profit"
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
