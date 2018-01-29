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
Mock.mock('/api/stat/unfinishedOrder', 'post', function (options) {
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
var unfinishOrderData = [
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1513245105300)\/", "CustomerName": "朱慕婷", "Phone": "18537110679", "NoDeliveryAmount": 16480.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "二七区", "ID": 1377, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171214001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1513267200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 16480.00, "OrderAmount": 0, "DealAmount": 16480.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 0.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 16480.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": null, "OrderStatusName": null, "ReturnStatus": null, "ExamineStatus": 84, "ExamineStatusName": "已提交待审核", "Discount": 1.00, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1512464257570)\/", "CustomerName": "黄文学", "Phone": "13607667272", "NoDeliveryAmount": 17993.96, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "中原区", "ID": 1376, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171205001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1516377600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 43960.00, "OrderAmount": 0, "DealAmount": 17994.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 17994.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 150, "OrderStatusName": "正在备货", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.41, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1512012848147)\/", "CustomerName": "马兰", "Phone": "13137728702", "NoDeliveryAmount": 14499.96, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "中原区", "ID": 1372, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171201001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1515945600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 37290.00, "OrderAmount": 0, "DealAmount": 14500.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 4000.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 10500.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 151, "OrderStatusName": "备货完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.39, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511747669927)\/", "CustomerName": "赵芳", "Phone": "18603861780", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "中原区", "ID": 1367, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171127003", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511625600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 2940.00, "OrderAmount": 0, "DealAmount": 1300.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 1300.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.44, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511747178040)\/", "CustomerName": "谢春英", "Phone": "13783619268", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "二七区", "ID": 1366, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171127002", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511539200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 4320.00, "OrderAmount": 0, "DealAmount": 1800.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 1800.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.42, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511747091760)\/", "CustomerName": "李思菡", "Phone": "15037182599", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "中原区", "ID": 1365, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171127001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511971200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 1300.00, "OrderAmount": 0, "DealAmount": 520.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 520.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.40, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511422252333)\/", "CustomerName": "谢春英", "Phone": "13783619268", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "二七区", "ID": 1362, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171123001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511625600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 22600.00, "OrderAmount": 0, "DealAmount": 9800.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 9800.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.43, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511244522813)\/", "CustomerName": "王晓飞", "Phone": "13937078186", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "商丘市", "Region": "睢县", "ID": 1361, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171121005", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511971200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 21970.00, "OrderAmount": 0, "DealAmount": 4400.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 4400.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.20, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511244196157)\/", "CustomerName": "王晓飞", "Phone": "13937078186", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "商丘市", "Region": "睢县", "ID": 1360, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171121004", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511971200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 52110.00, "OrderAmount": 0, "DealAmount": 20600.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 20600.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.40, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511236393183)\/", "CustomerName": "王晓飞", "Phone": "13937078186", "NoDeliveryAmount": 24999.97, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "商丘市", "Region": "睢县", "ID": 1359, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171121003", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511971200000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 74080.00, "OrderAmount": 0, "DealAmount": 25000.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 20000.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 5000.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 153, "OrderStatusName": "订单取消", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.34, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511235737623)\/", "CustomerName": "霍伟", "Phone": "13073739987", "NoDeliveryAmount": 34499.95, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "惠济区", "ID": 1358, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171121002", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1516377600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 84600.00, "OrderAmount": 0, "DealAmount": 34500.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 10500.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 24000.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 150, "OrderStatusName": "正在备货", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.41, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511235119917)\/", "CustomerName": "杨英", "Phone": "13140136752", "NoDeliveryAmount": 6499.98, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "惠济区", "ID": 1357, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171121001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1515168000000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 15260.00, "OrderAmount": 0, "DealAmount": 6500.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 500.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 6000.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 151, "OrderStatusName": "备货完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.43, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511075925020)\/", "CustomerName": "耿建英", "Phone": "13949102850", "NoDeliveryAmount": 0.00, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "二七区", "ID": 1356, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171119003", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511193600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 35710.00, "OrderAmount": 0, "DealAmount": 14500.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 14500.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 152, "OrderStatusName": "订单完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.41, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 116, "DeliveryStatusName": "产品全部出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511075765617)\/", "CustomerName": "耿建英", "Phone": "13949102850", "NoDeliveryAmount": 3499.99, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "二七区", "ID": 1355, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171119002", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1514476800000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 8720.00, "OrderAmount": 0, "DealAmount": 3500.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 3500.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 151, "OrderStatusName": "备货完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.40, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 95, "DeliveryStatusName": "生成送货单", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1511071243083)\/", "CustomerName": "秦志刚", "Phone": "13137109975", "NoDeliveryAmount": 1182.74, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "中原区", "ID": 1353, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171119001", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1511193600000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 11710.00, "OrderAmount": 0, "DealAmount": 5000.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 5000.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 0.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 151, "OrderStatusName": "备货完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.43, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": 115, "DeliveryStatusName": "产品部分出库", "ExamineReturnReason": null, "OrderList": null },
    { "ZZID": "4100008001001", "SaveTime": "\/Date(1510995854400)\/", "CustomerName": "李丁", "Phone": "13503700265", "NoDeliveryAmount": 33959.95, "Profit": 0, "ProfitRate": 0, "Province": "河南省", "City": "郑州市", "Region": "金水区", "ID": 1351, "ZZName": "华兰家具欧凯龙西环店", "OrderID": "SAC001171118002", "OriginalID": null, "OriginalTime": null, "CustomID": 0, "Customer": null, "DeliveryType": 0, "DeliveryTypeName": null, "PlanDeliveryTime": "\/Date(1514390400000)\/", "OrderDoneTime": null, "CostAmount": 0, "SaleAmount": 80920.00, "OrderAmount": 0, "DealAmount": 33960.00, "MoLingAmount": 0, "DepositAmount": 0, "ReceivedAmonut": 4960.00, "BalanceAmount": 0, "ReturnGoodsAmount": null, "DeliveryAmount": null, "OrderBalanceAmount": 29000.00, "Memo": null, "MakeInvoice": false, "InvoiceTitle": null, "InvoiceStatus": 0, "CreateStaff": 0, "CreateStaffName": null, "OrderStatus": 151, "OrderStatusName": "备货完成", "ReturnStatus": null, "ExamineStatus": 85, "ExamineStatusName": "审核通过", "Discount": 0.42, "SaveUser": 0, "SubmitUser": null, "SubmitTime": null, "ExamineUser": null, "ExamineTime": null, "Image": null, "BussinessType": 109, "BusinessTypeName": "零售业务", "ShouKuanMode": 0, "DeliveryStatus": null, "DeliveryStatusName": null, "ExamineReturnReason": null, "OrderList": null }
]
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
