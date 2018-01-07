import Login from 'pages/Login/Index'
import Regist from 'pages/Login/Regist'

import Query from 'pages/Query/Index'
import CostPriceQuery from 'pages/Query/CostPriceQuery'
import InventoryQuery from 'pages/Query/InventoryQuery'
import OrderQuery from 'pages/Query/OrderQuery'
import RetailPriceQuery from 'pages/Query/RetailPriceQuery'

import Stat from 'pages/Stat/Index'
import AchievementStat from 'pages/Stat/AchievementStat'
import AssetStat from 'pages/Stat/AssetStat'
import IncomeExpensesStat from 'pages/Stat/IncomeExpensesStat'
import InventoryDailyStat from 'pages/Stat/InventoryDailyStat'
import ProfitAccounting from 'pages/Stat/ProfitAccounting'
import UnFinishOrderStat from 'pages/Stat/UnFinishOrderStat'

import Delivery from 'pages/Delivery/Index'
import DeliveryReport from 'pages/Delivery/DeliveryReport'
import InstallPlan from 'pages/Delivery/InstallPlan'
import InstallReport from 'pages/Delivery/InstallReport'

import Mine from 'pages/Mine/Index'
import About from 'pages/Mine/About'
import ChangePassword from 'pages/Mine/ChangePassword'
import FindPassword from 'pages/Mine/FindPassword'
import Version from 'pages/Mine/Version'


const routes = [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Regist',
      component: Regist
    },
    {
      path: '/Query',
      component: Query
    },
    {
      path: '/CostPriceQuery',
      component: CostPriceQuery
    },
    {
      path: '/InventoryQuery',
      component: InventoryQuery
    },
    {
      path: '/OrderQuery',
      component: OrderQuery
    },
    {
      path: '/RetailPriceQuery',
      component: RetailPriceQuery
    },
    {
      path: '/Stat',
      component: Stat
    },
    {
      path: '/AchievementStat',
      component: AchievementStat
    },
    {
      path: '/AssetStat',
      component: AssetStat
    },
    {
      path: '/IncomeExpensesStat',
      component: IncomeExpensesStat
    },
    {
      path: '/InventoryDailyStat',
      component: InventoryDailyStat
    },
    {
      path: '/ProfitAccounting',
      component: ProfitAccounting
    },
    {
      path: '/UnFinishOrderStat',
      component: UnFinishOrderStat
    },
    {
      path: '/Delivery',
      component: Delivery
    },
    {
      path: '/DeliveryReport',
      component: DeliveryReport
    },
    {
      path: '/InstallPlan',
      component: InstallPlan
    },
    {
      path: '/InstallReport',
      component: InstallReport
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/ChangePassword',
      component: ChangePassword
    },
    {
      path: '/FindPassword',
      component: FindPassword
    },
    {
      path: '/Version',
      component: Version
    }
  ]

export default routes
