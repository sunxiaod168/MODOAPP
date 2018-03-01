import Mock from 'mockjs'
import CONST from 'const'


// Mock.mock('/api/user/login', 'post', function (options) {
// 	var params = JSON.parse(options.body)

// 	var uname = params.uname
// 	var pwd = params.pwd

// 	return {
// 		status: CONST.STATUS_SUCCESS,
// 		msg: '登录成功',
// 		data: {
// 			uname: 'admin',
// 			token: '597235720sfsf',
// 			permission: [1, 2, 3, 4]
// 		}
// 	}
// })

Mock.mock('/api/user/staffList', 'post', function (options) {
	var params = JSON.parse(options.body)
	return {
		status: CONST.STATUS_SUCCESS,
		msg: '成功',
		data: [{ ID: 1, Name: "洪金彪" }, { ID: 2, Name: "王鹏" }, { ID: 3, Name: "杨静" }]
	}

})

Mock.mock('/api/user/modifyPwd', 'post', function (options) {
	var params = JSON.parse(options.body)
	var status = CONST.STATUS_FAILD;
	var msg = '';
	if (params.oldPwd == '123') {
		status = CONST.STATUS_SUCCESS;
		msg = '修改成功';
	} else {
		msg = '原密码不正确'
	}
	return {
		status: status,
		msg: msg,
		data: null
	}
})

Mock.mock('/api/user/profile', 'post', function (options) {
	return {
		status: CONST.STATUS_SUCCESS,
		msg: '成功',
		data: profileData
	}
})


var profileData = {
	"ID": 19,
	"LoginName": "liuxiaojiao",
	"RoleName": "店长（分散式管理）",
	"RealName": "刘晓娇",
	"Enable": true,
	"EnableTime": "\/Date(1503849600000)\/",
	"DisableTime": "\/Date(1535385600000)\/",
	"ZZName": "长实简艺",
	"Phone": "13383836796",
	"EntryTime": "\/Date(1503849600000)\/",
}

