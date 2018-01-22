<template>
    <div>
        <p class="right-navbar">过滤条件</p>
        <f7-block-title>仓库名称</f7-block-title>
        <f7-list>
            <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
            <f7-list-item checkbox v-model="zzids" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
        </f7-list>
        <f7-block-title>可用数量,不包含送货日期在</f7-block-title>
        <f7-list>
            <f7-list-item name="canUse" radio v-model="canUseType" input-value="1" value="1" title="一周之内的订单" key="1"></f7-list-item>
            <f7-list-item name="canUse" radio v-model="canUseType" input-value="2" value="2" title="15天之内的订单" key="2"></f7-list-item>
            <f7-list-item name="canUse" radio v-model="canUseType" input-value="3" value="3" title="一个月之内的订单" key="3"></f7-list-item>
        </f7-list>
    </div>
</template>

<script>

import { bus } from "common";
import api from "api/Org";
import CONST from "const";


var $$ = window.Dom7;

export default {
  props: ["zzid", "type"],
  data() {
    return {
      checkAll: false,
      orgList: [],
      zzids: [],
      canUseType: 0
    };
  },
  mounted() {
    var me = this;
    bus.$on("rightPanelClosed", function() {
      bus.$emit("orgSelected", { zzids: me.zzids, canUseType: me.canUseType });
    });
    this.loadData()
  },
  methods: {
    loadData() {
      var me = this;
      api
        .orgList({ zzid: this.zzid, type: this.type })
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

