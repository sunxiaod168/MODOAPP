import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

// Import App Custom Styles
import F7Icons from './assets/css/framework7-icons.css'
import AppStyles from './assets/css/main.css'


import Routes from 'routes'
import App from './main.vue'
import Api from 'api'
import Mock from 'mock'

Vue.use(Framework7Vue)

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    preroute: function (view, options) {
      Api.getUserInfo(function (response) {
        var data = response.data

      }, function (err) {
        console.log(err)
      })
    }
  },
  components: {
    app: App
  }
})
