import Mock from 'mockjs'
import CONST from 'const'

Mock.mock('/api/login', 'post', function (options) {
  var params = JSON.parse(options.body)
  var uname = params.uname
  var pwd = params.pwd

  // if (uname === 'admin') {
    return {
      status: CONST.STATUS_SUCCESS,
      msg: '登录成功',
      uid: 1,
      uname: 'admin'
    }
  // } else {
  //   return {
  //     status: CONST.STATUS_FAILD,
  //     msg: '用户名或密码错误'
  //   }
  // }
})
