<template>
  <div>
      <p><label> 用户名</label><input v-model="uname" placeholder="请输入用户名" type="text"/></p>
      <p><label> 密码</label><input v-model="pwd" placeholder="请输入密码" type="password"/></p>
      <p>{{msg}}</p>
      <button @click="login">登录</button>
  </div>
</template>

<script>
import api from 'api'
import Cookie from 'js-cookie'

export default {
  data () {
    return {
      uname: '',
      pwd: '',
      msg: ''
    }
  },
  methods: {
    login () {
      var me = this
      api.login(
        this.uname,
        this.pwd,
        function (response) {
          var data = response.data
          if (data.code === 200) {
            Cookie.set('access_token', data.data.access_token)
            me.$router.push('/Query')
          } else {
            me.msg = data.msg
          }
        },
        function (err) {
          me.msg = err
        }
      )
    }
  }
}
</script>

<style>

</style>

