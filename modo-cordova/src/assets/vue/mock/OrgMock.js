import Mock from 'mockjs'
import CONST from 'const'

Mock.mock('/api/org/priceOrgs', 'post', function (options) {
    var params = JSON.parse(options.body)

    var list = priceOrgs;
    if (params.keywords != null) {
        list = [];
    }
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: list
    }

})

var priceOrgs = [
    {
        zzid: "40008001",
        zzname: "红星1店",
    },
    {
        zzid: "40008002",
        zzname: "红星2店",
    }
]