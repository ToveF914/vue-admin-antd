<!--  -->
<template>
  <div>
    <div id="list_content">
      <a-tabs defaultActiveKey="1" tabPosition='left'>
        <a-tab-pane tab="录入员" key="1">
          <reporter />
        </a-tab-pane>
        <a-tab-pane tab="管理层" key="2">
          <admin />
        </a-tab-pane>
        <a-tab-pane tab="门卫" key="3">
          <guard />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import reporter from './reporter/reporter'
import admin from './admin/admin'
import guard from './guard/guard'
export default {
  data () {
    return {
    };
  },

  components: {
    reporter, guard, admin
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
  #list_content {
    padding-top: 24px;
    background: #fff;
    margin-top: 14px;
    border-top: 1px solid #e8e8e8
  }
</style>