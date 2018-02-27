import base from 'api/base'

const api = {

  asset(params) {
    return base.post('/stat/asset', params)
  },
  profit(params) {
    return base.post('/stat/profit', params)
  },
  order(params) {
    return base.post('/stat/order', params)
  },
  achievement(params) {
    return base.post('/stat/achievement', params)
  },
  inventory(params) {
    return base.post('/stat/inventory', params)
  },
  incomeExpense(params) {
    return base.post('/stat/incomeExpense', params)
  }
}

export default api