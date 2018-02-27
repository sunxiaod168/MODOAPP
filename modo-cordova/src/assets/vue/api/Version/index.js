import base from 'api/base'

const api = {
	check() {
		return base.post('/version/check')						 
	}
}

export default api