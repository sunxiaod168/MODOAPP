import Vue from 'vue'
import $ from 'jquery'

Vue.directive('permission', {
	bind: function (el, binding, vnode) {
		if (el) {
			var userPermissions = vnode.componentInstance.$store.state.userPermissions
			var p = binding.value
			var hasPermission = false
			if (userPermissions && userPermissions.length > 0) {
				userPermissions.forEach(permission => {
					if (permission == p) {
						hasPermission = true
						return
					}
				})
			}
			if (!hasPermission) {
				$(el).remove()
			}
		}
	}
})