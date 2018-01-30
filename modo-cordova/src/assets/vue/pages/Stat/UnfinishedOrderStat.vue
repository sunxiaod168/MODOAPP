<template>
  <data-list-page title="未完成订单统计" :rightPanel="rightPanel" :request="request" searchPlaceholder="客户姓名 客户电话">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="accordion-item" v-for="item in props.data">
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
  width: 100px;
  text-align: right;
}
.fa-phone-square {
  margin-right: 5px;
}
</style>

<script>
import DataListPage from "components/DataListPage";
import Right from "./components/UnfinishedOrderRight";
import api from "api/Stat";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.unfinishedOrder
    };
  },
  components: { DataListPage },
};
</script>