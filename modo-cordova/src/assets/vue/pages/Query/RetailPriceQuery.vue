<template>

  <f7-page nav-title="销售价格查询" @page:beforeinit="initHandle" @page:back="backHandler">

  </f7-page>

</template>
<style>

</style>
<script>
import OrgListSelect from "components/OrgListSelect";

export default {
  methods: {
    initHandle: function() {
      this.$store.state.navRightVisiable = true;
      this.$store.state.navRightTitle = '';
      this.$store.state.navRightIcon = 'fas fa-filter';
      this.$store.state.currentRightView = OrgListSelect;
    },
    backHandler: function() {
      this.$store.state.navRightVisiable = false;
    }
  }
};
</script>


