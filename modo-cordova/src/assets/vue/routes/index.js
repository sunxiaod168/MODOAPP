import Login from 'pages/Login/Index'
import Tabs from 'pages/Tabs'

import Query from 'pages/Query/Index'
import CostPriceQuery from 'pages/Query/CostPriceQuery'
import InventoryQuery from 'pages/Query/InventoryQuery'
import OrderProgressQuery from 'pages/Query/OrderProgressQuery'
import RetailPriceQuery from 'pages/Query/RetailPriceQuery'

import Stat from 'pages/Stat/Index'
import OrderStat from 'pages/Stat/OrderStat'
import AssetStat from 'pages/Stat/AssetStat'
import IncomeExpensesStat from 'pages/Stat/IncomeExpensesStat'
import InventoryStat from 'pages/Stat/InventoryStat'
import ProfitAccounting from 'pages/Stat/ProfitAccounting'
import UnfinishedOrderStat from 'pages/Stat/UnfinishedOrderStat'

import Delivery from 'pages/Delivery/Index'
import DeliveryReport from 'pages/Delivery/DeliveryReport'
import DeliveryInstallPlan from 'pages/Delivery/DeliveryInstallPlan'
import InstallReport from 'pages/Delivery/InstallReport'

import Mine from 'pages/Mine/Index'
import Profile from 'pages/Mine/Profile'
import About from 'pages/Mine/About'
import ChangePassword from 'pages/Mine/ChangePassword'
import FindPassword from 'pages/Mine/FindPassword'
import Version from 'pages/Mine/Version'

const routes = [
	{
		path: '/login',
		component: Login
	},	
	{
		path: '/tabbar/',
		component: Tabs,
		tabs: [
			{
				path: '/',
				tabId: 'tab1',
				component: Query
			},
			{
				path: '/tab2/',
				tabId: 'tab2',
				component: Stat
			},
			{
				path: '/tab3/',
				tabId: 'tab3',
				component: Delivery
			},       
			{
				path: '/tab4/',
				tabId: 'tab4',
				component: Mine
			}        
		]
	},    
	{
		path: '/cost-price-query',
		component: CostPriceQuery
	},
	{
		path: '/inventory-query',
		component: InventoryQuery
	},
	{
		path: '/order-progress-query',
		component: OrderProgressQuery
	},
	{
		path: '/retail-price-query',
		component: RetailPriceQuery
	},
	{
		path: '/order-stat',
		component: OrderStat
	},
	{
		path: '/asset-stat',
		component: AssetStat
	},
	{
		path: '/income-expenses-stat',
		component: IncomeExpensesStat
	},
	{
		path: '/inventory-stat',
		component: InventoryStat
	},
	{
		path: '/profit-accounting',
		component: ProfitAccounting
	},
	{
		path: '/unfinished-order-stat',
		component: UnfinishedOrderStat
	},
	{
		path: '/delivery-report',
		component: DeliveryReport
	},
	{
		path: '/delivery-install-plan',
		component: DeliveryInstallPlan
	},
	{
		path: '/install-report',
		component: InstallReport
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/change-password',
		component: ChangePassword
	},
	{
		path: '/find-password',
		component: FindPassword
	},
	{
		path: '/version',
		component: Version
	}
]

export default routes
