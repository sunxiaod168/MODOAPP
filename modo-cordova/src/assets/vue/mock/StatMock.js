import Mock from 'mockjs'
// import Cookie from 'js-cookie'
import CONST from 'const'


Mock.mock('/api/stat/asset', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: assetData
    }

})

var assetData = {"AssetTotal":2206044.44,"GoodsTotal":936105,"MoneyTotal":977697.44,"ReceiveTotal":292242.00}