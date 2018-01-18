<template>
    <div class="content-block searchbar-not-found" :style="{display: display}">
        <p>没有找到您要查找的数据</p>    
    </div>
</template>

<script>
export default {
  props:['display'],
  data(){
      return {
         
      }
  }
};
</script>

<style scoped>
.searchbar-not-found{
    position: absolute;
    padding-top: 90px;
    z-index: 10;
    width: 100%;
    text-align: center;
    height: 100%;
    margin: 0;
}
</style>
