<template>
  <f7-page nav-title="我的信息" @page:beforeinit="initHandle" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-list>
      <f7-list-item title="真实姓名">{{RealName}}</f7-list-item>
      <f7-list-item title="所属组织">{{ZZName}}</f7-list-item>
      <f7-list-item title="入职时间">{{EntryTime | date}}</f7-list-item>
      <f7-list-item title="登录名">{{LoginName}}</f7-list-item>
      <f7-list-item title="角色名">{{RoleName}}</f7-list-item>
      <f7-list-item title="手机号">{{Phone}}</f7-list-item>
      <f7-list-item title="启用状态">{{enableStatus}}</f7-list-item>
      <f7-list-item title="生效时间">{{EnableTime | datetime}}</f7-list-item>
      <f7-list-item title="失效时间">{{DisableTime | datetime}}</f7-list-item>
    </f7-list>
  </f7-page>
</template>
<style scoped>

</style>
<script>
import api from "api/User";
import CONST from 'const'

export default {
  data() {
    return {
      ID: 0,
      LoginName: "",
      RoleName: "",
      RealName: "",
      Enable: null,
      EnableTime: null,
      DisableTime: null,
      ZZName: "",
      Phone: "",
      EntryTime: null,
      isLoading: false
    };
  },
  computed: {
    enableStatus() {
      return this.Enable ? "已启用" : "未启用";
    }
  },
  methods: {
    initHandle() {
      this.loadData();
    },
    onRefresh() {
      this.loadData();
    },
    loadData() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      var me = this;
      api
        .profile()
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.convertData(data.data);
          }
          me.$f7.pullToRefreshDone();
          me.isLoading = false;
        })
        .catch(function(err) {
          me.$f7.pullToRefreshDone();
          me.isLoading = false;
        });
    },
    convertData(data) {
      this.ID = data.ID;
      this.LoginName = data.LoginName;
      this.RoleName = data.RoleName;
      this.RealName = data.RealName;
      this.Enable = data.Enable;
      this.EnableTime = data.EnableTime;
      this.DisableTime = data.DisableTime;
      this.ZZName = data.ZZName;
      this.Phone = data.Phone;
      this.EntryTime = data.EntryTime;
    }
  }
};
</script>
