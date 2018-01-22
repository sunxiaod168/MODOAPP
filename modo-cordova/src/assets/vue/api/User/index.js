import axios from 'api/base'

const api = {
	info: function (params) {
		return axios.post('/user/info', params)
	},
	login: function (params) {
		return axios.post('/user/login', params)
	}
}

export default api