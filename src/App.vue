<template>
  <div id="app">
    <router-view v-if="$route.path === '/login' || $route.path === '/register'"/>
    <Layout v-if=" $route.path !== '/login' && $route.path !== '/register'"/>  
  </div>
</template>
<script>
import Layout from './components/Layout'
export default {
  data(){
    return{}
  },
  created(){
    this.$store.commit('getRole',sessionStorage.getItem('role'))
    let loading = document.getElementById('loading')
    if(loading != null) {
      document.body.removeChild(loading)
    }
  },
  components: { Layout }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
