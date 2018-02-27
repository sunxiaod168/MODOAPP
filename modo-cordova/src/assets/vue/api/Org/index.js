import base from 'api/base'

const api = {
	orgList: function (params) {
		return base.post('/org/priceOrgs', params)
	}	
}

export default api