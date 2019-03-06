<!--  -->
<template>
  <div>
    <div id="index_user_header">
      <div id="index_user_header_left">
        <a-avatar :size="72" icon="user" />
        <span :style="{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px' }">
          <span id="index_user_header_left_wel">{{welcomeTime}}，{{nickName}}，欢迎登录天原集团危化品车辆管理系统</span>
          <span id="index_user_header_left_ps">系统管理员</span>
        </span>
      </div>
    </div>
    <div id="index_user_content">
      <authority />
    </div>
  </div>
</template>

<script>
import authority from './authority/authority'
export default {
  data () {
    return {
      nickName: '',
      welcomeTime: '早上好',
    };
  },

  created(){
    this.getTime();
    let role = sessionStorage.getItem('role');
    this.nickName = role
  },

  components: {
    authority
  },

  computed: {},

  methods: {
    getTime(){
      let now = new Date();
        let hour = now.getHours();
        if(hour < 9){
        this.welcomeTime = '早上好'
        }else if(hour < 12){
          this.welcomeTime = '上午好'
        }else if(hour < 14){
          this.welcomeTime = '中午好'
        }else if(hour < 17){
          this.welcomeTime = '下午好'
        }else {
          this.welcomeTime = '晚上好'
        }
    }
  }
}

</script>
<style scoped>
  #index_user_header {
    height: 80px;
    background: #fff
  }
  #index_user_header_left {
    display: flex;
    flex-direction: row;
    align-content: center;
  }
  #index_user_header_left_wel{
    margin-bottom: 12px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  #index_user_header_left_ps{
    color: rgba(0,0,0,.45);
    line-height: 22px;
  }
  #index_user_content {
    padding-top: 24px;
    background: #fff;
    margin-top: 14px;
    border-top: 1px solid #e8e8e8
  }
</style>