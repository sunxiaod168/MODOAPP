import base from 'api/base'

const api = {
	profile() {
		return base.post('/user/profile')
	},
	login(params) {
		return base.post('/user/login', params)
	},	
	modifyPwd(params) {
		return base.post('/user/modifyPwd', params)
	},
	
}

export default api