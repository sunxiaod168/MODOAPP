<template>
  <div>
    <right-nav-bar title="过滤条件" button="清除" @rightNavBarClick="clear"></right-nav-bar>
    <org-multi-selector :params="orgParams" v-model="zzids" title="仓库名称"></org-multi-selector>
    <f7-block-title>可用数量不包含
      <f7-input type="switch" @change="canUseTypeChange" :wrap="false" class="switch" v-model="switchChecked"></f7-input>
    </f7-block-title>
    <f7-list>
      <f7-list-item name="canUse" :disabled="disableCanUseType" :class="{disable: disableCanUseType}" radio v-model="canUseType" input-value="1" value="1" title="一周之内送货的订单" key="1"></f7-list-item>
      <f7-list-item name="canUse" :disabled="disableCanUseType" :class="{disable: disableCanUseType}" radio v-model="canUseType" input-value="2" value="2" title="15天之内送货的订单" key="2"></f7-list-item>
      <f7-list-item name="canUse" :disabled="disableCanUseType" :class="{disable: disableCanUseType}" radio v-model="canUseType" input-value="3" value="3" title="一个月之内送货的订单" key="3"></f7-list-item>
    </f7-list>
  </div>
</template>
<style scoped>
.switch {
  margin-left: 10px;
}
.disable {
  color: #777;
}
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
        type: "inventory"
      },
      zzids: [],
      canUseType: 0,
      switchChecked: false
      
    };
  },
  components: { OrgMultiSelector, RightNavBar },
  computed: {
    disableCanUseType() {
      return !this.switchChecked;
    }
  },
  mounted() {
    bus.$on("rightPanelClosed", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightPanelClosed", this.rightDone);
  },
  methods: {
    rightDone() {
      bus.$emit("rightDone", {
        zzids: this.zzids,
        canUseType: this.canUseType
      });
    },
    canUseTypeChange() {
      if (this.switchChecked == false) {
        this.canUseType = 0;
      }
    },
    clear() {
      this.zzids = [];
      this.canUseType = 0;
      this.switchChecked = false;
    }
  }
};
</script>


