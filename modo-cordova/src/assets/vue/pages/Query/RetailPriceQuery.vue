<template>

  <f7-page nav-title="销售价格查询" @page:beforeinit="initHandle" @page:back="backHandler" pull-to-refresh @ptr:refresh="onRefresh" infinite-scroll @infinite="onInfiniteScroll">
    <f7-list>

      <f7-list-item v-for="item in priceList" :title="item.Name"></f7-list-item>

    </f7-list>
  </f7-page>

</template>
<style>

</style>
<script>
import { bus } from "common";
import OrgListSelect from "components/OrgListSelect";
import api from "api/Query";
import CONST from "const";

export default {
  data() {
    return {
      msg: "",
      query: {
        pageNum: 1,
        pageSize: 20,
        zzids: [],
        keywords: null
      },
      isLoading: false,
      priceList: []
    };
  },
  mounted() {
    var me = this;
    bus.$on("orgSelected", function(payload) {
      me.query.zzids = payload.map( item => item.zzid)
      me.priceList = [];
      me.loadData()
    });
  },
  methods: {
    initHandle() {
      this.$store.state.navRightVisiable = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
      this.$store.state.currentRightView = OrgListSelect;

      this.loadData();
    },
    backHandler() {
      this.$store.state.navRightVisiable = false;
    },
    onRefresh() {
      var me = this;
      this.loadData();
    },
    onInfiniteScroll() {
      this.loadData(true);
    },
    loadData(nextPage) {
      if (this.isLoading == true) {
        return;
      }
      this.isLoading = true;

      if (nextPage === true) {
        this.query.pageNum++;
      } else {
        this.query.pageNum = 1;
      }

      var me = this;
      return api
        .retailPrice(this.query)
        .then(function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var priceList = data.data;
            if (priceList && priceList.length > 0) {
              if (!nextPage) {
                me.priceList = [];
              }
              me.priceList = me.priceList.concat(priceList);
            } else {
              if (nextPage === true) {
                me.query.pageNum--;
              }
            }
          } else {
            if (nextPage === true) {
              me.query.pageNum--;
            }
            me.msg = data.msg;
          }

          resetLoadStatus(me);
        })
        .catch(function(err) {
          resetLoadStatus(me);
          if (nextPage === true) {
            me.query.pageNum--;
          }
          me.msg = err;
        });
    }
  }
};

function resetLoadStatus(vm) {
  var $$ = Dom7;
  $$(".infinite-scroll-preloader").hide();
  vm.$f7.pullToRefreshDone();
  vm.isLoading = false;
}
</script>


