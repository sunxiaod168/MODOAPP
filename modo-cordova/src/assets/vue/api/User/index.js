import axios from 'api/base'

const api = {
	info(params) {
		return axios.post('/user/info', params)
	},
	login(params) {
		return axios.post('/user/login', params)
	},
	staffList(params) {
		return axios.post('/user/staffList', params)
	}
}

export default api