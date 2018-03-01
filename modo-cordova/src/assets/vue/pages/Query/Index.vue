<template>

  <f7-list>
    <f7-list-item v-permission="QUERY_RETAIL_PRICE" media="<i class='list-icon icon-retail'></i>" title="销售价格查询" link="/retail-price-query"/>
    <f7-list-item v-permission="QUERY_COST_PRICE" class="no-bottom-border" media="<i class='list-icon icon-cost'></i>" title="成本价格查询" link="/cost-price-query"/>
    <f7-list-item class="devider"/>
    <f7-list-item v-permission="QUERY_INVENTORY" media="<i class='list-icon icon-inventory'></i>" title="实时库存查询" link="/inventory-query"/>
    <f7-list-item v-permission="QUERY_ORDER_PROGRESS" media="<i class='list-icon icon-order-progress'></i>" title="订单进度查询" link="/order-progress-query"/>    
  </f7-list>

</template>
<style scoped>

</style>
<script>
import {Permissions} from 'const'


export default {
  data(){
    return {
      QUERY_RETAIL_PRICE: Permissions.QUERY_RETAIL_PRICE,
      QUERY_COST_PRICE: Permissions.QUERY_COST_PRICE,
      QUERY_INVENTORY: Permissions.QUERY_INVENTORY,
      QUERY_ORDER_PROGRESS: Permissions.QUERY_ORDER_PROGRESS      
    }
  }
  
}
</script>



