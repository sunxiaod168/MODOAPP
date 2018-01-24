<template>
    <div class="org-select">
         <f7-block-title>{{title}}</f7-block-title>
        <f7-list>
            <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
            <f7-list-item checkbox v-model="zzids" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
        </f7-list>        
    </div>
</template>

<style>
    .org-select .content-block-title{
        margin: 20px 15px 0;
    }
    .org-select .list-block{
        margin:0;
    }
    .org-select .list-block ul::before,.org-select .list-block ul::after{
        display: none;
    }
</style>
<script>
import api from "api/Org";
import CONST from "const";

export default {
  props: ["value", "params","title"],
  mounted() {
    var me = this;

    var zzidUnwatch = this.$watch("zzids", function(newVal, oldVal) {
      me.$emit("input", newVal);
    });
    this.unwatch.push(zzidUnwatch);

    var valUnwatch = this.$watch("value", function(newVal, oldVal) {
      me.zzids = newVal;
      me.checkAll = me.zzids.length == me.orgList.length
    });
    this.unwatch.push(valUnwatch);

    this.loadData();
  },
  beforeDestroy() {
    this.unwatch.forEach(unwatch => {
        unwatch();
    });
  },
  data() {
    return {     
      checkAll: false,
      orgList: [],
      zzids: [],
      unwatch: []
    };
  },
  methods: {
    loadData() {
      var me = this;
      api
        .orgList(this.params)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.orgList = data.data;
          } 
        })
        .catch(function(err) {
          
        });
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
      if (this.checkAll) {
        this.zzids = this.orgList.map(org => org.zzid);
      } else {
        this.zzids = [];
      }
    }
  }
};
</script>

