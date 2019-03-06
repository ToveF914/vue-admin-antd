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
            label="驾驶员姓名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="押运员姓名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="驾驶员手机号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="车头车牌号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="创建时间"
          >
            <a-range-picker 
              @change="onChange" 
              :placeholder="placeholder"
              format="YYYY/MM/DD"
            />
          </a-form-item>
          <a-form-item
            label="提交时间"
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
          <a-form-item v-show="isDownload">
            <download-excel
              :data = data
              :json_fields = "excelTitle"  
              :name="`天原集团车辆情况查看(未入厂)${new Date().toLocaleDateString()}.xls`"
            >
              <a-button type="dashed" icon="download">列表导出</a-button>
            </download-excel>
          </a-form-item>
        </a-form>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '驾驶员姓名',
  dataIndex: 'driver',
  scopedSlots: { customRender: 'name'}
}, {
  title: '押运员姓名',
  dataIndex: 'escort'
},{
  title: '驾驶员手机号码1',
  dataIndex: 'phone1',
}, {
  title: '驾驶员手机号码2',
  dataIndex: 'phone2',
}, {
  title: '车头车牌号',
  className: 'column-money',
  dataIndex: 'carNo',
}, {
  title: '创建时间',
  dataIndex: 'createTime',
}, {
  title: '提交时间',
  dataIndex: 'submitTime',
}];

const data = [{
  key: '1',
  driver: 'Joe',
  escort: 'Lily',
  carNo: '川A666777',
  phone1: '135****1122',
  phone2: '135****3344',
  createTime: '2019-2-22 12:00:00',
  submitTime: '2019-2-22 13:30:00'
}, {
  key: '2',
  driver: 'John',
  escort: 'Blank',
  carNo: '川A666777',
  phone1: '135****1122',
  phone2: '135****3344',
  createTime: '2019-2-22 12:00:00',
  submitTime: '2019-2-22 13:30:00'
}, {
  key: '3',
  driver: 'Jack',
  escort: 'Las',
  carNo: '川A666777',
  phone1: '135****1122',
  phone2: '135****3344',
  createTime: '2019-2-22 12:00:00',
  submitTime: '2019-2-22 13:30:00'
}];
export default {
  data () {
    return {
      data,
      columns,
      form: {},
      placeholder:['开始时间','结束时间'],
      isDownload: false,
      excelTitle: {
        '驾驶员': 'driver',
        '押运员': 'escort',
        '手机号码1': 'phone1',
        '手机号码2': 'phone2',
        '车头车牌号': 'carNo',
        '创建时间': 'createTime',
        '提交时间': 'submitTime'
      },
    };
  },

  created(){
    if(sessionStorage.getItem('role') === 'admin'){
      this.isDownload = true
    }
  },

  components: {},

  computed: {},

  methods: {
    onChange(){},
    onClick(key){
      console.log(key)
      this.$router.push({path:`/transpotArrange/action?key=${key}&isSolved=true`})
    }
  }
}

</script>
<style scoped>
</style>