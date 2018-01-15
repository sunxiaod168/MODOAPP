<template>

  <f7-page nav-title="销售价格查询">
    销售价格查询
    <f7-panel right cover>
        right panel
    </f7-panel>


  </f7-page>
  
</template>
<style scoped>

</style>
<script>
export default {
 mounted: function(){
   var me = this;
   console.log('me:' + me.$store.state.token)
 }
}
</script>


