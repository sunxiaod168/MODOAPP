<template>
  <div>
    <p class="right-navbar">过滤条件
      <f7-link class="right-button" @click="clear">清除</f7-link>
    </p>
    <f7-block-title>组织名称</f7-block-title>
    <f7-list>
      <f7-list-item checkbox v-model="checkAll" value="0" title="全选" key="0" @click="toggleAll"></f7-list-item>
      <f7-list-item checkbox v-model="zzids" v-for="org in orgList" :value="org.zzid" :input-value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>
    </f7-list>
    <f7-block-title>单据保存日期</f7-block-title>
    <f7-block>
      <date-picker title="开始" placeholder="请选择开始日期" id="start-date" v-model="startDate"></date-picker>
      <date-picker title="结束" placeholder="请选择结束日期" id="end-date" v-model="endDate"></date-picker>
    </f7-block>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { bus } from "common";
import api from "api/Org";
import CONST from "const";
import DatePicker from "components/DatePicker";

var $$ = window.Dom7;

export default {
  data() {
    return {
      msg: "",
      checkAll: false,
      orgList: [],
      zzids: [],
      startDate: null,
      endDate: null,
      orderStatus: null,
      examineStatus: null
    };
  },
  components: { DatePicker },
  mounted() {
    this.init();
    bus.$on("rightPanelClosed", this.rightDone);
    this.loadData();
  },
  beforeDestroy() {
    bus.$off("rightPanelClosed", this.rightDone);
  },
  methods: {
    init() {},
    loadData() {
      var me = this;
      api
        .orgList({ zzid: me.$store.state.userInfo.zzid, type: "retail-price" })
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.orgList = data.data;
          } else {
            me.msg = data.msg;
          }
        })
        .catch(function(err) {
          me.msg = data.msg;
        });
    },
    toggleAll() {
      this.checkAll = !this.checkAll;
      if (this.checkAll == true) {
        this.zzids = this.orgList.map(org => org.zzid);
      } else {
        this.zzids = [];
      }
    },
    rightDone() {
      bus.$emit("rightDone", this.zzids);
    },
    clear() {
      this.checkAll = false;
      this.zzids = [];
      this.startDate = null;
      this.endDate = null;
      this.orderStatus = null;
      this.examineStatus = null;
    }
  }
};
</script>

<style>

</style>

