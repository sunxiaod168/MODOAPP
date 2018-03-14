<template>
  <div>
    <f7-list>
      <f7-list-item media="<i class='list-icon icon-profile'></i>" title="我的信息" link="/profile" />
      <f7-list-item class="no-bottom-border" media="<i class='list-icon icon-modify-pwd'></i>" title="密码修改" link="/change-password" />
      <f7-list-item class="devider" />
      <f7-list-item media="<i class='list-icon icon-about'></i>" title="关于墨斗云" link="/about" />
      <f7-list-item media="<i class='list-icon icon-version'></i>" title="版本升级" link="/version" />
    </f7-list>
    <f7-block>
      <f7-button color="red" fill big @click="logout">退出</f7-button>
    </f7-block>
  </div>
</template>
<style scoped>

</style>

<script>
import api from "api/User";
import CONST from "const";

export default {
  methods: {
    logout() {
      var me = this;

      this.$f7.confirm(
        "确定要退出当前账户吗？","",
        function() {
          
          api
            .logout()
            .then(function(response) {
              var data = response.data;
              if (data.status === CONST.STATUS_SUCCESS) {
                me.$router.back({
                  url: "/login",
                  force: true
                });
              } else {
                me.$f7.alert("", data.msg);
              }
            })
            .catch(function(err) {
              me.$f7.alert("", err);
            });
        },
        function() {}
      );
    }
  }
};
</script>



