<template>
  <div>
    <p class="right-navbar">组织机构</p>  
    <f7-block-title>请选择组织</f7-block-title>  
    <f7-list>
      <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
      <f7-list-item checkbox v-model="org.checked" v-for="org in orgList" :value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
    </f7-list>
  </div>
</template>

<script>
import { bus } from "common";
var $$ = window.Dom7;

export default {
  data() {
    return {
      checkAll: false,
      orgList: [
        {
          zzid: "40008001",
          zzname: "红星1店",
          checked: false
        },
        {
          zzid: "40008002",
          zzname: "红星2店",
          checked: false
        }
      ]
    };
  },
  mounted() {
    var me = this;
    bus.$on("rightPanelClosed", function() {
      var orgs = $$("input[name=org]:checked");
      var selected = [];
      me.orgList.forEach(org => {
        orgs.forEach(element => {
          if (org.zzid == element.value) {
            selected.push(org);
          }
        });
      });
      bus.$emit("orgSelected", selected);
    });
  },
  methods: {
    toggleAll() {
      this.checkAll = !this.checkAll;
      this.orgList.forEach(org => {
        org.checked = this.checkAll;
      });
    }
  }
};
</script>

<style>

</style>

