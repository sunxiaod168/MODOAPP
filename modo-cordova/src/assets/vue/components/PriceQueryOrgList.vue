<template>
  <div>
    <p class="right-navbar">过滤条件</p>
    <f7-block-title>组织名称</f7-block-title>
    <f7-list>
      <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
      <f7-list-item checkbox v-model="zzids" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
    </f7-list>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { bus } from "common";
import api from "api/Org";
import CONST from "const";

var $$ = window.Dom7;

export default {
  data() {
    return {
      msg:'',
      checkAll: false,
      orgList: [],
      zzids: []
    };
  },
  mounted() {
    var me = this;
    bus.$on("rightPanelClosed", function() {
      bus.$emit("orgSelected", me.zzids);
    });
    this.loadData();
  },
  methods: {
    loadData() {

      var me = this;
      api
        .orgList({ zzid: me.$store.state.userInfo.zzid, type: 'price' })
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
    }
  }
};
</script>

<style>

</style>

