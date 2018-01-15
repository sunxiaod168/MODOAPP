import CONST, {PermissionMap} from 'const'
import $ from 'jquery'

export function setNavBack(store, page) {
	if (page.name == 'tabbar' || page.name == 'login') {
		store.commit('hideNavBack')
	} else {
		store.commit('showNavBack')
	}
}

export function setNavTitle(store, page) {
	var title = page.container.getAttribute('nav-title')
	if (!title) {
		if (page.name == 'tabbar') {
			var tabID = $(page.container).find('.tab.active').attr('id')
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
		} else {
			title = CONST.NAV_TITLE_DEFAULT
		}
	}
	store.commit('setNavBarTitle', title)
}

export function convertPermission(permissions) {

	var userPermission = null

	if (permissions && permissions.length > 0) {
		userPermission = []
		permissions.forEach(pid => {
			PermissionMap.forEach(item => {
				if (pid == item.id){
					userPermission.push(item.key)
					return
				}
			})
		})
	}
	return userPermission
}

