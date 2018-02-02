<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-multi-selector :params="orgParams" v-model="zzids" title="组织名称"></org-multi-selector>   
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
import OrgMultiSelector from "components/OrgMultiSelector";
import RightNavBar from "components/RightNavBar";

export default {
  data() {
    return {
      orgParams: {
        zzid: this.$store.state.userInfo.zzid,
        type: "install-report"
      },
      zzids: [],    
    };
  },
  components: { OrgMultiSelector, RightNavBar },
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
      };
      bus.$emit("rightDone", query);
    },
    clear() {
      this.zzids = [];     
    }
  }
};
</script>
