<!--  -->
<template>
  <div>
    <a-tabs tabPosition='left' defaultActiveKey="1">
      <a-tab-pane tab="基本设置" key="1">
        <h2 style="marginBottom:12px">基本设置</h2>
        <baseSetting style="paddingTop:12px"/>
      </a-tab-pane>
      <a-tab-pane tab="安全设置" key="2">
        <h2 style="marginBottom:12px">安全设置</h2>
        <safeSetting />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import baseSetting from './baseSetting/baseSetting'
import safeSetting from './safeSetting/safeSetting'
export default {
  data () {
    return {
      
    };
  },
  components: {
    baseSetting,
    safeSetting
  },
  methods: {
    
  },
};
</script>
<style scoped>
  #user_content {
    display: flex
  }
</style>