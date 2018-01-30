<template>
  <data-list-page title="销售价格查询" :rightPanel="rightPanel" :request="request" searchPlaceholder="物品名称 物品编号">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="accordion-item" v-for="item in props.data">
            <a href="#" class="item-content item-link">
              <div class="item-inner">
                <div class="item-title">{{item.Name }}
                </div>
                <span>
                  {{item.RetailPrice |money}}</span>
              </div>
            </a>
            <div class="accordion-item-content">
              <div class="content-block">
                <p class="dash-line">
                  <label>组织名称：</label>
                  <span>{{item.ZZName}}</span>
                </p>
                <p class="dash-line">
                  <label>物品编号：</label>
                  <span>{{item.ProductCode}}</span>
                </p>
                <p class="dash-line">
                  <label>型号：</label>
                  <span>{{item.XingHao}}</span>
                </p>
                <p class="dash-line">
                  <label>规格：</label>
                  <span>{{item.GuiGe}}</span>
                </p>
                <p class="dash-line">
                  <label>品牌：</label>
                  <span>{{item.BrandName}}</span>
                </p>
                <p class="dash-line">
                  <label>系列：</label>
                  <span>{{item.CatenaName}}</span>
                </p>
                <p class="dash-line">
                  <label>类别：</label>
                  <span>{{item.SortName}}</span>
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
</style>

<script>
import DataListPage from "components/DataListPage";
import Right from "./components/RetailPriceRight";
import api from "api/Query";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.retailPrice
    };
  },
  components: { DataListPage },
};
</script>