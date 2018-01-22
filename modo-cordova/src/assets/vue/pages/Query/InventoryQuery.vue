
<template>

  <f7-page nav-title="实时库存查询" pull-to-refresh infinite-scroll @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh" @infinite="onInfiniteScroll">

    <!-- Search bar -->
    <f7-searchbar cancel-link="取消" search-list="#price-list" placeholder="物品名称 物品编号" :custom-search="true" :clear-button="true" @searchbar:enable="onEnableSearch" @searchbar:disable="onDisableSearch" @submit="onSubmitSearch"></f7-searchbar>

    <div class="list-block">
      <ul id="price-list">
        <li class="accordion-item" v-for="item in list">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{item.Product.Name }}
              </div>
              <span>可用数量：{{item.CanUseAmount}}</span>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="content-block">
              <p>
                <label>仓库名称：</label>
                <span>{{item.ZZName}}</span>
              </p>
              <p>
                <label>物品编号：</label>
                <span>{{item.Product.ProductCode}}</span>
              </p>
                <p>
                <label>颜色：</label>
                <span>{{item.ColorName}}</span>
              </p> 
              <p>
                <label>辅助颜色：</label>
                <span>{{item.AUXColorName}}</span>
              </p>
              <p>
                <label>品牌：</label>
                <span>{{item.Product.BrandName}}</span>
              </p>
              <p>
                <label>系列：</label>
                <span>{{item.Product.CatenaName}}</span>
              </p>
              <p>
                <label>类别：</label>
                <span>{{item.Product.SortName}}</span>
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
import InventoryQuery from "components/InventoryQuery";
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
        keywords: null,
        canUseType:0
      },
      isLoading: false,
      list: [],
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
      me.list = [];
      me.query.pageNum = 1;
      me.query.zzids = payload.zzids;
      me.query.canUseType = payload.canUseType;
      me.loadData();
    });
  },
  methods: {
    initHandle() {
      this.$store.state.navRightVisiable = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter"; 

      this.$store.state.currentRightView = InventoryQuery;
      this.$store.state.currentRightView.props.zzid = this.$store.state.userInfo.zzid;
      this.$store.state.currentRightView.props.type = 'inventory';
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
            var list = data.data;
            if (!list || list.length == 0) {
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
          .inventory(this.query)
          .then(function(response) {
            var data = response.data;
            if (data.status === CONST.STATUS_SUCCESS) {
              var list = data.data;
              if (list && list.length > 0) {
                if (!nextPage) {
                  me.list = [];
                }
                me.list = me.list.concat(list);
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
        var list = data.data;
        if (!list || list.length < this.query.pageSize) {
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
      this.list = [];
      this.query.keywords = keywords;
      this.query.pageNum = 1;

      var me = this;
      this.loadData().then(
        function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var list = data.data;
            if (!list || list.length == 0) {
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




