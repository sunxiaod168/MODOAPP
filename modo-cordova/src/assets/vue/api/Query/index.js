import base from 'api/base'

const api = {

	retailPrice (params) {
		return base.post('/query/retailPrice', params)
	},
	costPrice (params) {
		return base.post('/query/costPrice', params)
	},
	inventory(params) {
		return base.post('/query/inventory', params)
	},
	orderProgress(params){
		return base.post('/query/orderProgress', params)
	}	
}

export default api