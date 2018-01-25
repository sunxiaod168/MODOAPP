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
Mock.mock('/api/stat/profit', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: profitData
    }
})
Mock.mock('/api/stat/achievement', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: achievementData
    }
})
Mock.mock('/api/stat/unfinishOrder', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: unfinishOrderData
    }
})
Mock.mock('/api/stat/inventory', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: inventoryData
    }
})
Mock.mock('/api/stat/incomeExpense', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: incomeExpenseData
    }
})
var assetData = { "AssetTotal": 2206044.44, "GoodsTotal": 936105, "MoneyTotal": 977697.44, "ReceiveTotal": 292242.00 }
var profitData = {
    byOrder: [
        { "ZZName": "办公室", "OrderAmount": 0.00, "CancelAmount": 0.00, "NetIncreaseAmount": 0.00, "CostAmount": 0.00, "OrderCostAmount": 0.00, "CancelCostAmount": 0.00, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "华兰家具欧凯龙西环店", "OrderAmount": 0.00, "CancelAmount": 0.00, "NetIncreaseAmount": 0.00, "CostAmount": 0.00, "OrderCostAmount": 0.00, "CancelCostAmount": 0.00, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "华兰家具欧凯龙北环店", "OrderAmount": 0.00, "CancelAmount": 0.00, "NetIncreaseAmount": 0.00, "CostAmount": 0.00, "OrderCostAmount": 0.00, "CancelCostAmount": 0.00, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "长实简艺", "OrderAmount": 0.00, "CancelAmount": 0.00, "NetIncreaseAmount": 0.00, "CostAmount": 0.00, "OrderCostAmount": 0.00, "CancelCostAmount": 0.00, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 }],
    byDelivery: [
        { "ZZName": "办公室", "DeliveryAmount": 0.00, "CostAmount": 0, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "华兰家具欧凯龙西环店", "DeliveryAmount": 0.00, "CostAmount": 0, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "华兰家具欧凯龙北环店", "DeliveryAmount": 0.00, "CostAmount": 0, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 },
        { "ZZName": "长实简艺", "DeliveryAmount": 0.00, "CostAmount": 0, "OutAmount": 0.00, "ProfitAmount": 0.00, "ProfitRate": 0 }]
}
var achievementData;
var unfinishOrderData;
var inventoryData;
var incomeExpenseData
