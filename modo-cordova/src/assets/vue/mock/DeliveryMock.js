import Mock from 'mockjs'
import CONST from 'const'

Mock.mock('/api/delivery/list',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: listData
        }
    })

Mock.mock('/api/delivery/detail',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: detailData
        }
    })


Mock.mock('/api/delivery/deliveryInstallPlan',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: null
        }
    })

Mock.mock('/api/delivery/deliveryDispatchList',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: dispatchListData
        }
    })

Mock.mock('/api/delivery/installDispatchList',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: dispatchListData
        }
    })

Mock.mock('/api/delivery/deliveryReport',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '成功',
            data: null
        }
    })

Mock.mock('/api/delivery/installReport',
    'post',
    function (options) {
        var params = JSON.parse(options.body)
        return {
            status: CONST.STATUS_SUCCESS,
            msg: '查询成功',
            data: null
        }
    })

var listData = [
    {
        "ID": 1181,
        "DeliveryHeaderID": "DE410000817120703",
        "ZZID": "4100008001002",
        "ZZName": "华兰家具欧凯龙北环店",
        "CustomerID": 1174,
        "Customer": {
            "Name": "王利杰",
            "Phone": "18838918960"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 3000.00,
        "DeliveryDispatch": {
            "ID": 1,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": "\/Date(1512652250313)\/",
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(1512652250313)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": [1, 2],
            "DeliveryStaffsName": "洪金彪,王鹏",
        },
        "InstallDispatch": {
            "ID": 1,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": "\/Date(1512652250313)\/",
            "PlanFinishDate": "\/Date(1512652250313)\/",
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": 1,
            "LeaderName": "洪金彪",
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": [1, 2],
            "InstallStaffsName": "洪金彪,王鹏",
        }


    },
    {
        "ID": 1180,
        "DeliveryHeaderID": "DE410000817120702",
        "ZZID": "4100008001001",
        "ZZName": "华兰家具欧凯龙西环店",
        "CustomerID": 1176,
        "Customer": {
            "Name": "耿建英",
            "Phone": "13949102850"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 3499.98,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1179,
        "DeliveryHeaderID": "DE410000817120701",
        "ZZID": "4100008001003",
        "ZZName": "长实简艺",
        "CustomerID": 122,
        "Customer": {
            "Name": "葛林",
            "Phone": "15639727991"
        },
        "ZongBaoShu": 6.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 16500.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1178,
        "DeliveryHeaderID": "DE410000817120301",
        "ZZID": "4100008001002",
        "ZZName": "华兰家具欧凯龙北环店",
        "CustomerID": 131,
        "Customer": {
            "Name": "任豫珑",
            "Phone": "18939577260"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 260.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1177,
        "DeliveryHeaderID": "DE410000817120204",
        "ZZID": "4100008001003",
        "ZZName": "长实简艺",
        "CustomerID": 1220,
        "Customer": {
            "Name": "孟萌",
            "Phone": "15093205776"
        },
        "ZongBaoShu": 4.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 14084.18,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1176,
        "DeliveryHeaderID": "DE410000817120203",
        "ZZID": "4100008001003",
        "ZZName": "长实简艺",
        "CustomerID": 1220,
        "Customer": {
            "Name": "孟萌",
            "Phone": "15093205776"
        },
        "ZongBaoShu": 2.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 11465.19,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1175,
        "DeliveryHeaderID": "DE410000817120202",
        "ZZID": "4100008001003",
        "ZZName": "长实简艺",
        "CustomerID": 119,
        "Customer": {
            "Name": "董莉丹",
            "Phone": "15515995786"
        },
        "ZongBaoShu": 4.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 16556.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1174,
        "DeliveryHeaderID": "DE410000817120201",
        "ZZID": "4100008001002",
        "ZZName": "华兰家具欧凯龙北环店",
        "CustomerID": 113,
        "Customer": {
            "Name": "王松德",
            "Phone": "15638108199"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 32009.99,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1173,
        "DeliveryHeaderID": "DE410000817113002",
        "ZZID": "4100008001002",
        "ZZName": "华兰家具欧凯龙北环店",
        "CustomerID": 131,
        "Customer": {
            "Name": "任豫珑",
            "Phone": "18939577260"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 10660.73,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1172,
        "DeliveryHeaderID": "DE410000817113001",
        "ZZID": "4100008001001",
        "ZZName": "华兰家具欧凯龙西环店",
        "CustomerID": 1168,
        "Customer": {
            "Name": "任女士",
            "Phone": "13903854068"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 47320.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1171,
        "DeliveryHeaderID": "DE410000817112802",
        "ZZID": "4100008001001",
        "ZZName": "华兰家具欧凯龙西环店",
        "CustomerID": 1218,
        "Customer": {
            "Name": "李思菡",
            "Phone": "15037182599"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 520.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1170,
        "DeliveryHeaderID": "DE410000817112801",
        "ZZID": "4100008001002",
        "ZZName": "华兰家具欧凯龙北环店",
        "CustomerID": 1217,
        "Customer": {
            "Name": "刘志杰",
            "Phone": "18937156257"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 3999.98,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1169,
        "DeliveryHeaderID": "DE410000817112703",
        "ZZID": "4100008001001",
        "ZZName": "华兰家具欧凯龙西环店",
        "CustomerID": 1157,
        "Customer": {
            "Name": "王璇",
            "Phone": "15290893205"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 3499.99,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }

    },
    {
        "ID": 1168,
        "DeliveryHeaderID": "DE410000817112702",
        "ZZID": "4100008001001",
        "ZZName": "华兰家具欧凯龙西环店",
        "CustomerID": 1216,
        "Customer": {
            "Name": "谢春英",
            "Phone": "13783619268"
        },
        "ZongBaoShu": 0.00,
        "ZongTiJi": 0.00,
        "SongHuoDanJinE": 1800.00,
        "DeliveryDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "DeliveryDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "DeliveryStaffs": null
        },
        "InstallDispatch": {
            "ID": 0,
            "ZZID": null,
            "DeliveryID": 0,
            "PlanInstallDate": null,
            "PlanFinishDate": null,
            "InstallDate": null,
            "FinishDate": null,
            "IsFinished": false,
            "Leader": null,
            "LeaderName": null,
            "CreateTime": "\/Date(-62135596800000)\/",
            "CreateStaff": 0,
            "Memo": null,
            "Reporter": null,
            "ReportName": null,
            "ReportTime": null,
            "ReportContent": null,
            "DispatchList": null,
            "InstallStaffs": null
        }
    }
]

var detailData = {
    "ZZID": "4100008001002",
    "CreateTime": "\/Date(1512652217263)\/",
    "Quantity": 2,
    "CustomerName": "王利杰",
    "CustomerPhone": "18838918960",    
    "ID": 1181,
    "DeliveryHeaderID": "DE410000817120703",
    "ZZName": "华兰家具欧凯龙北环店",
    "CustomerID": 0,
    "Customer": null,
    "ZongBaoShu": 0.00,
    "ZongTiJi": 0.00,
    "SongHuoDanJinE": 3000.00,
    "BeiZhu": null,
    "Status": 85,
    "StatusName": "审核通过",
    "CreateUser": 23,
    "CreateUserName": null,
    "SubmitUser": null,
    "SubmitUserName": null,
    "SubmitTime": null,
    "ExamineUser": 23,
    "ExmaineUserName": null,
    "ExamineTime": "\/Date(1512652250313)\/",
    "List": null,
    "OrderID": 0,
    "OrderCode": "SAC002171027018",
    "DetailList": [
        {
            "ID": 1593,
            "HeaderID": 0,
            "OrderListID": 3060,
            "LeftAmount": 0,
            "DeliveryAmount": 1,
            "Amount": 2055.00,
            "StorageID": "4100008001004",
            "Storage": {
                "Name": "郑州西四环仓库",
                "ID": "4100008001004"
            },
            "Memo": null,
            "Product": {
                "ID": 0,
                "Name": "中式 01餐边柜",
                "ProductCode": "H01[CBG]",
                "BrandName": "华兰",
                "CatenaName": "中式",
                "SortName": "餐边柜",
                "XingHao": "01",
                "GuiGe": "1300*420*1000",
                "ColorName": "柚金色",
                "AuxColor": "",
                "DealPrice": 2055.00
            },
            "BaoShu": 0,
            "TiJi": 0.00
        },
        {
            "ID": 1594,
            "HeaderID": 0,
            "OrderListID": 3061,
            "LeftAmount": 0,
            "DeliveryAmount": 1,
            "Amount": 945.00,
            "StorageID": "4100008001004",
            "Storage": {
                "Name": "郑州西四环仓库",
                "ID": "4100008001004"
            },
            "Memo": null,
            "Product": {
                "ID": 0,
                "Name": "中式 25客厅柜低",
                "ProductCode": "H25[KTGD]",
                "BrandName": "华兰",
                "CatenaName": "中式",
                "SortName": "客厅柜",
                "XingHao": "25",
                "GuiGe": "701*450*900",
                "ColorName": "柚金色",
                "AuxColor": "",
                "DealPrice": 945.00
            },
            "BaoShu": 0,
            "TiJi": 0.00
        }
    ]
}

var dispatchListData = [
    {
        "ZZName": "华兰家具欧凯龙西环店",
        "OrderCode": "SAC001171028006",
        "OrderFinished": true,
        "DeliveryHeaderID": "DE410000817112402",
        "CustomerName": "王杰",
        "CustomerPhone": "15290893205",
        "DeliveryDispatchID": 19,
        "DeliveryID": 1162,
        "DeliveryDate": "\/Date(1511511185440)\/",
        "DeliveryFinishDate": "\/Date(1511511185440)\/",
        "DeliveryIsFinished": true,
        "DeliveryMemo": null,
        "DeliveryStaffList": [1, 2],
        "DeliveryStaffs": "洪金彪,王鹏",
        "InstallDispatchID": 19,
        "PlanInstallDate": "\/Date(1511511185440)\/",
        "PlanInstallFinishDate": "\/Date(1511511185440)\/",
        "InstallDate": "\/Date(1511511185440)\/",
        "InstallFinishDate": "\/Date(1511511185440)\/",
        "InstallIsFinished": true,
        "Leader": 1,
        "LeaderName": "洪金彪",
        "InstallMemo": null,
        "InstallStaffList": [1, 2],
        "InstallStaffs": "洪金彪,王鹏",
        "DeliveryReporter": "杨静",
        "DeliveryReportTime": "\/Date(1511511185440)\/",
        "DeliveryReportContent": null,
        "InstallReporter": "杨静",
        "InstallReportTime": "\/Date(1511511185440)\/",
        "InstallReportContent": null,
        "DeliveryHours": null,
        "InstallHours": null,
        "SongHuoDanJinE": 3000.00,
    },
    {
        "ZZName": "华兰家具欧凯龙西环店",
        "OrderCode": "SAC001171028007",
        "OrderFinished": false,
        "DeliveryHeaderID": "DE410000817112401",
        "CustomerName": "王璇",
        "CustomerPhone": "15290893205",
        "DeliveryDispatchID": 18,
        "DeliveryID": 1161,
        "DeliveryDate": "\/Date(1511511181053)\/",
        "DeliveryFinishDate": null,
        "DeliveryIsFinished": false,
        "DeliveryMemo": null,
        "DeliveryStaffList": [1, 2],
        "DeliveryStaffs": "洪金彪,王鹏",
        "InstallDispatchID": 18,
        "PlanInstallDate": "\/Date(1511511181053)\/",
        "PlanInstallFinishDate": "\/Date(1511511181053)\/",
        "InstallDate": null,
        "InstallFinishDate": null,
        "InstallIsFinished": false,
        "Leader": 1,
        "LeaderName": "洪金彪",
        "InstallMemo": null,
        "InstallStaffList": [1, 2],
        "InstallStaffs": "洪金彪,王鹏",
        "DeliveryReporter": null,
        "DeliveryReportTime": null,
        "DeliveryReportContent": null,
        "InstallReporter": null,
        "InstallReportTime": null,
        "InstallReportContent": null,
        "DeliveryHours": null,
        "InstallHours": null,
        "SongHuoDanJinE": 3000.00,
    }
]