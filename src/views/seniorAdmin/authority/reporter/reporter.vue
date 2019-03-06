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
            label="用户名"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="手机号"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="注册时间"
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
        </a-form>
      </template>
       <span slot="action" slot-scope="text, record">
          <a-button :type="canUse?'danger':'primary'" @click="canUse = !canUse" size="small">{{canUse?'停用':'启用'}}</a-button>
          <a-button size="small" style="marginLeft:18px" @click="visible = true">编辑</a-button>
       </span>
    </a-table>
    <a-modal
      title="权限修改"
      v-model="visible"
      @ok="visible = false"
      centered
      okText="确认"
      cancelText="取消"
    >
      <p>待完善...</p>
    </a-modal>
  </div>
</template>

<script>
const columns = [{
  title: '用户名',
  dataIndex: 'driver',
  scopedSlots: { customRender: 'name'}
}, {
  title: '手机号',
  dataIndex: 'phone1',
}, {
  title: '注册时间',
  dataIndex: 'createTime',
}, {
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
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
      placeholder:['开始时间','结束时间'],
      canUse: true,
      visible: false
    };
  },

  components: {},

  computed: {},

  methods: {
    onChange(){},
    onClick(key){
      console.log(key)
      this.$router.push({path:`/transpotArrange/action?key=${key}&isSolved=false`})
    }
  }
}

</script>
<style scoped>
</style>