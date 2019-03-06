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
            label="驾驶员姓名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="驾驶员手机号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="驾驶证编号"
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
  title: '驾驶员姓名',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
}, {
  title: '手机号码1',
  dataIndex: 'phone1',
}, {
  title: '手机号码2',
  dataIndex: 'phone2',
}, {
  title: '驾驶证编号',
  dataIndex: 'driverNo',
}, {
  title: '驾驶证有效期止',
  dataIndex: 'driverDate',
},{
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: 'John Brown',
  phone1: '13540132223',
  phone2: '',
  driverNo: '233423432233423423',
  driverDate: '2020-2-23'
}, {
  key: '2',
  name: 'Jim Green',
  phone1: '13540132223',
  phone2: '',
  driverNo: '233423432233423423',
  driverDate: '2020-2-23'
}, {
  key: '3',
  name: 'Joe Black',
  phone1: '13540132223',
  phone2: '',
  driverNo: '233423432233423423',
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