import Mock from 'mockjs'
// import Cookie from 'js-cookie'
import CONST from 'const'


Mock.mock('/api/user/login', 'post', function (options) {
	var params = JSON.parse(options.body)
	
	var uname = params.uname	
	var pwd = params.pwd

	return {
		status: CONST.STATUS_SUCCESS,
		msg: '登录成功',
		data: {			
			uname: 'admin',
			token:'597235720sfsf',
			permission: [1, 2, 3, 4]
		}
	}

})
