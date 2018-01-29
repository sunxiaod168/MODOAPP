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
Mock.mock('/api/stat/order', 'post', function (options) {
    var params = JSON.parse(options.body)
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: orderData
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
var orderData = {
    "ColGrid": [
        { "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店", "Total": 530384 },
        { "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", "Total": 312806 },
        { "ZZID": "4100008001003", "ZZName": "长实简艺", "Total": 472750 }],
    "DayLineGrid": [
        {
            "ZZID": "4100008001001", "ZZName": "华兰家具欧凯龙西环店",
            "LineData": [
                { "AnchorDate": "\/Date(1509033600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509120000000)\/", "Total": 237400 },
                { "AnchorDate": "\/Date(1509206400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509292800000)\/", "Total": 63000 },
                { "AnchorDate": "\/Date(1509379200000)\/", "Total": 24800 },
                { "AnchorDate": "\/Date(1509465600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509552000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509638400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509724800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509811200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509897600000)\/", "Total": 26100 },
                { "AnchorDate": "\/Date(1509984000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510070400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510156800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510243200000)\/", "Total": 3800 },
                { "AnchorDate": "\/Date(1510329600000)\/", "Total": 5920 },
                { "AnchorDate": "\/Date(1510416000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510502400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510588800000)\/", "Total": 18050 },
                { "AnchorDate": "\/Date(1510675200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510761600000)\/", "Total": 1200 },
                { "AnchorDate": "\/Date(1510848000000)\/", "Total": 1200 },
                { "AnchorDate": "\/Date(1510934400000)\/", "Total": 39000 },
                { "AnchorDate": "\/Date(1511020800000)\/", "Total": 23000 },
                { "AnchorDate": "\/Date(1511107200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511193600000)\/", "Total": 41000 },
                { "AnchorDate": "\/Date(1511280000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511366400000)\/", "Total": 9800 },
                { "AnchorDate": "\/Date(1511452800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511539200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511625600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511712000000)\/", "Total": 3620 },
                { "AnchorDate": "\/Date(1511798400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511884800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511971200000)\/", "Total": 14500 },
                { "AnchorDate": "\/Date(1512057600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512144000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512230400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512316800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512403200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512489600000)\/", "Total": 17994 }]
        },
        {
            "ZZID": "4100008001002", "ZZName": "华兰家具欧凯龙北环店", 
            "LineData": [
                { "AnchorDate": "\/Date(1509033600000)\/", "Total": 221926 },
                { "AnchorDate": "\/Date(1509120000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509206400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509292800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509379200000)\/", "Total": 36200 },
                { "AnchorDate": "\/Date(1509465600000)\/", "Total": 8720 },
                { "AnchorDate": "\/Date(1509552000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509638400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509724800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509811200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509897600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509984000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510070400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510156800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510243200000)\/", "Total": 2500 },
                { "AnchorDate": "\/Date(1510329600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510416000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510502400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510588800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510675200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510761600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510848000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510934400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511020800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511107200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511193600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511280000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511366400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511452800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511539200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511625600000)\/", "Total": 4000 },
                { "AnchorDate": "\/Date(1511712000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511798400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511884800000)\/", "Total": 260 },
                { "AnchorDate": "\/Date(1511971200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512057600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512144000000)\/", "Total": 39200 },
                { "AnchorDate": "\/Date(1512230400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512316800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512403200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512489600000)\/", "Total": 0 }]
        },
        {
            "ZZID": "4100008001003", "ZZName": "长实简艺", 
            "LineData": [
                { "AnchorDate": "\/Date(1509033600000)\/", "Total": 157388 },
                { "AnchorDate": "\/Date(1509120000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509206400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509292800000)\/", "Total": 22900 },
                { "AnchorDate": "\/Date(1509379200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509465600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509552000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509638400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509724800000)\/", "Total": 5600 },
                { "AnchorDate": "\/Date(1509811200000)\/", "Total": 5000 },
                { "AnchorDate": "\/Date(1509897600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1509984000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510070400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510156800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510243200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510329600000)\/", "Total": 24670 },
                { "AnchorDate": "\/Date(1510416000000)\/", "Total": 24328 },
                { "AnchorDate": "\/Date(1510502400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510588800000)\/", "Total": 107870 },
                { "AnchorDate": "\/Date(1510675200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510761600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510848000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1510934400000)\/", "Total": 14000 },
                { "AnchorDate": "\/Date(1511020800000)\/", "Total": 28560 },
                { "AnchorDate": "\/Date(1511107200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511193600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511280000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511366400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511452800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511539200000)\/", "Total": 16556 },
                { "AnchorDate": "\/Date(1511625600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511712000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511798400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1511884800000)\/", "Total": 21368 },
                { "AnchorDate": "\/Date(1511971200000)\/", "Total": 14510 },
                { "AnchorDate": "\/Date(1512057600000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512144000000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512230400000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512316800000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512403200000)\/", "Total": 0 },
                { "AnchorDate": "\/Date(1512489600000)\/", "Total": 30000 }]
        }],
    "StaffBarGrid": [
        { "StaffID": 24, "StaffName": "方文龙", "Total": 329580 },
        { "StaffID": 25, "StaffName": "马华", "Total": 152814 },
        { "StaffID": 26, "StaffName": "石磊", "Total": 47990 },
        { "StaffID": 27, "StaffName": "范言梅", "Total": 226646 },
        { "StaffID": 28, "StaffName": "蒲花花", "Total": 86160 },
        { "StaffID": 30, "StaffName": "刘晓娇", "Total": 241087 },
        { "StaffID": 31, "StaffName": "李娜", "Total": 231663 }]
}
var unfinishOrderData;
var inventoryData;
var incomeExpenseData
