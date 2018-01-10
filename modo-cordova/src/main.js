import Vue from 'vue'
import Vuex from 'vuex'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */
import F7Icons from './assets/css/framework7-icons.css'
import FontAwsome from './assets/css/fontawesome-all.min.css'
import AppStyles from './assets/css/main.css'

import CONST from 'const'
import Routes from 'routes'
import App from './App'
import Mock from 'mock'

Vue.use(Vuex)
Vue.use(Framework7Vue)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: null,
    navBackVisiable: false,
    navBarTitle: '墨斗云'
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.isLogin = userInfo != null
      state.userInfo = userInfo
    },
    hideNavBack(state) {
      state.navBackVisiable = false
    },
    showNavBack(state) {
      state.navBackVisiable = true
    },
    setNavBarTitle(state, title) {
      state.navBarTitle = title
    }
  }
})

new Vue({
  el: '#app',
  template: '<app/>',
  store,
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    preroute: function (view, options) {
      var url = options.url

      if (url == '/login') {
        return true
      }
      if (store.state.isLogin == false) {
        view.router.load({ url: '/login', pushState: false })
        return false
      }
      return true
    },
    onPageBeforeAnimation: function (app, page) {
      if (page.name == 'tabbar' || page.name == 'login') {
        store.commit('hideNavBack')
      } else {
        store.commit('showNavBack')
      }

      var title = page.container.getAttribute('navtitle')
      if (!title) {
        title = '墨斗云'
      }
      store.commit('setNavBarTitle', title)

    }
  },
  components: {
    app: App
  },
})
