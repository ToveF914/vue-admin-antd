<!--  -->
<template>
  <div id="content">
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
            label="备份类型"
          >
            <a-select
              defaultValue='c0'
              style="width: 200px"
            >
              <a-select-option value="c0">全部</a-select-option>
              <a-select-option value="c1">数据库</a-select-option>
              <a-select-option value="c2">应用程序</a-select-option>
              <a-select-option value="c3">图片文件</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="文件名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="备份时间"
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
            <a-button >备份</a-button>
          </a-form-item>
        </a-form>
      </template>
      <span slot="action" slot-scope="text, record">
        <a-button size="small">下载</a-button>
        <a-popconfirm title="此操作将会删除该备份文件，是否继续?" @confirm="confirm" @cancel="cancel" okText="是" cancelText="否">
          <a-button size="small" type="danger" style="marginLeft:14px">删除</a-button>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '序号',
  dataIndex: 'id',
  scopedSlots: { customRender: 'name'}
}, {
  title: '备份类型',
  dataIndex: 'dataType',
}, {
  title: '文件名',
  dataIndex: 'fileName',
}, {
  title: '备份时间',
  dataIndex: 'createTime',
}, {
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  id: '1',
  dataType: '数据库',
  fileName: 'database20190228.sql',
  actionPs: '',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '2',
  id: '2',
  dataType: '数据库',
  fileName: 'database20190228.sql',
  actionPs: '',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '3',
  id: '3',
  dataType: '数据库',
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
      placeholder:['开始时间','结束时间'],
    }
  },

  components: {},

  computed: {},

  methods: {
    onChange(){},
    onClick(key){
      console.log(key)
      this.$router.push({path:`/transpotArrange/action?key=${key}&isSolved=false`})
    },
     confirm (e) {
      console.log(e)
      
    },
    cancel (e) {
      console.log(e)
      
    },
  }
}

</script>
<style scoped>
  #content {
    padding-top: 24px;
    background: #fff;
    margin-top: 14px;
    border-top: 1px solid #e8e8e8
  }
</style>