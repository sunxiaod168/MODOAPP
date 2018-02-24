<template>
    <f7-page nav-title="送货单明细" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">

    </f7-page>
</template>
<style scoped>
.page>>>.page-content {
  background-color: #fff;
}
</style>

<style>

</style>
<script>
import { bus, moneyString } from "common";
import api from "api/Delivery";
import CONST from "const";

export default {
  data() {
    return {
      msg: "",
      query: {
        ID: 0
      },
      isLoading: false,
      pageData: {}
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    initHandle(e) {
      this.$store.state.navRightVisiable = false;
       var page = e.detail.page;      
      this.query = page.query;
      this.loadData();
    },
    backHandler() {
      this.$store.state.navRightVisiable = true;
    },
    onRefresh() {
      if (this.isLoading) {
        return;
      }
      this.loadData();
    },
    loadData() {
      var me = this;
      me.isLoading = true;
      api
        .detail(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            me.pageData = data.data;           
          } else {
            me.msg = data.msg;
          }
          me.$f7.pullToRefreshDone();
          me.isLoading = false;
        })
        .catch(function(err) {
          me.$f7.pullToRefreshDone();
          me.msg = err;
          me.isLoading = false;
        });
    }
  }
};
</script>
