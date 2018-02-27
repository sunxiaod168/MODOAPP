import base from 'api/base'

const api = {

  list(params) {
    return base.post('/delivery/list', params)
  },  
  detail(params){
    return base.post('/delivery/detail', params)
  },
  deliveryInstallPlan(params) {
    return base.post('/delivery/deliveryInstallPlan', params)
  },
  deliveryDispatchList(params) {
    return base.post('/delivery/deliveryDispatchList', params)
  },  
  installDispatchList(params) {
    return base.post('/delivery/installDispatchList', params)
  },  
  deliveryReport(params) {
    return base.post('/delivery/deliveryReport', params)
  },
  installReport(params) {
    return base.post('/delivery/installReport', params)
  }  
}

export default api