import axios from 'api/base'

const api = {

  list(params) {
    return axios.post('/delivery/list', params)
  },  
  detail(params){
    return axios.post('/delivery/detail', params)
  },
  deliveryInstallPlan(params) {
    return axios.post('/delivery/deliveryInstallPlan', params)
  },
  deliveryDispatchList(params) {
    return axios.post('/delivery/deliveryDispatchList', params)
  },  
  installDispatchList(params) {
    return axios.post('/delivery/installDispatchList', params)
  },  
  deliveryReport(params) {
    return axios.post('/delivery/deliveryReport', params)
  },
  installReport(params) {
    return axios.post('/delivery/installReport', params)
  }  
}

export default api