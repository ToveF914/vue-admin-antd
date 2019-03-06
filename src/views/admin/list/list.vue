<!--  -->
<template>
  <div>
    <div id="list_content">
      <a-tabs defaultActiveKey="1" tabPosition='left'>
        <a-tab-pane tab="未入厂" key="1">
          <unEnter />
        </a-tab-pane>
        <a-tab-pane tab="已入厂" key="2">
          <entered />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import unEnter from './unEnter/unEnter'
import entered from './entered/entered'
export default {
  data () {
    return {
    };
  },

  components: {
    unEnter,
    entered
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