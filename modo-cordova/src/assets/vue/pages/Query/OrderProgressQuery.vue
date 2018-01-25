
<template>

  <f7-page nav-title="订单进度查询" pull-to-refresh infinite-scroll @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh" @infinite="onInfiniteScroll">

    <!-- Search bar -->
    <f7-searchbar cancel-link="取消" search-list="#price-list" placeholder="客户姓名 客户电话" :custom-search="true" :clear-button="true" @searchbar:enable="onEnableSearch" @searchbar:disable="onDisableSearch" @submit="onSubmitSearch"></f7-searchbar>

    <div class="list-block">
      <ul id="price-list">
        <li class="accordion-item" v-for="item in orderList">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{item.CustomerName }}
              </div>
              <span>
                {{item.OrderStatusName}}</span>
              <span>
               <i class="fas fa-phone-square"></i>{{item.Phone}} </span>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="content-block">
              <p class="dash-line">
                <label>组织名称：</label>
                <span>{{item.ZZName}}</span>
              </p>
              <p class="dash-line">
                <label>订单编号：</label>
                <span>{{item.OrderID}}</span>
              </p>
              <p class="dash-line">
                <label>成效金额：</label>
                <span>{{item.DealAmount |money}}</span>
              </p>
              <p class="dash-line">
                <label>已收款：</label>
                <span>{{item.ReceivedAmonut |money}}</span>
              </p>
              <p class="dash-line">
                <label>预计送货日期：</label>
                <span>{{item.PlanDeliveryTime | date}}</span>
              </p>
              <p class="dash-line">
                <label>审核状态：</label>
                <span>{{item.ExamineStatusName}}</span>
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
  
  margin: 0;
  padding: .7em;
  color: #6d6d72;
}
.content-block p label {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.fa-phone-square{
  margin-right: 5px;
}
</style>

<script>
import { bus } from "common";
import Right from "./components/OrderProgressRight";
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
        startDate: null,
        endDate: null,
        orderStatus: null,
        examineStatus: null
      },
      isLoading: false,
      orderList: [],
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
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
      this.$store.state.currentRightView = Right;

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
            var orderList = data.data;
            if (!orderList || orderList.length == 0) {
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
          .orderProgress(this.query)
          .then(function(response) {
            var data = response.data;
            if (data.status === CONST.STATUS_SUCCESS) {
              var orderList = data.data;
              if (orderList && orderList.length > 0) {
                if (!nextPage) {
                  me.orderList = [];
                }
                me.orderList = me.orderList.concat(orderList);
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
        var orderList = data.data;
        if (!orderList || orderList.length < this.query.pageSize) {
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
      this.orderList = [];
      this.query.keywords = keywords;
      this.query.pageNum = 1;

      var me = this;
      this.loadData().then(
        function(response) {
          var data = response.data;
          if (data.status === CONST.STATUS_SUCCESS) {
            var orderList = data.data;
            if (!orderList || orderList.length == 0) {
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
      this.orderList = [];
      this.query.pageNum = 1;
      this.query.zzids = payload.zzid;
      this.query.startDate = payload.startDate;
      this.query.endDate = payload.endDate;
      this.query.orderStatus = payload.orderStatus;
      this.query.examineStatus = payload.examineStatus;
      this.loadData();
    }
  }
};
</script>


