<template>

  <f7-list>
    <f7-list-item v-permission="STAT_ASSET" media="<i class='list-icon icon-asset'></i>" title="资产统计分析" link="/asset-stat"/>
    <f7-list-item v-permission="STAT_PROFIT_ACCOUNTING" class="no-bottom-border" media="<i class='list-icon icon-profit'></i>" title="利润核算分析" link="/profit-accounting"/>
    <f7-list-item class="devider"/>
    <f7-list-item v-permission="STAT_ORDER" media="<i class='list-icon icon-achievement'></i>" title="订单统计分析" link="/order-stat"/>
    <f7-list-item  v-permission="STAT_ACHIEVEMENT" class="no-bottom-border" media="<i class='list-icon icon-unfinish-order'></i>" title="业绩统计分析" link="/achievement-stat"/>
    <f7-list-item class="devider"/>
    <f7-list-item v-permission="STAT_INVENTORY" media="<i class='list-icon icon-storage'></i>" title="存货统计分析" link="/inventory-stat"/>
    <f7-list-item v-permission="STAT_INCOME_EXPENSES" media="<i class='list-icon icon-income-expense'></i>" title="收支统计分析" link="/income-expenses-stat"/>
  </f7-list>

</template>
<style scoped>

</style>

<script>
import { Permissions } from "const";

export default {
  data() {
    return {
      STAT_ASSET: Permissions.STAT_ASSET,
      STAT_PROFIT_ACCOUNTING: Permissions.STAT_PROFIT_ACCOUNTING,
      STAT_ORDER: Permissions.STAT_ORDER,
      STAT_ACHIEVEMENT: Permissions.STAT_ACHIEVEMENT,
      STAT_INVENTORY: Permissions.STAT_INVENTORY,
      STAT_INCOME_EXPENSES: Permissions.STAT_INCOME_EXPENSES
    };
  }
};
</script>



