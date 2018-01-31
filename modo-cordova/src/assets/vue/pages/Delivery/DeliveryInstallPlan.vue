<template>
  <data-list-page title="配送安装计划" :rightPanel="rightPanel" :request="request" searchPlaceholder="客户姓名 客户电话">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="accordion-item swipeout" v-for="item in props.data" :key="item.ID" @accordion:open="itemOpen" @swipeout:open="itemSwipe">
            <a href="#" class="item-content item-link swipeout-content">
              <div class="item-inner">
                <div class="item-title cname">{{item.Customer.Name }}
                </div>
                <span class="phone">
                  <i class="fas fa-phone-square"></i>{{item.Customer.Phone}}</span>
                <span>
                  {{item.SongHuoDanJinE | money}} </span>
              </div>
            </a>
            <div class="swipeout-actions-left">
              <a class="edit-action" href="#" @click="editPlan($event,item)" v-if="item.DeliveryDispatch.ID > 0 || item.InstallDispatch.ID">编辑计划</a>
              <a class="edit-action" href="#" @click="addPlan($event,item)" v-else>新增计划</a>
              <a class="view-action" href="#" @click="viewPlan($event,item)" v-if="item.DeliveryDispatch.ID > 0 || item.InstallDispatch.ID">查看计划</a>
            </div>
            <div class="accordion-item-content">
              <div class="content-block">
                <p class="dash-line">
                  <label>组织名称：</label>
                  <span>{{item.ZZName}}</span>
                </p>
                <p class="dash-line">
                  <label>送货单编号：</label>
                  <span>{{item.DeliveryHeaderID}}</span>
                </p>
                <p class="dash-line">
                  <label>总包数：</label>
                  <span>{{item.ZongBaoShu}}</span>
                </p>
                <p class="dash-line">
                  <label>总体积：</label>
                  <span>{{item.ZongTiJi}}</span>
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
import Right from "./components/InstallPlanRight";
import api from "api/Delivery";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.list
    };
  },
  components: { DataListPage },
  methods: {
    itemOpen(e) {
      this.$f7.swipeoutClose(e.target);
    },
    itemSwipe(e) {
      if (Dom7(e.target).hasClass("accordion-item-expanded")) {
        this.$f7.accordionClose(e.target);
      }
    },
    addPlan(e, item) {
      this.toEdit(e, item, true, "新增配送计划");
    },
    editPlan(e, item) {
      this.toEdit(e, item, true, "编辑配送计划");
    },
    viewPlan(e, item) {
      this.toEdit(e, item, false, "查看配送计划");
    },
    toEdit(e, item, editable, title) {
      this.$f7.swipeoutClose(Dom7(e.target).parents("li")[0]);
      var query = { data: item, editable: editable, title: title };
      this.$router.load({ url: "/delivery-install-plan-edit", query: query });
    }
  }
};
</script>
