
export default {    
	STATUS_SUCCESS: 1,
	STATUS_FAILD: 0,

	NAV_TITLE_DEFAULT: '墨斗云',
	NAV_TITLE_QUERY: '查询',
	NAV_TITLE_STAT: '统计分析',
	NAV_TITLE_DELIVERY: '配送进度',
	NAV_TITLE_MINE: '我的',

	VERSION: '1.0.0',
	VERSION_CODE: 100,
	VERSION_DATE: '2018-2-1'
}

export const Permissions = {

	QUERY_RETAIL_PRICE: 100,
	QUERY_COST_PRICE: 110,
	QUERY_INVENTORY: 120,
	QUERY_ORDER_PROGRESS: 130,

	STAT_ASSET: 140,
	STAT_PROFIT_ACCOUNTING: 150,
	STAT_ORDER: 160,
	STAT_ACHIEVEMENT:170,
	STAT_INVENTORY: 180,
	STAT_INCOME_EXPENSES: 190,

	DELIVERY_INSTALL_PLAN: 200,
	DELIVERY_DELIVERY_REPORT: 210,	
	DELIVERY_INSTALL_REPORT: 220,

	MINE_PROFILE: 230,
	MINE_CHANGE_PASSWORD: 240,
	MINE_ABOUT: 250,	
	MINE_VERSION: 260
}
 

export const PermissionMap = [
	{ id: 1, key: Permissions.QUERY_RETAIL_PRICE },
	{ id: 2, key: Permissions.QUERY_COST_PRICE },
	{ id: 3, key: Permissions.QUERY_INVENTORY },
	{ id: 4, key: Permissions.QUERY_ORDER_PROGRESS },

	{ id: 5, key: Permissions.STAT_ASSET },
	{ id: 6, key: Permissions.STAT_PROFIT_ACCOUNTING },
	{ id: 7, key: Permissions.STAT_ORDER },
	{ id: 8, key: Permissions.STAT_ACHIEVEMENT },
	{ id: 9, key: Permissions.STAT_INVENTORY },
	{ id: 10, key: Permissions.STAT_INCOME_EXPENSES },

	{ id: 11, key: Permissions.DELIVERY_INSTALL_PLAN },
	{ id: 12, key: Permissions.DELIVERY_DELIVERY_REPORT },
	{ id: 13, key: Permissions.DELIVERY_INSTALL_REPORT },

	{ id: 14, key: Permissions.MINE_PROFILE },
	{ id: 15, key: Permissions.MINE_CHANGE_PASSWORD },
	{ id: 16, key: Permissions.MINE_ABOUT },
	{ id: 18, key: Permissions.MINE_VERSION }
]

export const MonthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
export const DayNames =['日','一','二','三','四','五','六']





