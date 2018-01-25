<template>

  <f7-list>
    <f7-list-item v-permission="p1" media="<i class='list-icon icon-retail'></i>" title="销售价格查询" link="/retail-price-query"/>
    <f7-list-item class="no-bottom-border" v-permission="p2" media="<i class='list-icon icon-cost'></i>" title="成本价格查询" link="/cost-price-query"/>
    <f7-list-item class="devider"/>
    <f7-list-item v-permission="p3" media="<i class='list-icon icon-inventory'></i>" title="实时库存查询" link="/inventory-query"/>
    <f7-list-item v-permission="p4" media="<i class='list-icon icon-order-progress'></i>" title="订单进度查询" link="/order-progress-query"/>
  </f7-list>

</template>
<style scoped>

</style>
<script>
import {Permissions} from 'const'


export default {
  data(){
    return {
      p1: Permissions.QUERY_RETAIL_PRICE,
      p2: Permissions.QUERY_COST_PRICE,
      p3: Permissions.QUERY_INVENTORY,
      p4: Permissions.QUERY_ORDER_PROGRESS      
    }
  }
  
}
</script>



