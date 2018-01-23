<template>
    <div>
        <p class="right-navbar">过滤条件</p>
        <f7-block-title>仓库名称</f7-block-title>
        <f7-list>
            <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
            <f7-list-item checkbox v-model="zzids" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
        </f7-list>
        <f7-block-title>可用数量不包含<f7-input type="switch" @change="canUseTypeChange" :wrap="false" class="switch" v-model="switchChecked"></f7-input></f7-block-title>
        <f7-list>
            <f7-list-item name="canUse" :disabled="disableCanUseType" :class="{disable: disableCanUseType}"  radio v-model="canUseType" input-value="1" value="1" title="一周之内送货的订单" key="1"></f7-list-item>
            <f7-list-item name="canUse" :disabled="disableCanUseType" :class="{disable: disableCanUseType}" radio v-model="canUseType" input-value="2" value="2" title="15天之内送货的订单" key="2"></f7-list-item>
            <f7-list-item name="canUse" :disabled="disableCanUseType"  :class="{disable: disableCanUseType}" radio v-model="canUseType" input-value="3" value="3" title="一个月之内送货的订单" key="3"></f7-list-item>
        </f7-list>
    </div>
</template>
<style scoped>
  .switch{
    margin-left:10px;
  }
  .disable{
    color: #777;
  }
</style>

<script>

import { bus } from "common";
import api from "api/Org";
import CONST from "const";


var $$ = window.Dom7;

export default { 
  data() {
    return {
      checkAll: false,
      orgList: [],
      zzids: [],
      canUseType: 0,      
      switchChecked: false,
    };
  },
  computed:{
    disableCanUseType(){
      return !this.switchChecked;
    }
  },
   mounted() {    
    bus.$on("rightPanelClosed", this.rightDone);
    this.loadData();
  },
  beforeDestroy(){
    bus.$off('rightPanelClosed', this.rightDone)
  },   
  methods: {
    loadData() {
      var me = this;
      api
        .orgList({ zzid: me.$store.state.userInfo.zzid, type: 'inventory' })
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.orgList = data.data;
          } else {
            me.msg = data.msg;
          }
        })
        .catch(function(err) {
          me.msg = data.msg;
        });
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
      if (this.checkAll == true) {
        this.zzids = this.orgList.map(org => org.zzid);
      } else {
        this.zzids = [];
      }
    },
    rightDone(){
      bus.$emit("rightDone", { zzids: this.zzids, canUseType: this.canUseType });
    },
    canUseTypeChange(){
      if(this.switchChecked == false){
        this.canUseType = 0;
      }
    }
  }
};
</script>


