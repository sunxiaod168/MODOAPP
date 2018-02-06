<template>
  <f7-page nav-title="版本升级">
    <f7-block>
      <h1>当前版本：{{version}}</h1>
      <p>发布时间：{{publishDate}}</p>
      <p v-if="hasNew">      
        <f7-button fill big @click="checkVersion" :href="url" external>下载新版本：{{newVersion}}</f7-button>
      </p>
      <p v-else>
        <f7-button fill big @click="checkVersion">检查更新</f7-button>
      </p>      
    </f7-block>
  </f7-page>
</template>
<style scoped>
h1 {
  font-size: 18px;
}
.download-link {
  font-size: 16px;
  padding-bottom: 3px;
  border-bottom: 2px solid;
}
.icon-download {
  display: inline-block;
  vertical-align: middle;
}
</style>
<script>
import api from "api/Version";
import CONST from "const";

export default {
  data() {
    return {
      version: "V1.0.0",
      publishDate: "2018-02-06",
      url: "",
      hasNew: false,
      newVersion: ""
    };
  },
  methods: {
    checkVersion() {
      var me = this;
      api
        .check()
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var version = data.data.version;
            if (version === me.version) {
              me.$f7.alert("", "已经是最新版本");
            } else {
              me.hasNew = true;
              me.url = data.data.url;
              me.newVersion = version;
            }
          } else {
            me.$f7.alert(data.msg, "版本检测失败");
          }
        })
        .catch(function(err) {
          me.$f7.alert(err, "版本检测失败");
        });
    }
  }
};
</script>


