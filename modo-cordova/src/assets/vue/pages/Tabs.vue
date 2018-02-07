<template>

  <f7-page navbar-fixed tabbar-fixed name="tabbar">

    <f7-block tabs>
      <f7-tab id="tab1" />
      <f7-tab id="tab2" />
      <f7-tab id="tab3" />
      <f7-tab id="tab4" />
    </f7-block>

    <f7-toolbar tabbar labels>
      <f7-link href="/tabbar/" route-tab-link="#tab1" text="查询" icon="fas fa-search"/>
      <f7-link href="/tabbar/tab2/" route-tab-link="#tab2" text="统计" icon="fas fa-chart-bar"/>
      <f7-link href="/tabbar/tab3/" route-tab-link="#tab3" text="配送" icon="fas fa-truck"/>
      <f7-link href="/tabbar/tab4/" route-tab-link="#tab4" text="我的" icon="fas fa-user"/>
    </f7-toolbar>

  </f7-page>

</template>

<style>
.navbar{
  opacity: 1;
}
</style>

<script>
import CONST from 'const'
import $ from 'jquery'

export default {
  data() {
    return {}
  },
  mounted: function() {
   
    var me = this
    $('.tab').on('tab:show', function() {
      var tabID = this.id
      var title = ''

      switch (tabID) {
        case 'tab1':
          title = CONST.NAV_TITLE_QUERY
          break
        case 'tab2':
          title = CONST.NAV_TITLE_STAT
          break
        case 'tab3':
          title = CONST.NAV_TITLE_DELIVERY
          break
        case 'tab4':
          title = CONST.NAV_TITLE_MINE
          break
        default:
          break
      }
      me.$store.commit('setNavBarTitle', title)
    })
  }
}
</script>


