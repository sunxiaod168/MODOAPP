<template>
  <f7-page nav-title="密码修改">
    <f7-list>
      <f7-list-item>
        <f7-label>原密码</f7-label>
        <f7-input type="password" placeholder="原密码" v-model="oldPwd" /></f7-list-item>
      <f7-list-item>
        <f7-label>新密码</f7-label>
        <f7-input type="password" placeholder="新密码" v-model="newPwd" /></f7-list-item>
      <f7-list-item>
        <f7-label>确认新密码</f7-label>
        <f7-input type="password" placeholder="再次输入新密码" v-model="newPwd2" /></f7-list-item>
    </f7-list>
    <f7-block>
      <f7-button color="red" fill big @click="submit">修改密码</f7-button>
    </f7-block>
  </f7-page>
</template>
<style scoped>

</style>
<script>
import api from "api/User";
import CONST from "const";

export default {
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      newPwd2: ""
    };
  },
  methods: {
    submit() {
      if (this.checkInput()) {
        var params = {
          oldPwd: this.oldPwd,
          newPwd: this.newPwd,         
        };

        var me = this;
        api
          .changePassword(params)
          .then(function(response) {
            var data = response.data;
            if (data.status === CONST.STATUS_SUCCESS) {
              me.$f7.alert("", "修改成功");
            } else {
              me.$f7.alert("",data.msg);
            }
          })
          .catch(function(err) {
            me.$f7.alert("",err);
          });
      }
    },
    checkInput() {
      if (this.oldPwd.length == 0) {
        this.$f7.alert("", "原密码不能为空");
        return false;
      }
      if (this.newPwd.length == 0) {
        this.$f7.alert("", "新密码不能为空");
        return false;
      }
      if (this.newPwd2.length == 0) {
        this.$f7.alert("", "确认新密码不能为空");
        return false;
      }
      if (this.newPwd != this.newPwd2) {
        this.$f7.alert("", "两次输入的新密码不一致");
        return false;
      }

      return true;
    }
  }
};
</script>


