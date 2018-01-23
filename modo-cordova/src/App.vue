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
              <f7-link :icon="$store.state.navRightIcon" open-panel="right">{{$store.state.navRightTitle}}</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-page name="start">

            <f7-link href="/login" class="go">开始使用</f7-link>

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
.go {
  margin-top: 100px;
  display: block;
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
    }
  }
};
</script>
