<template>

  <f7-list>
    <f7-list-item v-permission="DELIVERY_INSTALL_PLAN"  class="no-bottom-border" media="<i class='list-icon icon-install-plan'></i>" title="配送安装计划" link="/delivery-install-plan"/>
    <f7-list-item class="devider"/>
    <f7-list-item v-permission="DELIVERY_DELIVERY_REPORT" media="<i class='list-icon icon-delivery-report'></i>" title="送货完工汇报" link="/delivery-report"/>
    <f7-list-item v-permission="DELIVERY_INSTALL_REPORT" media="<i class='list-icon icon-install-report'></i>" title="安装完工汇报" link="/install-report"/>
  </f7-list>

</template>
<style scoped>

</style>

<script>
import { Permissions } from "const";

export default {
  data() {
    return {
      DELIVERY_INSTALL_PLAN: Permissions.DELIVERY_INSTALL_PLAN,
      DELIVERY_DELIVERY_REPORT: Permissions.DELIVERY_DELIVERY_REPORT,
      DELIVERY_INSTALL_REPORT: Permissions.DELIVERY_INSTALL_REPORT
    };
  }
};
</script>
