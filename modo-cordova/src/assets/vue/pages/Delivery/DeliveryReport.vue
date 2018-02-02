<template>
  <data-list-page title="送货完工汇报" :rightPanel="rightPanel" :request="request" searchPlaceholder="客户姓名 客户电话">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="accordion-item swipeout" v-for="item in props.data" :key="item.DeliveryID" @accordion:open="accordionOpen" @accordion:opened="accordionOpened" @swipeout:open="swipeoutOpen" @swipeout:opened="swipeoutOpened">
            <a href="#" class="item-content item-link swipeout-content">
              <div class="item-inner">
                <div class="item-title cname">{{item.CustomerName }}
                </div>
                <span class="phone">
                  <i class="fas fa-phone-square"></i>{{item.CustomerPhone}}</span>
                <span>
                  {{item.DeliveryStaffs}} </span>
              </div>
            </a>
            <div class="swipeout-actions-left">
              <a class="edit-action" href="#" @click="editPlan($event,item)" v-if="item.DeliveryIsFinished">编辑汇报</a>
              <a class="edit-action" href="#" @click="addPlan($event,item)" v-else>新增汇报</a>
            </div>
            <div class="accordion-item-content">
              <div class="content-block">
                <p class="dash-line">
                  <label>组织名称：</label>
                  <span>{{item.ZZName}}</span>
                </p>
                <p class="dash-line">
                  <label>订单编号：</label>
                  <span>{{item.OrderCode}}</span>
                </p>
                <p class="dash-line">
                  <label>送货单编号：</label>
                  <span>{{item.DeliveryHeaderID}}</span>
                </p>
                <p class="dash-line">
                  <label>送货人：</label>
                  <span>{{item.DeliveryStaffs}}</span>
                </p>
                <p class="dash-line">
                  <label>送货开始时间：</label>
                  <span>{{item.DeliveryDate | datetime}}</span>
                </p>
                <p class="dash-line">
                  <label>送货完成时间：</label>
                  <span>{{item.DeliveryFinishDate | datetime}}</span>
                </p>
                <p class="dash-line">
                  <label>完工汇报人：</label>
                  <span>{{item.DeliveryReporter}}</span>
                </p>
                <p class="dash-line">
                  <label>完工汇报时间：</label>
                  <span>{{item.DeliveryReportTime | datetime}}</span>
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
    accordionOpen(e) {
      var swipeout = e.target;
      var actions = Dom7(".edit-action, .view-action", swipeout);
      actions.transition(0);
      this.$f7.swipeoutClose(swipeout);
    },
    accordionOpened(e) {
      var swipeout = e.target;
      var actions = Dom7(".edit-action, .view-action", swipeout);
      actions.transition(".3s");
    },
    swipeoutOpen(e) {
      var accordionItem = e.target;
      if (Dom7(accordionItem).hasClass("accordion-item-expanded")) {
        var accordionItemContent = Dom7(
          ".accordion-item-content",
          accordionItem
        );
        accordionItemContent.css("height", 0);
        Dom7(accordionItem).removeClass("accordion-item-expanded");
      }
    },
    swipeoutOpened(e) {
      var accordionItem = e.target;
      var accordionItemContent = Dom7(".accordion-item-content", accordionItem);
      accordionItemContent.transition(".3s");
    },
    addPlan(e, item) {
      this.toEdit(e, item, "新增送货完工汇报");
    },
    editPlan(e, item) {
      this.toEdit(e, item, "编辑送货完工汇报");
    },   
    toEdit(e, item, title) {
      this.$f7.swipeoutClose(Dom7(e.target).parents("li")[0]);
      var query = { data: item, title: title };
      this.$router.load({ url: "/delivery-report-edit", query: query });
    }
  }
};
</script>
