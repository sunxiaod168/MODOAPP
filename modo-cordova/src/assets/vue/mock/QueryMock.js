import Mock from 'mockjs'
// import Cookie from 'js-cookie'
import CONST from 'const'


Mock.mock('/api/query/retailPrice', 'post', function (options) {
    var params = JSON.parse(options.body)

    var list = data;
    if(params.keywords != null){
        list = [];
    }
    return {
        status: CONST.STATUS_SUCCESS,
        msg: '查询成功',
        data: list
    }

})

var data = [
    { 'ZZName': '河南旭虹家具公司', 'ID': 223, 'Name': '中式 01床头柜', 'ProductCode': 'H01[CTG]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头柜', 'XingHao': '01', 'GuiGe': '460*430*550', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 360.00, 'WholesalePrice': null, 'RetailPrice': 1470.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 224, 'Name': '中式 08床头柜', 'ProductCode': 'H08[CTG]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头柜', 'XingHao': '08', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 350.00, 'WholesalePrice': null, 'RetailPrice': 1430.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 225, 'Name': '中式 20床头柜', 'ProductCode': 'H20[CTG]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头柜', 'XingHao': '20', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 380.00, 'WholesalePrice': null, 'RetailPrice': 1640.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 226, 'Name': '中式 36床头柜', 'ProductCode': 'H36[CTG]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头柜', 'XingHao': '36', 'GuiGe': '510*400*460', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 380.00, 'WholesalePrice': null, 'RetailPrice': 1640.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 227, 'Name': '中式 01-3床头(120CM）', 'ProductCode': 'H01-3[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '01-3', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 660.00, 'WholesalePrice': null, 'RetailPrice': 2810.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 228, 'Name': '中式 08-1床头(180CM)', 'ProductCode': 'H08-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '08-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 980.00, 'WholesalePrice': null, 'RetailPrice': 4120.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 229, 'Name': '中式 08-2床头(150CM)', 'ProductCode': 'H08-2[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '08-2', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 850.00, 'WholesalePrice': null, 'RetailPrice': 3570.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 230, 'Name': '中式 16-1床头(180CM)', 'ProductCode': 'H16-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '16-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 1040.00, 'WholesalePrice': null, 'RetailPrice': 4370.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 231, 'Name': '中式 16-2床头(150CM)', 'ProductCode': 'H16-2[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '16-2', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 930.00, 'WholesalePrice': null, 'RetailPrice': 3910.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 232, 'Name': '中式 18-1床头(180CM)', 'ProductCode': 'H18-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '18-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 1400.00, 'WholesalePrice': null, 'RetailPrice': 5880.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 233, 'Name': '中式 24-1床头(180CM)', 'ProductCode': 'H24-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '24-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 950.00, 'WholesalePrice': null, 'RetailPrice': 3990.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 234, 'Name': '中式 24-2床头(150CM)', 'ProductCode': 'H24-2[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '24-2', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 800.00, 'WholesalePrice': null, 'RetailPrice': 3360.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 235, 'Name': '中式 34-1床头(180CM)', 'ProductCode': 'H34-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '34-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 1390.00, 'WholesalePrice': null, 'RetailPrice': 5840.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 236, 'Name': '中式 40-1床头(180CM)', 'ProductCode': 'H40-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '40-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 1350.00, 'WholesalePrice': null, 'RetailPrice': 5670.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
    { 'ZZName': '河南旭虹家具公司', 'ID': 237, 'Name': '中式 41-1床头(180CM)', 'ProductCode': 'H41-1[CT]', 'BrandID': 0, 'BrandName': '华兰', 'CatenaName': '中式', 'SortName': '床头', 'XingHao': '41-1', 'GuiGe': '', 'ZhuCaiName': '水曲柳', 'FuCaiName': null, 'ColorName': null, 'JiLiangDanWei': '件', 'CostPrice': 1590.00, 'WholesalePrice': null, 'RetailPrice': 6680.00, 'BatchID': '省会城市价格[V4100008001]', 'EnableColorAuxiliaryColor': false, 'EnableSofa': false },
   ]
