<template>
  <div>
    <a-table 
      :columns="columns" 
      :dataSource="data" 
      bordered
    >
      <template slot="name" slot-scope="text">
        <a href="javascript:;" @click="onClick(text)">{{text}}</a>
      </template>
      <template slot="title" slot-scope="currentPageData">
        <a-form
          layout="inline"
          :form="form"
        >
          <a-form-item
            label="姓名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="手机号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="操作类型"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="操作时间"
          >
            <a-range-picker 
              @change="onChange" 
              :placeholder="placeholder"
              format="YYYY/MM/DD"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" icon="search">查询</a-button>
          </a-form-item>
          <a-form-item>
            <a-button >重置</a-button>
          </a-form-item>
          <a-form-item>
            <a-button type="dashed" icon="download">列表导出</a-button>
          </a-form-item>
        </a-form>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '姓名',
  dataIndex: 'driver',
  scopedSlots: { customRender: 'name'}
}, {
  title: '手机号',
  dataIndex: 'phone1',
}, {
  title: '操作类型',
  className: 'column-money',
  dataIndex: 'actionType',
}, {
  title: '操作描述',
  className: 'column-money',
  dataIndex: 'actionPs',
}, {
  title: '操作时间',
  dataIndex: 'createTime',
}];

const data = [{
  key: '1',
  driver: 'Joe',
  escort: 'Lily',
  actionType: '录入',
  actionPs: '',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '2',
  driver: 'John',
  escort: 'Blank',
  actionType: '录入',
  actionPs: '',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '3',
  driver: 'Jack',
  escort: 'Las',
  actionType: '录入',
  actionPs: '',
  createTime: '2019-2-22 12:00:00',
}];
export default {
  data () {
    return {
      data,
      columns,
      form: {},
      placeholder:['开始时间','结束时间']
    };
  },

  components: {},

  computed: {},

  methods: {
    onChange(){},
    onClick(key){
      
    }
  }
}

</script>
<style scoped>
</style>