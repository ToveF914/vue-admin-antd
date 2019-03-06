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
            label="录入姓名"
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
        </a-form>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '录入姓名',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
}, {
  title: '操作描述',
  className: 'column-money',
  dataIndex: 'carNo',
}, {
  title: '操作时间',
  dataIndex: 'createTime',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  carNo: '川A666777',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '2',
  name: 'Jim Green',
  carNo: '川A666777',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '3',
  name: 'Joe Black',
  carNo: '川A666777',
  createTime: '2019-2-22 12:00:00',
}];
export default {
  data () {
    return {
      columns,
      data,
      form: {},
      placeholder:[
        '开始时间','结束时间'
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    onChange(){

    },
  }
}

</script>
<style scoped>
</style>