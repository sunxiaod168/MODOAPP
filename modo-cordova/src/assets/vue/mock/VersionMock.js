import Mock from 'mockjs'
import CONST from 'const'


Mock.mock('/api/version/check', 'post', function (options) {

    return {
        status: CONST.STATUS_SUCCESS,
        msg: '成功',
        data: {
            version: 'V2.0.0',
            publishDate: '2018-03-06',
            url:'http://app.modencloud.com/download/modo.apk'
           
        }
    }

})