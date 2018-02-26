<template>
  <data-list-page title="送货完工汇报" :rightPanel="rightPanel" :request="request" searchPlaceholder="客户姓名 客户电话">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="swipeout" v-for="item in props.data" :key="item.DeliveryID">
            <a href="#" class="item-content item-link swipeout-content" @click="viewDelivery($event,item)">
              <div class="item-inner">
                <div class="item-title cname">
                  <p class="item-name">
                    <span>{{item.CustomerName}}</span>
                    <span class="cphone">
                      <i class="fas fa-phone-square"></i>{{item.CustomerPhone}}</span>
                  </p>
                  <p class="item-subtitle">
                    <span>送货时间：{{item.DeliveryDate | datetime}}</span>
                    <span>送货金额：{{item.SongHuoDanJinE | money}}</span>
                  </p>
                </div>
              </div>
            </a>
            <div class="swipeout-actions-left">
              <a class="edit-action" href="#" @click="viewPlan($event,item)" v-if="item.DeliveryIsFinished">查看完工汇报</a>
              <a class="edit-action" href="#" @click="editPlan($event,item)" v-else>提交完工汇报</a>
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
.cname {
  text-align: left;
  width: 100%;
}
.cphone {
  float: right;
}
.item-name {
  margin: 0;
  text-align: left;
}
.item-subtitle {
  margin: 10px 0 0;
  white-space: normal;
  color:#6d6d72;
}
.item-subtitle>>>span {
  display: block;
  font-size: 14px;
}
</style>

<script>
import DataListPage from "components/DataListPage";
import Right from "./components/DeliveryReportRight";
import api from "api/Delivery";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.deliveryDispatchList
    };
  },
  components: { DataListPage },
  methods: {
    viewPlan(e, item) {
      this.toEdit(e, item, "查看完工汇报", false);
    },
    editPlan(e, item) {
      this.toEdit(e, item, "提交完工汇报", true);
    },
    toEdit(e, item, title, editable) {
      this.$f7.swipeoutClose(Dom7(e.target).parents("li")[0]);
      var query = { data: item, title: title, editable: editable };
      this.$router.load({ url: "/delivery-report-edit", query: query });
    },
    viewDelivery(e, item) {
      this.$f7.swipeoutClose(Dom7(e.target).parents("li")[0]);
      var query = { ID: item.DeliveryID };
      this.$router.load({ url: "/delivery-detail", query: query });
    }
  }
};
</script>
