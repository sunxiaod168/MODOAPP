<template>
  <data-list-page title="配送安装计划" :rightPanel="rightPanel" :request="request" searchPlaceholder="客户姓名 客户电话">
    <template slot-scope="props">
      <div class="list-block">
        <ul>
          <li class="swipeout" v-for="item in props.data" :key="item.ID">
            <a href="#" class="item-content item-link swipeout-content" @click="viewDelivery($event,item)">
              <div class="item-inner">
                <div class="item-title cname">
                  <p class="item-name">
                    <span>{{item.CustomerName}}</span>
                    <span class="cphone">
                      <i class="fas fa-phone-square"></i>{{item.CustomerPhone}}</span>
                  </p>
                  <p class="item-subtitle">
                    <span>送货时间：{{item.DeliveryDispatch.DeliveryDate | datetime}}</span>
                    <span>送货金额：{{item.SongHuoDanJinE | money}}</span>
                  </p>
                </div>
              </div>
            </a>
            <div class="swipeout-actions-left">
              <a class="edit-action" href="#" @click="editPlan($event,item)" v-if="item.DeliveryDispatch.ID > 0 || item.InstallDispatch.ID > 0">编辑计划</a>
              <a class="edit-action" href="#" @click="addPlan($event,item)" v-else>新增计划</a>
              <a class="view-action" href="#" @click="viewPlan($event,item)" v-if="item.DeliveryDispatch.ID > 0 || item.InstallDispatch.ID > 0">查看计划</a>
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
import Right from "./components/InstallPlanRight";
import api from "api/Delivery";
import clone from "clone";

export default {
  data() {
    return {
      rightPanel: Right,
      request: api.list
    };
  },
  components: { DataListPage },
  methods: {
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
      var query = { data: clone(item), editable: editable, title: title };
      this.$router.load({ url: "/delivery-install-plan-edit", query: query });
    },
    viewDelivery(e, item) {
      this.$f7.swipeoutClose(Dom7(e.target).parents("li")[0]);
      var query = { ID: item.ID };
      this.$router.load({ url: "/delivery-detail", query: query });
    }
  }
};
</script>
