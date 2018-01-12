import CONST, {PermissionMap} from 'const'

export function setNavBack(store, page) {
    if (page.name == 'tabbar' || page.name == 'login') {
        store.commit('hideNavBack')
    } else {
        store.commit('showNavBack')
    }
}

export function setNavTitle(store, page) {
    var title = page.container.getAttribute('navtitle')
    if (!title) {
        if (page.name == 'tabbar') {
            var tabID = Dom7(page.container).find('.tab.active').attr('id')
            switch (tabID) {
                case "tab1":
                    title = CONST.NAV_TITLE_QUERY;
                    break;
                case "tab2":
                    title = CONST.NAV_TITLE_STAT;
                    break;
                case "tab3":
                    title = CONST.NAV_TITLE_DELIVERY;
                    break;
                case "tab4":
                    title = CONST.NAV_TITLE_MINE;
                    break;
                default:
                    break;
            }
        } else {
            title = CONST.NAV_TITLE_DEFAULT
        }
    }
    store.commit('setNavBarTitle', title)
}

export function convertPermission(permission) {

    var userPermission = null

    if (permission && permission.length > 0) {
        userPermission = []
        permission.forEach(pid => {
            PermissionMap.forEach(item => {
                if (pid == item.id){
                    userPermission.push(item.key)
                    return
                }
            });
        });
    }
    return userPermission
}