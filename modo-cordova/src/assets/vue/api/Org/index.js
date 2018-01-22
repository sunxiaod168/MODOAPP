import axios from 'api/base'

const api = {
	orgList: function (params) {
		return axios.post('/org/priceOrgs', params)
	}	
}

export default api