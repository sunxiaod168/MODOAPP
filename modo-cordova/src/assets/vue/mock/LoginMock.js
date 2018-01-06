import Mock from 'mockjs'

Mock.mock('/api/login', 'post', function (options) {
  var params = JSON.parse(options.body)
  var uname = params.uname
  var pwd = params.pwd

  if (uname === 'admin' && pwd === '123') {
    return { data: { access_token: '123abc' }, code: 200, msg: '登录成功' }
  } else {
    return { data: null, code: 401, msg: '用户名或密码错误' }
  }
})
