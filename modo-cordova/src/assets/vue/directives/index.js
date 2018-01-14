import Vue from 'vue'
import $ from 'jquery'

Vue.directive('permission', {
	bind: function (el, binding, vnode) {
		if (el) {
			var userPermissions = vnode.componentInstance.$store.state.userPermissions
			var p = binding.value
			var hasPermission = false
			userPermissions.forEach(element => {
				if (element == p) {
					hasPermission = true
					return
				}
			})
			if (!hasPermission){
				$(el).remove()
			}
		}

       
	}

})