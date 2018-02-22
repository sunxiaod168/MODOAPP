<template>
  <data-list-page title="实时库存查询" :rightPanel="rightPanel" :request="request" searchPlaceholder="物品名称 物品编号">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="accordion-item" v-for="item in props.data">
            <a href="#" class="item-content item-link" :class="{'corner-flag': item.OrderListID != null}">
              <div class="item-inner">
                <div class="item-title">
                  <p class="item-name">{{item.Product.Name }}</p>
                  <p class="item-count">
                    <span>实时：{{item.StoreAmount}}</span>
                    <span>锁定：{{item.LockAmount}}</span>
                    <span>可用：{{item.CanUseAmount}}</span>
                  </p>
                </div>
              </div>
            </a>
            <div class="accordion-item-content">
              <div class="content-block">
                <p class="dash-line">
                  <label>仓库名称：</label>
                  <span>{{item.ZZName}}</span>
                </p>
                <p class="dash-line">
                  <label>物品编号：</label>
                  <span>{{item.Product.ProductCode}}</span>
                </p>
                <p class="dash-line">
                  <label>颜色：</label>
                  <span>{{item.ColorName}}</span>
                </p>
                <p class="dash-line">
                  <label>辅助颜色：</label>
                  <span>{{item.AUXColorName}}</span>
                </p>
                <p class="dash-line">
                  <label>品牌：</label>
                  <span>{{item.Product.BrandName}}</span>
                </p>
                <p class="dash-line">
                  <label>系列：</label>
                  <span>{{item.Product.CatenaName}}</span>
                </p>
                <p class="dash-line">
                  <label>类别：</label>
                  <span>{{item.Product.SortName}}</span>
                </p>
                <p class="dash-line" v-if="item.OrderListID != null">
                  <label>订单编号：</label>
                  <span>{{item.OrderCode}}</span>
                </p>
                <p class="dash-line" v-if="item.OrderListID != null">
                  <label>客户姓名：</label>
                  <span>{{item.CustomerName}}</span>
                </p>
                <p class="dash-line" v-if="item.OrderListID != null">
                  <label>签单店面：</label>
                  <span>{{item.OrderZZName}}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </data-list-page>
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
  padding: 0.7em;
  color: #6d6d72;
}
.content-block p label {
  display: inline-block;
  width: 80px;
  text-align: right;
}
.item-name {
  margin: 0;
  text-align: left;
}
.item-count {
  font-size: 14px;
  margin: 0;
  margin-top: 8px;
}
</style>

<script>
import DataListPage from "components/DataListPage";
import Right from "./components/InventoryRight";
import api from "api/Query";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.inventory
    };
  },
  components: { DataListPage }
};
</script>