import axios from 'api/base'

const api = {

  list(params) {
    return axios.post('/delivery/list', params)
  } 
}

export default api