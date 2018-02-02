<template>
  <f7-page :nav-title="title" @page:beforeinit="initHandle" @page:back="backHandler" @page:afteranimation="onRefresh" pull-to-refresh infinite-scroll @ptr:refresh="onRefresh" @infinite="onInfiniteScroll">
    <f7-searchbar cancel-link="取消" search-list="#price-list" :placeholder="searchPlaceholder" :custom-search="true" :clear-button="true" @searchbar:enable="onEnableSearch" @searchbar:disable="onDisableSearch" @submit="onSubmitSearch"></f7-searchbar>
    <slot :data="dataList"></slot>
    <searchbar-not-found :display="notFoundDisplay"></searchbar-not-found>
  </f7-page>
</template>

<script>
import { bus } from "common";
import SearchbarNotFound from "components/SearchbarNotFound";
import CONST from "const";

var $$ = window.Dom7;
export default {
  props:['request', 'rightPanel', 'title','searchPlaceholder'],
  data() {
    return {
      msg: "",
      query: {
        pageNum: 1,
        pageSize: 15,       
        keywords: null       
      },
      isLoading: false,
      dataList: [],
      notFoundDisplay: "none"
    };
  },
  components: { SearchbarNotFound },
  mounted() {
    bus.$on("rightDone", this.rightDone);
  },
  beforeDestroy() {
    bus.$off("rightDone", this.rightDone);
  },
  methods: {
    initHandle() {
      this.$store.state.navRightVisiable = true;
      this.$store.state.navRightPanelEnabled = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
      this.$store.state.currentRightView = this.rightPanel;
    },
    backHandler() {
      this.$store.state.navRightVisiable = false;
    },
    onRefresh() {
      if (this.isLoading) {
        return;
      }
      this.query.pageNum = 1;
      this.loadData();
    },
    onInfiniteScroll() {
      if (this.isLoading) {
        return;
      }
      $$(".infinite-scroll-preloader").show();
      this.query.pageNum++;
      var me = this;

      this.loadData(true).then(
        function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var dataList = data.data;
            if (!dataList || dataList.length == 0) {
              me.query.pageNum--;
            }
          } else {
            me.query.pageNum--;
          }
        },
        function(err) {
          me.query.pageNum--;
        }
      );
    },
    loadData(nextPage) {
      var me = this;

      return new Promise((resolve, reject) => {
        me.isLoading = true;
        me.request(this.query)
          .then(function(response) {
            var data = response.data;
            if (data.status === CONST.STATUS_SUCCESS) {
              var dataList = data.data;
              if (dataList && dataList.length > 0) {
                if (!nextPage) {
                  me.dataList = [];
                }
                me.dataList = me.dataList.concat(dataList);
              }
            } else {
              me.msg = data.msg;
            }
            resolve(response);
            me.hideInfinitePreloader(response);
            me.$f7.pullToRefreshDone();
            me.isLoading = false;
          })
          .catch(function(err) {
            reject();
            me.hideInfinitePreloader();
            me.$f7.pullToRefreshDone();
            me.msg = err;
            me.isLoading = false;
          });
      });
    },
    hideInfinitePreloader(response) {
      var preloader = $$(".infinite-scroll-preloader");

      if (response == null) {
        preloader.hide();
        return;
      }

      var data = response.data;
      if (data.status === CONST.STATUS_SUCCESS) {
        var dataList = data.data;
        if (!dataList || dataList.length < this.query.pageSize) {
          preloader.hide();
        }
      } else {
        preloader.hide();
      }
    },
    onEnableSearch() {},
    onDisableSearch() {
      this.query.keywords = null;
      this.notFoundDisplay = "none";
    },
    onSubmitSearch() {
      if (this.isLoading) {
        return;
      }
      $$(".infinite-scroll-preloader").show();
      var mySearchbar = $$(".searchbar")[0].f7Searchbar;
      var keywords = mySearchbar.query;
      this.dataList = [];
      this.query.keywords = keywords;
      this.query.pageNum = 1;

      var me = this;
      this.loadData().then(
        function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var dataList = data.data;
            if (!dataList || dataList.length == 0) {
              me.notFoundDisplay = "block";
            }
          } else {
            me.notFoundDisplay = "block";
          }
        },
        function(err) {
          me.notFoundDisplay = "block";
        }
      );
    },
    rightDone(payload) {
      if (this.isLoading) {
        return;
      }
      $$(".infinite-scroll-preloader").show();
      this.notFoundDisplay = "none";
      this.dataList = [];
      this.query.pageNum = 1;
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {          
          this.query[key] = payload[key];          
        }
      }
      
      this.loadData();
    }
  }
};
</script>



