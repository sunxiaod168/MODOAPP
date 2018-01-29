import CONST, {PermissionMap} from 'const'
import $ from 'jquery'
import Vue from 'vue'
import CurrencyFormatter from 'currency-formatter'

export const bus = new Vue()

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

export function convertJsonDate(value){

	var regex = /\/Date\((\d+)\)\//ig
    var result = regex.exec(value)
    if(result.length == 2){
		var numValue = parseInt(result[1])
		return new Date(numValue)
    } else {
        return null
    }
}

export function localDateString(value){
	var date = convertJsonDate(value);
	if(date == null){
		return null
	}else {
		return date.toLocaleDateString()
	}	
}


export function localDateTimeString(value){
	var date = convertJsonDate(value);
	if(date == null){
		return null
	}else {
		return date.toLocaleDateString() + ' ' +date.toLocaleTimeString()
	}	
}

export function moneyString(value){

	if (value === null) {
        return ''
    } else {        
        return CurrencyFormatter.format(value, { code: 'CNY' });
    }
}




