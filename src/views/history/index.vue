<!--  -->
<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="carNo" slot-scope="text">
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
            label="车牌号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="所属公司"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="入厂日期"
          >
            <a-date-picker 
              @change="onChange" 
              placeholder="选择日期"
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
  title: '驾驶员姓名',
  dataIndex: 'driver',
  scopedSlots: { customRender: 'carNo' },
}, {
  title: '车牌号',
  dataIndex: 'carNo'
}, {
  title: '所属公司',
  dataIndex: 'company',
}, {
  title: '入厂日期',
  dataIndex: 'inTime',
}];

const data = [{
  key: '1',
  driver: 'John Brown',
  carNo: '川A112233',
  inTime: '2019-2-22 12:00:00',
  company: '海丰和锐'
}, {
  key: '2',
  driver: 'Jim Green',
  carNo: '川A112233',
  inTime: '2019-2-22 12:00:00',
  company: '海丰和锐'
}, {
  key: '3',
  driver: 'Joe Black',
  carNo: '川A112233',
  inTime: '2019-2-22 12:00:00',
  company: '海丰和锐'
}];
export default {
  data () {
    return {
      columns,
      data,
      form: {}
    };
  },

  components: {},

  computed: {},

  methods: {
    onChange(){

    },
    onClick(key){
      this.$router.push({path:`/transpotArrange/action?key=${key}&isSolved=true`})
    }
  }
}

</script>
<style scoped>
</style>