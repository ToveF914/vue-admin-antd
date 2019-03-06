<!--  -->
<template>
  <div>
    <a-list
      itemLayout="horizontal"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a slot="actions" @click="safeAction(item)">修改</a>
        <a-list-item-meta>
          <span slot="description">{{item.description+item.detail}}</span>
          <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <passwordUpdate ref="passwordUpdate"/>
    <bindPhone ref="bindPhone" />
    <bindEmail ref="bindEmail" />
  </div>
</template>

<script>
import passwordUpdate from './passwordUpdate/passwordUpdate'
import bindPhone from './bindPhone/bindPhone'
import bindEmail from './bindEmail/bindEmail'
export default {
  data () {
    return {
      data:[
        {
          title: '账户密码',
          description: '当前密码强度   ',
          detail: '弱'
        },
        {
          title: '密保手机',
          description: '已绑定手机：',
          detail: '135********'
        },
        {
          title: '备用邮箱',
          description: '已绑定邮箱：',
          detail: 'cai***@foxmail.com'
        }
      ]
    };
  },

  components: {
    passwordUpdate,
    bindPhone,
    bindEmail
  },

  computed: {},

  methods: {
    safeAction(item){
      console.log(item.title)
      if(item.title == '账户密码'){
        this.passwordUpdate();
      }else if(item.title == '密保手机'){
        this.bindPhone()
      }else {
        this.bindEmail()
      }
    },
    //修改账户密码
    passwordUpdate(){
      this.$refs.passwordUpdate.visible = true;
    },
    //绑定手机
    bindPhone(){
      this.$refs.bindPhone.visible = true;
    },
    //绑定邮箱
    bindEmail(){
      this.$refs.bindEmail.visible = true;
    }
  }
}

</script>
<style scoped>
</style>