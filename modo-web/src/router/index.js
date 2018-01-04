import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login/Index'
import Regist from '@/views/Login/Regist'

import Query from '@/views/Query/Index'
import CostPriceQuery from '@/views/Query/CostPriceQuery'
import InventoryQuery from '@/views/Query/InventoryQuery'
import OrderQuery from '@/views/Query/OrderQuery'
import RetailPriceQuery from '@/views/Query/RetailPriceQuery'

import Stat from '@/views/Stat/Index'
import AchievementStat from '@/views/Stat/AchievementStat'
import AssetStat from '@/views/Stat/AssetStat'
import IncomeExpensesStat from '@/views/Stat/IncomeExpensesStat'
import InventoryDailyStat from '@/views/Stat/InventoryDailyStat'
import ProfitAccounting from '@/views/Stat/ProfitAccounting'
import UnFinishOrderStat from '@/views/Stat/UnFinishOrderStat'

import Delivery from '@/views/Delivery/Index'
import DeliveryReport from '@/views/Delivery/DeliveryReport'
import InstallPlan from '@/views/Delivery/InstallPlan'
import InstallReport from '@/views/Delivery/InstallReport'

import Mine from '@/views/Mine/Index'
import About from '@/views/Mine/About'
import ChangePassword from '@/views/Mine/ChangePassword'
import FindPassword from '@/views/Mine/FindPassword'
import Version from '@/views/Mine/Version'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Query',
      name: 'Query',
      component: Query
    },
    {
      path:'/CostPriceQuery',
      name:'CostPriceQuery',
      component:CostPriceQuery
    },
    {
      path:'/InventoryQuery',
      name:'InventoryQuery',
      component:InventoryQuery
    },
    {
      path:'/OrderQuery',
      name:'OrderQuery',
      component:OrderQuery
    },
    {
      path:'/RetailPriceQuery',
      name:'RetailPriceQuery',
      component:RetailPriceQuery
    },
    {
      path:'/Stat',
      name:'Stat',
      component:Stat
    },
    {
      path:'/AchievementStat',
      name:'AchievementStat',
      component:AchievementStat
    },
    {
      path:'/AssetStat',
      name:'AssetStat',
      component:AssetStat
    },
    {
      path:'/IncomeExpensesStat',
      name:'IncomeExpensesStat',
      component:IncomeExpensesStat
    },
    {
      path:'/InventoryDailyStat',
      name:'InventoryDailyStat',
      component:InventoryDailyStat
    },
    {
      path:'/ProfitAccounting',
      name:'ProfitAccounting',
      component:ProfitAccounting
    },
    {
      path:'/UnFinishOrderStat',
      name:'UnFinishOrderStat',
      component:UnFinishOrderStat
    },
    {
      path:'/Delivery',
      name:'Delivery',
      component:Delivery
    },
    {
      path:'/DeliveryReport',
      name:'DeliveryReport',
      component:DeliveryReport
    },
    {
      path:'/InstallPlan',
      name:'InstallPlan',
      component:InstallPlan
    },
    {
      path:'/InstallReport',
      name:'InstallReport',
      component:InstallReport
    },
    {
      path:'/Mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/ChangePassword',
      name:'ChangePassword',
      component:ChangePassword
    },
    {
      path:'/FindPassword',
      name:'FindPassword',
      component:FindPassword
    },
    {
      path:'/Version',
      name:'Version',
      component:Version
    } 
  ]
})
