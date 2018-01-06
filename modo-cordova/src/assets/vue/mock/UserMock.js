import Mock from 'mockjs'
import Cookie from 'js-cookie'

Mock.mock('/api/user', 'get', function (options) {
  var data = Cookie.get('access_token')
  if (data != null) {
    return { data: null, code: 200, msg: '已登录' }
  } else {
    return { data: null, code: 401, msg: '未登录' }
  }
})
