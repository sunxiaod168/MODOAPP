<template>
  <div class="org-select">
    <f7-block-title>{{title}}</f7-block-title>
    <f7-list>
      <f7-list-item radio v-model="zzid" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
    </f7-list>
  </div>
</template>

<style>
.org-select .content-block-title {
  margin: 20px 15px 0;
}
.org-select .list-block {
  margin: 0;
}
.org-select .list-block ul::before,
.org-select .list-block ul::after {
  display: none;
}
</style>
<script>
import api from "api/Org";
import CONST from "const";

export default {
  props: ["value", "params", "title"],
  data() {
    return {
      orgList: [],
      zzid: 0,
      unwatch: []
    };
  },
  mounted() {
    var me = this;

    var zzidUnwatch = this.$watch("zzid", function(newVal, oldVal) {
      me.$emit("input", newVal);
    });
    this.unwatch.push(zzidUnwatch);

    var valUnwatch = this.$watch("value", function(newVal, oldVal) {
      me.zzid = newVal;
    });
    this.unwatch.push(valUnwatch);

    this.loadData();
  },
  beforeDestroy() {
    this.unwatch.forEach(unwatch => {
      unwatch();
    });
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
        .catch(function(err) {});
    }
  }
};
</script>

