import Vue from 'vue'
import Router from 'vue-router'
//首页加载
import Index from '@/components/index'
//用户管理模块
import Personmange from '@/components/userMange/Personmange'
import Allmange from '@/components/userMange/Allmange'
//单车管理模块
import Reportquery from '@/components/BikeMange/Reportquery'
//财务管理模块
import Moneystatistics from '@/components/moneyMange/Moneystatistics'
import Exportdetial from '@/components/moneyMange/Exportdetial'
//权限管理
import Permismange from '@/components/Permismange/Permismange'
//电子围栏
import Electronicfence from '@/components/Electronicfence/Electronicfence'
Vue.use(Router)
let router = new Router({
    routes: [{
            path: '/',
            name: '用户管理',
            component: Index, //初始化位置左侧大框架
            redirect: '/Personmange', //右侧显示
            menuShow: true,
            children: [
                { path: 'Personmange', component: Personmange, name: '个人管理', menuShow: true },
                { path: 'Allmange', component: Allmange, name: '综合管理', menuShow: true }
            ]
        }, {
            path: '/',
            name: '单车管理',
            component: Index,
            redirect: '/Reportquery',
            menuShow: true,
            children: [
                { path: '/Reportquery', component: Reportquery, name: '上报查询', menuShow: true }
            ]
        },
        {
            path: '/',
            name: '财务管理',
            component: Index,
            redirect: '/Moneystatistics',
            menuShow: true,
            children: [
                { path: '/Moneystatistics', component: Moneystatistics, name: '财务统计', menuShow: true },
                { path: '/Exportdetial', component: Exportdetial, name: '明细导出', menuShow: true }
            ]
        },
        {
            path: '/',
            name: '权限管理',
            component: Index,
            redirect: '/Permismange',
            menuShow: true,
            children: [
                { path: '/Permismange', component: Permismange, name: '权限管理', menuShow: true }
            ]
        },
        {
            path: '/',
            name: '电子围栏',
            component: Index,
            redirect: '/Electronicfence',
            menuShow: true,
            children: [
                { path: '/Electronicfence', component: Electronicfence, name: '电子围栏', menuShow: true }
            ]
        }
    ]
})
export default router