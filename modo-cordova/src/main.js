import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */
import F7Icons from './assets/css/framework7-icons.css'
import FontAwsome from './assets/css/fontawesome-all.min.css'
import AppStyles from './assets/css/main.css'
import Mock from 'mock'

import { setNavBack, setNavTitle } from 'common'
import routes from 'routes'
import store from 'state'
import app from './App'

Vue.use(Framework7Vue)


new Vue({
	el: '#app',
	components: {
		app
	},
	template: '<app/>',
	store,
	framework7: {
		root: '#app',
		/* Uncomment to enable Material theme: */
		// material: true,
		routes,
		preroute: function (view, options) {
			var url = options.url

			if (url == '/login') {
				return true
			}
			if (store.state.userInfo == null) {
				view.router.load({ url: '/login', pushState: false })
				return false
			}
			return true
		},
		onPageBeforeAnimation: function (app, page) {
			setNavBack(store,page)
			setNavTitle(store,page)
		}
	}	
})