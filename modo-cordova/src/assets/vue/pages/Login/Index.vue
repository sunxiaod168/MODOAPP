<template>

  <f7-page login-scree name="login">
    
    <f7-list>
      <f7-list-item>
        <f7-label>用户名</f7-label>
        <f7-input v-model="uname" type="text" placeholder="用户名"/>
      </f7-list-item>
      <f7-list-item>
        <f7-label>密码</f7-label>
        <f7-input v-model="pwd" type="password" placeholder="密码"/>
      </f7-list-item>   
      <f7-list-item>
        <f7-button class="btn-login" big active @click="login">登录</f7-button>
      </f7-list-item>
      <f7-list-label>
        <p>{{ msg }}</p>
      </f7-list-label>
    </f7-list>
  </f7-page>

</template>
<style scoped>
.btn-login {
  width: 100%;
}
.list-block {
  margin: 0;
}
</style>

<script>
import api from 'api'
import CONST from 'const'

export default {
  data() {
    return {
      uname: '',
      pwd: '',
      msg: ''
    }
  },
  methods: {
    login() {
      var me = this
      api.user.login(
        this.uname,
        this.pwd,
        function(response) {
          var data = response.data
          if (data.status === CONST.STATUS_SUCCESS) {
            me.$store.commit('setUserInfo', data.data)
            me.$router.load({ url: '/tabbar/', pushState: false })
          } else {
            me.msg = data.msg
          }
        },
        function(err) {
          me.msg = err
        }
      )
    }
  }
}
</script>


