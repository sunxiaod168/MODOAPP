<template>
    <f7-page>
         <f7-navbar>
            <f7-nav-left back-link="取消"/>
            <f7-nav-center>{{navTitle}}</f7-nav-center>
            <f7-nav-right>
              <f7-link @click="save">保存</f7-link>
            </f7-nav-right>
          </f7-navbar>

    </f7-page>
</template>
<style scoped>

</style>
<script>
export default {
  data() {
    return {
        navTitle:''
    };
  },
  methods: {    
   
    save(){

    }
  }
};
</script>