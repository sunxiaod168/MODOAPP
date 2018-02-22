<template>
    <f7-page nav-title="按送货额核算" @page:beforeinit="initHandle" @page:back="backHandler">
        <f7-block>
            <f7-card v-for="item in pageData.byDelivery" :key="item.ZZName">
                <f7-card-header>{{item.ZZName}}</f7-card-header>
                <f7-card-content>
                    <p>
                        <label>送货金额</label>
                        <span>{{item.DeliveryAmount | money}}</span>
                    </p>
                    <p>
                        <label>成本金额</label>
                        <span>{{item.CostAmount | money}}</span>
                    </p>
                    <p>
                        <label>支出金额</label>
                        <span>{{item.OutAmount | money}}</span>
                    </p>
                    <p>
                        <label>利润</label>
                        <span>{{item.ProfitAmount | money}}</span>
                    </p>
                </f7-card-content>
            </f7-card>
        </f7-block>
    </f7-page>
</template>
<style scoped>
.content-block {
  margin: 10px 0 0;
}
.page>>>.page-content {
  background-color: #fff;
}
.page>>>.card p {
  text-align: left;
}
.page>>>.card p > label {
  display: inline-block;
  width: 40%;
  text-align: right;
  margin-right: 1em;
}
</style>

<style>

</style>
<script>

export default {
  data() {
    return {
      msg: "",      
      pageData: { byDelivery: [] }
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    initHandle(e) {
      this.$store.state.navRightVisiable = false;
      var page = e.detail.page;      
      this.pageData = page.query;
      
    },
    backHandler() {
        this.$store.state.navRightVisiable = true;
    } 
  }
};
</script>


