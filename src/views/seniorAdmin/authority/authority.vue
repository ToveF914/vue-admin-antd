<!--  -->
<template>
  <div>
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
    reporter,
    admin,
    guard
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>