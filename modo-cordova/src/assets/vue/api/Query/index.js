import axios from 'api/base'

const api = {

	retailPrice (params) {
		return axios.post('/query/retailPrice', params)
	},
	costPrice (params) {
		return axios.post('/query/costPrice', params)
	},
	inventory(params) {
		return axios.post('/query/inventory', params)
	},
	orderProgress(params){
		return axios.post('/query/orderProgress', params)
	}	
}

export default api