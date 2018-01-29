<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-single-selector :params="orgParams" v-model="zzid" title="组织名称"></org-single-selector>
  </div>
</template>
<style>

</style>
<script>
import { bus } from "common";
import OrgSingleSelector from "components/OrgSingleSelector";
import RightNavBar from "components/RightNavBar";

export default {
  data() {
    return {
      orgParams: {
        zzid: this.$store.state.userInfo.zzid,
        type: "inventory"
      },
      zzid: null
    };
  },
  components: { OrgSingleSelector, RightNavBar },
  mounted() {
    bus.$on("rightPanelClosed", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightPanelClosed", this.rightDone);
  },
  methods: {
    rightDone() {
      bus.$emit("rightDone", this.zzid);
    },
    clear() {
      this.zzid = 0;
    }
  }
};
</script>
