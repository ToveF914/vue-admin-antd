<!--  -->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :theme="theme" 
    >
      <div class="logo">
        <!-- <span style="color:white;fontSize:26px">天原集团</span> -->
      </div>
      <a-menu 
        :theme="theme" 
        mode="inline" 
        :defaultSelectedKeys="defaultSelectedKeys"
        class="menu"
      >
        <a-menu-item v-for="item in menuOptions" :key="item.key">
          <router-link :to="'/'+item.key">
            <a-icon :type="item.icon" />
            <span>{{item.name}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
      <div class="themeSwitch">
        <span class="themeSwitch_span"><a-icon type="bulb" />  选择主题</span>
        <a-switch 
          @change="changeTheme" 
          :defaultChecked="true" 
          checkedChildren="暗" 
          unCheckedChildren="亮"
        ></a-switch>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;display:flex;justify-content:space-between">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div id="index_header_right">
          <a-tooltip placement="bottom" >
            <template slot="title">
              <span>搜索</span>
            </template>
            <span class="index_header_right_action">
              <a-icon type="search" style="fontSize:16px"/>
            </span>
          </a-tooltip>
          <a-tooltip placement="bottom" >
            <template slot="title">
              <span>帮助</span>
            </template>
            <span class="index_header_right_action">
              <a-icon type="question-circle" style="fontSize:16px"/>
            </span>
          </a-tooltip>
          <a-tooltip placement="bottom" >
            <template slot="title">
              <span>通知</span>
            </template>
            <span class="index_header_right_action">
              <a-badge>
                <a-icon type="bell" style="fontSize:16px"/>
              </a-badge>
            </span>
          </a-tooltip>
          <a-dropdown placement="bottomRight">
            <span class="index_header_right_action">
              <span class="user-avatar">
                <a-icon type="user" style="fontSize:16px"/>
              </span>
              <span style="margin-left: 6px;fontSize:16px">
                {{nickName}}
              </span>
            </span>
            <a-menu slot="overlay">
              <!-- <a-menu-item>
                <a @click="nvatoUser"><a-icon type="user" /><span style="marginLeft:10px">个人中心</span></a>
              </a-menu-item> -->
              <a-menu-item>
                <a @click="logout"><a-icon type="logout" /><span style="marginLeft:10px">退出登录</span></a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', minWidth: '600px', overflow: 'auto' }">
        <div :style="{ height: '21px', marginBottom: '16px'}">
          <a-breadcrumb 
            style="float:left"
            :routes="routes"
          >
            <template slot="itemRender" slot-scope="{route, params, routes, paths}">
              <span v-if="routes.indexOf(route) === routes.length - 1">
                {{route.breadcrumbName}}
              </span>
              <router-link v-else :to="`/${paths.join('/')}`">
                {{route.breadcrumbName}}
              </router-link>
            </template>
          </a-breadcrumb>
        </div>
        <div>
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        天原集团危化品车辆管理系统 ©2019 Created by caitao914@foxmail.com
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
let gusetMenus = [
  { key: 'transpotArrange', name: '运输安排', icon: 'home' },
  { key: 'qualificateUpdate', name: '资质修改', icon: 'edit' },
  { key: 'qualificateTrack', name: '资质回溯', icon: 'reload' },
  { key: 'history', name: '入厂记录', icon: 'search' },
  { key: 'user', name: '个人中心', icon: 'user' }
]
let sadminMenus = [
  { key: 'seniorAdmin', name: '用户权限管理', icon: 'usergroup-add' },
  { key: 'dataBackup', name: '数据备份', icon: 'database' },
  { key: 'logs', name: '用户日志', icon: 'file-text' },
  { key: 'sysSetting', name: '系统设置', icon: 'setting' }
]
let adminMenus = [
  { key: 'adminReport', name: '首页报表', icon: 'pie-chart' },
  { key: 'adminList', name: '列表查看', icon: 'bars' }
]
let guardMenus = [
  { key: 'guard', name: '列表查看', icon: 'bars' }
]
export default {
  data () {
    const { lang } = ''
    return {
      theme:'dark',
      layoutTheme:'',
      collapsed: false,
      nickName: '',
      defaultSelectedKeys: [],
      menuOptions: [],
      basePath: '',
      routes: [{
        path: 'transpotArrange',
        breadcrumbName: '首页'
      },{
        path: '',
        breadcrumbName: ''
      }]
    };
  },
  
  created(){
    let role = sessionStorage.getItem('role');
    this.$store.commit('getRole',role);
    this.nickName = role;
    switch(role){
      case 'guest': 
        this.menuOptions = gusetMenus;
        this.routes = [{
          path: 'transpotArrange',
          breadcrumbName: '首页'
        },{
          path: '',
          breadcrumbName: '运输安排'
        }]
        this.defaultSelectedKeys = ['transpotArrange']
      break;
      case 'sadmin': 
        this.menuOptions = sadminMenus;
        this.routes = [{
          path: 'seniorAdmin',
          breadcrumbName: '首页'
        },{
          path: '',
          breadcrumbName: '用户权限管理'
        }]
        this.defaultSelectedKeys = ['seniorAdmin']
      break;
      case 'admin': 
        this.menuOptions = adminMenus;
        this.routes = [{
          path: 'adminReport',
          breadcrumbName: '首页'
        },{
          path: '',
          breadcrumbName: '首页报表'
        }]
        this.defaultSelectedKeys = ['adminReport']
        break;
      case 'guard': 
        this.menuOptions = guardMenus;
        this.routes = [{
          path: 'guard',
          breadcrumbName: '首页'
        },{
          path: '',
          breadcrumbName: '列表查看'
        }]
        this.defaultSelectedKeys = ['guard']
      break;
    }
  },

  mounted(){
    
  },

  components: {},

  computed: {},

  methods: {
    changeTheme(checked){
      this.theme = !checked ? 'light' : 'dark';
    },
    logout(){
      this.$router.push({ path: '/login' })
    }
  },
  watch:{
    $route(to,from){
      this.routes[1].breadcrumbName = to.name;
      sessionStorage.setItem('currentPath',to.path);
    }
  },
}

</script>
<style>
  #components-layout-demo-custom-trigger {
    min-height: 100vh;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  #index_header_right {
    
  }
  .index_header_right_action {
    display: inline-block;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all .3s;
  }
  .user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 4px;
    background: #ccc;
    color:#fff;
    text-align: center;
  }
  .index_header_right_action:hover {
    background: rgba(0, 0, 0, 0.025)
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  .menu {
    height: calc(100% - 112px)
  }
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
  .themeSwitch{
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 16px;
    overflow: hidden;
    transition: all .3s;
    color: #666;
  }
  .themeSwitch_span {
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
  }
</style>