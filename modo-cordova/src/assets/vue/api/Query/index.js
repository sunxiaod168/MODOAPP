import axios from 'api/base'

const api = {

	retailPrice: function (params) {
		return axios.post('/query/retailPrice', params)
	},
	costPrice: function (params) {
		return axios.post('/query/costPrice', params)
	},
	inventory: function(params) {
		return axios.post('/query/inventory', params)
	}
	
}

export default api