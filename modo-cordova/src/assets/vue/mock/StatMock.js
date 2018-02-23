import Mock from 'mockjs'
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
Mock.mock('/api/stat/order', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: orderData
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
var orderData = {
    "allData":
        { "DealAmount": 530384, "Cancel": -30384, "NetIncrease": 500000 },
    "unfinishedData": [
        { "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店", "DealAmount": 530384, "OrderBalanceAmount": 30384, "ReceivedAmonut": 500000 },
        { "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", "DealAmount": 312806, "OrderBalanceAmount": 12806, "ReceivedAmonut": 300000 },
        { "ZZID": "4100008001003", "ZZName": "长实简艺", "DealAmount": 472750, "OrderBalanceAmount": 72750, "ReceivedAmonut": 400000 }]
}
var achievementData = {
    "orgData": [
        { "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店", "Increase": 530384, "Cancel": -30384, "NetIncrease": 500000 },
        { "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", "Increase": 312806, "Cancel": -12806, "NetIncrease": 300000 },
        { "ZZID": "4100008001003", "ZZName": "长实简艺", "Increase": 472750, "Cancel": -72750, "NetIncrease": 400000 }],
    "staffData": [
        { "StaffID": 24, "StaffName": "方文龙", "Increase": 329580, "Cancel": -29580, "NetIncrease": 300000 },
        { "StaffID": 25, "StaffName": "马华", "Increase": 152814, "Cancel": -52814, "NetIncrease": 100000 },
        { "StaffID": 26, "StaffName": "石磊", "Increase": 47990, "Cancel": -7990, "NetIncrease": 400000 },
        { "StaffID": 27, "StaffName": "范言梅", "Increase": 226646, "Cancel": -26646, "NetIncrease": 200000 },
        { "StaffID": 28, "StaffName": "蒲花花", "Increase": 86160, "Cancel": -6160, "NetIncrease": 80000 },
        { "StaffID": 30, "StaffName": "刘晓娇", "Increase": 241087, "Cancel": -41087, "NetIncrease": 200000 },
        { "StaffID": 31, "StaffName": "李娜", "Increase": 231663, "Cancel": -31663, "NetIncrease": 200000 }]
}

var inventoryData = {
    "orgList": [
        { "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店", "StorageAmount": 155610, "Percent": 16.623135225215120098706875830 },
        { "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", "StorageAmount": 200430, "Percent": 21.411059656769272677744483790 },
        { "ZZID": "4100008001003", "ZZName": "长实简艺", "StorageAmount": 138770, "Percent": 14.824191730628508554061777260 },
        { "ZZID": "4100008001004", "ZZName": "郑州西四环仓库", "StorageAmount": 441295, "Percent": 47.141613387387098669486863120 }],
    "brandList": [
        { "BrandID": 19, "BrandName": "华兰", "StorageAmount": 623325, "Percent": 66.587081577387152082298460110 },
        { "BrandID": 20, "BrandName": "XH", "StorageAmount": 29800, "Percent": 3.1834035711805833747282623200 },
        { "BrandID": 22, "BrandName": "HD", "StorageAmount": 12720, "Percent": 1.3588219270274167961927347900 },
        { "BrandID": 21, "BrandName": "长实", "StorageAmount": 270260, "Percent": 28.870692924404847746780542780 }],
    "totalAmount": 936105,
    "statDate": "\/Date(1512658828180)\/"
};
var incomeExpenseData = {
    "Total": [
        { "ZZID": "4100008001", "ZZName": "办公室", "IncomeTotal": 0, "ExpensesTotal": 27521.00, "NetIncomeTotal": -27521.00 },
        { "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店", "IncomeTotal": 470754.00, "ExpensesTotal": 140817.15, "NetIncomeTotal": 329936.85 },
        { "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", "IncomeTotal": 359569.00, "ExpensesTotal": 95160.00, "NetIncomeTotal": 264409.00 },
        { "ZZID": "4100008001003", "ZZName": "长实简艺", "IncomeTotal": 547650.00, "ExpensesTotal": 136777.41, "NetIncomeTotal": 410872.59 }],
    "Income": [
        { "Subject": "定金", "Amount": 1041561 },
        { "Subject": "余款", "Amount": 336412 }],
    "Expenses": [
        { "Subject": "销售费用", "Amount": 12000 },
        { "Subject": "租金", "Amount": 202780 },
        { "Subject": "电话费", "Amount": 300 },
        { "Subject": "水电费", "Amount": 2766 },
        { "Subject": "办公用品费用", "Amount": 203 },
        { "Subject": "其它办公费用", "Amount": 510 },
        { "Subject": "差旅费", "Amount": 2234 },
        { "Subject": "福利", "Amount": 350 },
        { "Subject": "广告费", "Amount": 990 },
        { "Subject": "活动费", "Amount": 2480 },
        { "Subject": "售后其它费用", "Amount": 1550 },
        { "Subject": "长途运输（物流）费", "Amount": 7838 },
        { "Subject": "市内运费", "Amount": 2806 },
        { "Subject": "人工费", "Amount": 570 },
        { "Subject": "刷卡手续费", "Amount": 1183 },
        { "Subject": "赠品（礼品）费用", "Amount": 1359 },
        { "Subject": "改单退款", "Amount": 155977 },
        { "Subject": "车辆费用", "Amount": 2165 },
        { "Subject": "加油费", "Amount": 2215 }]
}
