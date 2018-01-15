<template>
  <div id="app">
    <f7-statusbar/>
    <f7-views>
      <f7-view main>

        <f7-pages navbar-fixed>
          <f7-navbar>
            <f7-nav-left back-link="返回" v-if="$store.state.navBackVisiable"/>
            <f7-nav-center>{{ $store.state.navBarTitle }}</f7-nav-center>
          </f7-navbar>
          <f7-page name="start">

            <f7-link href="/login">开始使用</f7-link>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>
<style scoped>

</style>

<script>
export default {}
</script>
