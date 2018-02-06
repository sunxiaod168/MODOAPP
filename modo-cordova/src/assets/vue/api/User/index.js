import axios from 'api/base'

const api = {
	profile() {
		return axios.post('/user/profile')
	},
	login(params) {
		return axios.post('/user/login', params)
	},
	staffList(params) {
		return axios.post('/user/staffList', params)
	},
	modifyPwd(params) {
		return axios.post('/user/modifyPwd', params)
	},
	
}

export default api