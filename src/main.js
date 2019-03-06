import Vue from 'vue'
import { Layout, Menu, Tooltip, Icon, Card, Dropdown, Divider, Modal, Switch, Button, Avatar, Badge, Breadcrumb, Tabs, Form, Input, Row, Col, List, Table, Pagination, Select, Checkbox, DatePicker, Upload, Popconfirm } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JsonExcel from 'vue-json-excel'
import axios from 'axios'

/**
 * 按需引入组件
 */
Vue.component('downloadExcel', JsonExcel)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Dropdown)
Vue.use(Tabs)
Vue.use(Form)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)
Vue.use(List)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Divider)
Vue.use(Modal)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(Popconfirm)
Vue.use(Tooltip)

/**
 * 全局路由守卫
 */
router.beforeEach((to, from, next) => {
  if( !to.meta.requireAuth){
    next()
  }else {
    if(sessionStorage.getItem('role') !== '' && sessionStorage.getItem('role') !== undefined && sessionStorage.getItem('role') !== null){
      next()
    }else {
      next({path: '/login'})
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
