import axios from 'api/base'

const api = {

	retailPrice: function (queryParams) {
		return axios.post('/query/retailPrice', queryParams)
	}
}

export default api