<template>

  <f7-page tabbar-fixed>
    

    <f7-block tabs>
      <f7-tab id="tab1"/>
      <f7-tab id="tab2" />
      <f7-tab id="tab3" />
      <f7-tab id="tab4" />      
    </f7-block>

    <f7-toolbar tabbar labels>
      <f7-link href="/tabbar/" route-tab-link="#tab1" text="search" class="f7-icons">查询</f7-link>
      <f7-link href="/tabbar/tab2/" route-tab-link="#tab2" text="box" class="f7-icons">配送</f7-link>
      <f7-link href="/tabbar/tab3/" route-tab-link="#tab3" text="pie" class="f7-icons">统计</f7-link>
      <f7-link href="/tabbar/tab4/" route-tab-link="#tab4" text="person" class="f7-icons">我的</f7-link>      
    </f7-toolbar>

  </f7-page>
</template>

<script>
export default {};
</script>

<<style scoped>
.tabbar-labels .f7-icons{font-size:16px;}
</style>

