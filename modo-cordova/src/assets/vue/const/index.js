
export default {    
	STATUS_SUCCESS: 1,
	STATUS_FAILD: 0,

	NAV_TITLE_DEFAULT: '墨斗云',
	NAV_TITLE_QUERY: '查询',
	NAV_TITLE_STAT: '统计分析',
	NAV_TITLE_DELIVERY: '配送进度',
	NAV_TITLE_MINE: '我的'
}

export const Permissions = {

	QUERY_RETAIL_PRICE: 100,
	QUERY_COST_PRICE: 110,
	QUERY_INVENTORY: 120,
	QUERY_ORDER_PROGRESS: 130,

	STAT_ASSET: 140,
	STAT_ACHIEVEMENT: 150,
	STAT_INCOME_EXPENSES: 160,
	STAT_INVENTORY: 170,
	STAT_PROFIT_ACCOUNTING: 180,
	STAT_UNFINISH_ORDER: 190,

	DELIVERY_DELIVERY_REPORT: 200,
	DELIVERY_INSTALL_PLAN: 210,
	DELIVERY_INSTALL_REPORT: 220,

	MINE_ABOUT: 230,
	MINE_CHANGE_PASSWORD: 240,
	MINE_FIND_PASSWORD: 250,
	MINE_PROFILE: 260,
	MINE_VERSION: 270
}
 

export const PermissionMap = [
	{ id: 1, key: Permissions.QUERY_RETAIL_PRICE },
	{ id: 2, key: Permissions.QUERY_COST_PRICE },
	{ id: 3, key: Permissions.QUERY_INVENTORY },
	{ id: 4, key: Permissions.QUERY_ORDER_PROGRESS },

	{ id: 5, key: Permissions.STAT_ASSET },
	{ id: 6, key: Permissions.STAT_ACHIEVEMENT },
	{ id: 7, key: Permissions.STAT_INCOME_EXPENSES },
	{ id: 8, key: Permissions.STAT_INVENTORY },
	{ id: 9, key: Permissions.STAT_PROFIT_ACCOUNTING },
	{ id: 10, key: Permissions.STAT_UNFINISH_ORDER },

	{ id: 11, key: Permissions.DELIVERY_DELIVERY_REPORT },
	{ id: 12, key: Permissions.DELIVERY_INSTALL_PLAN },
	{ id: 13, key: Permissions.DELIVERY_INSTALL_REPORT },

	{ id: 14, key: Permissions.MINE_ABOUT },
	{ id: 15, key: Permissions.MINE_CHANGE_PASSWORD },
	{ id: 16, key: Permissions.MINE_FIND_PASSWORD },
	{ id: 17, key: Permissions.MINE_PROFILE },
	{ id: 18, key: Permissions.MINE_VERSION }
]




