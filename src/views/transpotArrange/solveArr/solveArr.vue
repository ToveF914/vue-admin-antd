<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;" @click="onClick(text)">{{text}}</a>
      </template>
      <template slot="title" slot-scope="currentPageData">
        <a-form
          layout="inline"
          :form="form"
        >
          <a-form-item
            label="运输单号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="驾驶员姓名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="车头车牌号"
          >
            <a-input></a-input>
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
        </a-form>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '运输单号',
  dataIndex: 'no',
  scopedSlots: { customRender: 'name' },
},{
  title: '驾驶员姓名',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
}, {
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
  title: '提交时间',
  dataIndex: 'createTime',
}];

const data = [{
  key: '1',
  no:'111',
  name: 'John Brown',
  carNo: '川A666777',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '2',
  no:'222',
  name: 'Jim Green',
  carNo: '川A666777',
  createTime: '2019-2-22 12:00:00',
}, {
  key: '3',
  no:'333',
  name: 'Joe Black',
  carNo: '川A666777',
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
    onChange(){

    },
    onClick(key){
      console.log(key)
      this.$router.push({path:`/transpotArrange/action?key=${key}&isSolved=true`})
    }
  }
}

</script>
<style lang='scss' scoped>
</style>