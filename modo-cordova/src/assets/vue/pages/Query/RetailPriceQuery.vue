<template>

  <f7-page nav-title="销售价格查询" pull-to-refresh infinite-scroll @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh" @infinite="onInfiniteScroll">

    <!-- Search bar -->
    <f7-searchbar cancel-link="取消" search-list="#price-list" placeholder="物品名称 物品编号" :custom-search="true" :clear-button="true" @searchbar:enable="onEnableSearch" @searchbar:disable="onDisableSearch" @submit="onSubmitSearch"></f7-searchbar>

    <div class="list-block">
      <ul id="price-list">
        <li class="accordion-item" v-for="item in priceList">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{item.Name }}
              </div>
              <span>
                <i class="fas fa-yen-sign"></i>{{item.RetailPrice}}</span>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="content-block">
              <p>
                <label>组织名称：</label>
                <span>{{item.ZZName}}</span>
              </p>
              <p>
                <label>物品编号：</label>
                <span>{{item.ProductCode}}</span>
              </p>
              <p>
                <label>品牌：</label>
                <span>{{item.BrandName}}</span>
              </p>
              <p>
                <label>系列：</label>
                <span>{{item.CatenaName}}</span>
              </p>
              <p>
                <label>类别：</label>
                <span>{{item.SortName}}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <searchbar-not-found :display="notFoundDisplay"></searchbar-not-found>
  </f7-page>

</template>
<style scoped>
.list-block {
  margin: 0;
}
.content-block {
  text-align: left;
}
.content-block p {
  border-bottom: 1px dashed;
  margin: 0;
  padding: 0.5em;
  color: #6d6d72;
}
.content-block p label {
  display: inline-block;
  width: 80px;
  text-align: right;
}
</style>

<script>
import { bus } from "common";
import OrgListSelect from "components/OrgListSelect";
import SearchbarNotFound from "components/SearchbarNotFound";

import api from "api/Query";
import CONST from "const";

var $$ = window.Dom7;
export default {
  data() {
    return {
      msg: "",
      query: {
        pageNum: 1,
        pageSize: 15,
        zzids: [],
        keywords: null
      },
      isLoading: false,
      priceList: [],
      notFoundDisplay: "none"
    };
  },
  components: { SearchbarNotFound },
  mounted() {
    var me = this;
    bus.$on("orgSelected", function(payload) {
      if (me.isLoading) {
        return;
      }
      $$(".infinite-scroll-preloader").show();
      me.notFoundDisplay = "none";
      me.priceList = [];
      me.query.pageNum = 1;
      me.query.zzids = payload.map(item => item.zzid);
      me.loadData();
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
            var priceList = data.data;
            if (!priceList || priceList.length == 0) {
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
        api
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
        var priceList = data.data;
        if (!priceList || priceList.length < this.query.pageSize) {
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
      this.priceList = [];
      this.query.keywords = keywords;
      this.query.pageNum = 1;

      var me = this;
      this.loadData().then(
        function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var priceList = data.data;
            if (!priceList || priceList.length == 0) {
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
    }
  }
};
</script>


