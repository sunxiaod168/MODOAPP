<template>
  <div id="app">
    <f7-statusbar/>
    <f7-views>
      <f7-view main>

        <f7-pages navbar-fixed>
          <f7-navbar>
            <f7-nav-left back-link="返回" v-if="$store.state.navBackVisiable" />
            <f7-nav-center>{{$store.state.navBarTitle }}</f7-nav-center>
            <f7-nav-right v-if="$store.state.navRightVisiable">
              <f7-link v-if="$store.state.navRightPanelEnabled" :icon="$store.state.navRightIcon" open-panel="right">{{$store.state.navRightTitle}}</f7-link>
              <f7-link v-else :icon="$store.state.navRightIcon" @click="navRightButtonClicked">{{$store.state.navRightTitle}}</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-page name="start" class="start-bg">

            <f7-button href="/login" color="lightblue">开始使用</f7-button>
          </f7-page>
        </f7-pages>

      </f7-view>
    </f7-views>
    <f7-panel right cover theme="blue" layout="white" @panel:closed="onRightPanelClosed">
      <component :is="$store.state.currentRightView" ref="right-panel">

      </component>
    </f7-panel>
  </div>
</template>
<style scoped>
.start-bg >>> .page-content{
  padding: 130% 10% 0
}

</style>
<style>
.navbar {
  opacity: 0;
}
</style>


<script>
import { bus } from "common";

export default {
  date() {
    return {};
  },
  methods: {
    onRightPanelClosed() {
      bus.$emit("rightPanelClosed");
    },
    navRightButtonClicked() {
      bus.$emit("navRightButtonClicked");
    }
  }
};
</script>
