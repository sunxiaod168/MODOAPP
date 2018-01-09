<template>

  <f7-page navbar-fixed tabbar-fixed>    
    <f7-navbar class="bg-blue color-white"  title="墨斗云"></f7-navbar>

    <f7-block tabs>
      <f7-tab id="tab1"/>
      <f7-tab id="tab2" />
      <f7-tab id="tab3" />
      <f7-tab id="tab4" />      
    </f7-block>

    <f7-toolbar tabbar labels>
      <f7-link href="/tabbar/" route-tab-link="#tab1" text="查询" icon="fas fa-search"></f7-link>
      <f7-link href="/tabbar/tab2/" route-tab-link="#tab2" text="统计" icon="fas fa-chart-bar"></f7-link>
      <f7-link href="/tabbar/tab3/" route-tab-link="#tab3" text="配送" icon="fas fa-truck"></f7-link>      
      <f7-link href="/tabbar/tab4/" route-tab-link="#tab4" text="我的" icon="fas fa-user"></f7-link>      
    </f7-toolbar>

  </f7-page>
</template>

<script>
export default {};
</script>

<style>

.tabbar-labels a.link i + span, .tabbar-labels a.tab-link i + span {font-size:14px;}
</style>

