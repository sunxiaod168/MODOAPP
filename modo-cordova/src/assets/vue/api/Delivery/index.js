import axios from 'api/base'

const api = {

  list(params) {
    return axios.post('/delivery/list', params)
  },  
  createDeliveryPlan(params) {
    return axios.post('/delivery/createDeliveryPlan', params)
  },
}

export default api