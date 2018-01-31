import Vue from 'vue'
import Vuex from 'vuex'
import CONST from 'const'
import { convertPermission } from 'common'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		userInfo: null,
		userPermissions: null,
		navBackVisiable: false,
		navRightVisiable: false,	
		navRightPanelEnabled:false,	
		navBarTitle: CONST.NAV_TITLE_DEFAULT,
		navRightTitle:'',
		navRightIcon:'',
		currentRightView: null
	},
	mutations: {
		setUserInfo(state, userInfo) {

			var permission = userInfo.permission
			var token = userInfo.token
			delete userInfo.permission 
			delete userInfo.token    
			state.token = token
			state.userInfo = userInfo      
			state.userPermissions = convertPermission(permission)
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

export default store