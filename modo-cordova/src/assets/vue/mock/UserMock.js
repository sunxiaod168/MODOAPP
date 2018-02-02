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
			zzid: '40008001',
			token: '597235720sfsf',
			permission: [1, 2, 3, 4]
		}
	}

})

Mock.mock('/api/user/staffList', 'post', function (options) {
	var params = JSON.parse(options.body)
	return {
		status: CONST.STATUS_SUCCESS,
		msg: '成功',
		data: [{ ID: 1, Name: "洪金彪" }, { ID: 2, Name: "王鹏" }, { ID: 3, Name: "杨静" }]
	}

})
