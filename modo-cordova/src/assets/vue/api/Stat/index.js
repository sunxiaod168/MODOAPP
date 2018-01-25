import axios from 'api/base'

const api = {

  asset(params) {
    return axios.post('/stat/asset', params)
  },
  profit(params) {
    return axios.post('/stat/profit', params)
  },
  achievement(params) {
    return axios.post('/stat/achievement', params)
  },
  unfinishOrder(params) {
    return axios.post('/stat/unfinishOrder', params)
  },
  inventory(params) {
    return axios.post('/stat/inventory', params)
  },
  incomeExpense(params) {
    return axios.post('/stat/incomeExpense', params)
  }
}

export default api