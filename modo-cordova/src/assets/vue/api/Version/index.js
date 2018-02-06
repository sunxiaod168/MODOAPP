import axios from 'api/base'

const api = {
	check() {
		return axios.post('/version/check')						 
	}
}

export default api