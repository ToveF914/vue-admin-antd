<!--  -->
<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
      <template slot="title" slot-scope="currentPageData">
        <a-form
          layout="inline"
          :form="form"
        >
          <a-form-item
            label="车牌号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="使用性质"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="行驶证有效期止"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" icon="search">查询</a-button>
          </a-form-item>
        </a-form>
      </template>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;" @click="$refs.action.visible=true">编辑</a>
        <action ref="action"/>
      </span>
    </a-table>
  </div>
</template>

<script>
import action from './action/action'
const columns = [{
  title: '车牌号',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
}, {
  title: '使用性质',
  dataIndex: 'driverNo',
}, {
  title: '行驶证有效期止',
  dataIndex: 'driverDate',
},{
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: '川A345622',
  driverNo: '危化品运输',
  driverDate: '2020-2-23'
}, {
  key: '2',
  name: '川A345622',
  driverNo: '危化品运输',
  driverDate: '2020-2-23'
}, {
  key: '3',
  name: '川A345622',
  driverNo: '危化品运输',
  driverDate: '2020-2-23'
}];
export default {
  data () {
    return {
      form: {},
      columns,
      data
    };
  },

  components: {
    action
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>