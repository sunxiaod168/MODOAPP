import base from 'api/base'

const api = {
	profile() {
		return base.post('/user/profile')
	},
	login(params) {
		return base.post('/user/login', params)
	},	
	changePassword(params) {
		return base.post('/user/changePassword', params)
	},
	logout() {
		return base.post('/user/logout')
	},	
}

export default api