<template>

  <f7-page login-scree name="login" class="start-bg">

    <f7-list>
      <f7-list-item>
        <f7-label>用户名</f7-label>
        <f7-input v-model="uname" type="text" placeholder="用户名" />
      </f7-list-item>
      <f7-list-item>
        <f7-label>密码</f7-label>
        <f7-input v-model="pwd" type="password" placeholder="密码" />
      </f7-list-item>
      <f7-list-item>
        <f7-button class="btn-login" big active @click="login">登录</f7-button>
      </f7-list-item>
      <f7-list-label>
        <p class="err-msg">{{ msg }}</p>
      </f7-list-label>
    </f7-list>
  </f7-page>

</template>
<style scoped>
.page>>>.page-content {
  display: table;
  width: 100%;
  background-color: #fff;
}
.page>>>.page-content .list-block {
  display: table-cell;
  vertical-align: middle;
}

.btn-login {
  width: 100%;
}

.list-block {
  margin: 0;
}
.list-block>>>.item-inner::after {
  display: none;
}
.list-block>>>ul {
  background: none;
  color: #fff;
}
.list-block>>>ul::before {
  display: none;
}
.list-block>>>ul::after {
  display: none;
}
.item-input>>>input,
.err-msg {
  color: #fff;
}
</style>

<script>
import api from "api/User";
import CONST from "const";

export default {
  data() {
    return {
      uname: "pAdmin",
      pwd: "admin@modocloud",
      msg: ""
    };
  },
  methods: {
    login() {
      var me = this;
      api
        .login({ uname: this.uname, pwd: this.pwd })
        .then(function(response) {
          var data = response.data;

          if (data.status === CONST.STATUS_SUCCESS) {
            me.$store.commit("setUserInfo", data.data);
            me.$router.load({ url: "/tabbar/", pushState: false });
          } else {
            me.msg = data.msg;
          }
        })
        .catch(function(err) {
          me.msg = err.message;        
        });
    }
  }
};
</script>


