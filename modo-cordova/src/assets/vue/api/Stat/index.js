import axios from 'api/base'

const api = {

  asset(params) {
    return axios.post('/stat/asset', params)
  },
  profit(params) {
    return axios.post('/stat/profit', params)
  },
  order(params) {
    return axios.post('/stat/order', params)
  },
  achievement(params) {
    return axios.post('/stat/achievement', params)
  },
  inventory(params) {
    return axios.post('/stat/inventory', params)
  },
  incomeExpense(params) {
    return axios.post('/stat/incomeExpense', params)
  }
}

export default api