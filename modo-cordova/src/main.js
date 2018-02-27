import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
import  'common/chart-walden.js'	

import ECharts from "vue-echarts/components/ECharts.vue";

import FontAwsome from './assets/css/fontawesome-all.min.css'
import AppStyles from './assets/css/main.css'

import { setNavBack, setNavTitle } from 'common'
import routes from 'routes'
import store from 'state'
import app from './App'
import Filters from 'filters'
import Directives from 'directives'

//import Mock from 'mock'


Vue.use(Framework7Vue)
Vue.component("chart", ECharts);


new Vue({
	el: '#app',
	components: {
		app
	},
	template: '<app/>',
	store,
	framework7: {
		root: '#app',		
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

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	console.log(device.cordova);
	store.commit("setDeviceInfo");
}