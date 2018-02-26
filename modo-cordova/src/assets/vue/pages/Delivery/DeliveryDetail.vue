<template>
  <f7-page nav-title="送货单明细" pull-to-refresh @page:beforeinit="initHandle" @page:back="backHandler" @ptr:refresh="onRefresh">
    <f7-block>
      <f7-card>
        <f7-card-header>{{pageData.ZZName}}</f7-card-header>
        <f7-card-content class="delivery-head">
          <p>
            <label>订单编号：</label>
            <span>{{pageData.OrderCode}}</span>
          </p>
          <p>
            <label>送货单编号：</label>
            <span>{{pageData.DeliveryHeaderID}}</span>
          </p>
          <p>
            <label>客户姓名：</label>
            <span>{{pageData.CustomerName}}</span>
          </p>
          <p>
            <label>联系电话：</label>
            <span>{{pageData.CustomerPhone}}</span>
          </p>
          <p>
            <label>总包数：</label>
            <span>{{pageData.ZongBaoShu}}</span>
          </p>
          <p>
            <label>总体积：</label>
            <span>{{pageData.ZongTiJi}}</span>
          </p>
          <p>
            <label>送货金额：</label>
            <span>{{pageData.SongHuoDanJinE | money}}</span>
          </p>
        </f7-card-content>
      </f7-card>
      <f7-card v-for="(item, index) in pageData.DetailList" :key="item.ID">        
        <f7-card-content class="delivery-detail">
          <p>
            <label>物品名称：</label>
            <span>{{item.Product.Name}}</span>
          </p>
          <p>
            <label>物品编号：</label>
            <span>{{item.Product.ProductCode}}</span>
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
          <p>
            <label>型号：</label>
            <span>{{item.Product.XingHao}}</span>
          </p>
          <p>
            <label>规格：</label>
            <span>{{item.Product.GuiGe}}</span>
          </p>
          <p>
            <label>颜色：</label>
            <span>{{item.Product.ColorName}}</span>
          </p>
          <p>
            <label>辅助颜色：</label>
            <span>{{item.Product.AuxColor}}</span>
          </p>
          <p>
            <label>送货数量：</label>
            <span>{{item.DeliveryAmount}}</span>
          </p>
          <p>
            <label>成交单价：</label>
            <span>{{item.Product.DealPrice | money}}</span>
          </p>
          <p>
            <label>金额：</label>
            <span>{{item.Amount | money}}</span>
          </p>
          <p>
            <label>包数：</label>
            <span>{{item.BaoShu}}</span>
          </p>
          <p>
            <label>体积：</label>
            <span>{{item.TiJi}}</span>
          </p>
          <p>
            <label>出货仓库：</label>
            <span>{{item.Storage.Name}}</span>
          </p>
        </f7-card-content>
        <f7-card-footer>{{index + 1}}</f7-card-footer>
      </f7-card>
    </f7-block>
  </f7-page>
</template>
<style scoped>
.page>>>.page-content {
  background-color: #fff;
}
.card-footer, .card-header {
  justify-content:center;
}
.card-content >>> .card-content-inner{
  padding-bottom:5px;
}
.delivery-head>>>p,
.delivery-detail>>>p {
  margin: 0 0 10px;
}
.delivery-head>>>label,
.delivery-detail>>>label {
  display: inline-block;
  width: 35%;
  text-align:right;
}
.delivery-head>>>span,
.delivery-detail>>>span {
  display: inline-block;
  width: 60%;
  text-align:left;
}
</style>


<script>
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
