<template>
  <f7-page nav-title="版本升级">
    <f7-block>
      <h1>当前版本：{{version}}</h1>
      <p>发布时间：{{publishDate}}</p>
      <div v-if="hasNewAndroid" class="download">
        <f7-button fill big @click="androidDownload" v-show="isDownloading == false">下载新版本：{{newVersion}}</f7-button>
        <div class="progress-back" v-show="isDownloading">
        </div>
        <div class="progress-front" v-show="isDownloading" :style="{width:progressWidth}">
          {{progressWidth}}
        </div>
      </div>
      <div v-else-if="hasNewIOS" class="ios-download">
        <p class="ios-version">发现新版本：{{newVersion}}</p>
        <p>请前往App Store进行更新</p>      
      </div>
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
.download {
  position: relative;
}
.ios-download {
  font-size: 20px;
  font-weight: bold;
  color: #007aff;
  padding: 0 1em;
}
.progress-front,
.progress-back {
  position: absolute;
  height: 20px;
  left: 0;
  top: 0;
}
.progress-back {
  width: 100%;
  border: 1px solid #007aff;
  background-color: #fff;
}
.progress-front {
  padding: 1px;
  color: #fff;
  line-height: 20px;
  background-color: #007aff;
  text-align: center;
}
</style>
<script>
import api from "api/Version";
import CONST from "const";

export default {
  data() {
    return {
      // VERSION: '1.0.0',
      // 	VERSION_CODE: 100,
      // 	VERSION_DATE: '2018-2-1'
      version: CONST.VERSION,
      versionCode: CONST.VERSION_CODE,
      publishDate: CONST.VERSION_DATE,
      url: "",
      hasNewAndroid: false,
      hasNewIOS: false,
      newVersion: "",
      isDownloading: false,
      progress: 0
    };
  },
  computed: {
    progressWidth() {
      return this.progress + "%";
    }
  },
  methods: {
    checkVersion() {
      var me = this;
      api
        .check()
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var platform = me.$store.state.platform;
            var versionCode;

            if (platform == "iOS") {
              me.newVersion = data.data.ios.version;
              me.url = data.data.ios.url;
              versionCode = data.data.ios.versionCode;
              me.hasNewIOS = me.versionCode < versionCode;
            } else {
              me.newVersion = data.data.android.version;
              me.url = data.data.android.url;
              versionCode = data.data.android.versionCode;
              me.hasNewAndroid = me.versionCode < versionCode;
            }
            if (!me.hasNewIOS && !me.hasNewAndroid) {
              me.$f7.alert("", "已经是最新版本");
            }
          } else {
            me.$f7.alert(data.msg, "版本检测失败");
          }
        })
        .catch(function(err) {
          me.$f7.alert(err, "版本检测失败");
        });
    }, 
    androidDownload() {
      var me = this;
      var fileName = "modouapp.apk";
      var localPath = cordova.file.dataDirectory + fileName;
      var apkURL = encodeURI(me.url);
      var fileTransfer = new FileTransfer();
      fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          me.progress = Math.floor(
            progressEvent.loaded / progressEvent.total * 100
          );
        }
      };
      me.isDownloading = true;      
      fileTransfer.download(
        apkURL,
        localPath,
        function(entry) {
          me.isDownloading = false;
          cordova.plugins.fileOpener2.open(
            entry.toInternalURL(),
            "application/vnd.android.package-archive",
            {
              error: function(e) {
                me.$f7.alert("", "启动安装失败");
              },
              success: function() {

              }
            }
          );
        },
        function(error) {
          me.$f7.alert("", "下载失败");
          me.isDownloading = false;
        }
      );
    } 
  }
};
</script>


