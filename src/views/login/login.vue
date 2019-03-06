<!-- 登录页面 -->
<template>
  <div id="login_page">
    <div>
      <div style="textAlign:center">
        <a-avatar :size="70" style="marginRight:16px;verticalAlign: middle"/>
        <span style="fontSize:33px;verticalAlign: middle">天原集团</span>
        <div style="marginTop: 12px;marginBottom: 40px;color: rgba(0,0,0,.45);fontSize: 14px;textAlign:center">
          危化品车辆管理系统登录页
        </div>
      </div>
      <a-form
        id="login_page_form"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '请输入登录名!' }] }
            ]"
            placeholder="用户名"
            size="large"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入登录密码!' }] }
            ]"
            type="password"
            placeholder="密码"
            size="large"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              }
            ]"
          >
            记住账户
          </a-checkbox>
          <a
            class="login-form-forgot"
            href=""
          >
            忘记密码
          </a>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            size="large"
          >
            登录
          </a-button>
          <a @click="$router.push({path:'/register'})">
            立即注册
          </a>
        </a-form-item>
      </a-form>
    </div>
    <div :style="{textAlign: 'center',margin: '48px 0 24px'}">
      天原集团危化品车辆管理系统 ©2019 Created by caitao914@foxmail.com
    </div>
  </div>
</template>

<script>

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('提交表单: ', values);
          if(values.userName == 'guest' && values.password == 'guest'){
            this.$router.push({ path: '/transpotArrange'});
            this.$store.commit('getRole','guest');
          }else if( values.userName == 'sadmin' && values.password == 'sadmin' ){
            this.$router.push({ path: '/seniorAdmin'});
            this.$store.commit('getRole','sadmin');
          }else if(values.userName == 'admin' && values.password == 'admin'){
            this.$router.push({ path: '/adminReport'});
            this.$store.commit('getRole','admin');
          }else if(values.userName == 'guard' && values.password == 'guard'){
            this.$router.push({ path: '/guard'});
            this.$store.commit('getRole','guard');
          }else {
            console.log('登录错误')
          }
          sessionStorage.setItem('role',this.$store.state.role)
        }
      });
    }
  },
};
</script>
<style scope>
#login_page{
  height: 100vh;
  width: 100%;
  background: #f0f2f5;
  padding: 64px 0 24px;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
#login_page_form{
  width: 388px;
  margin: 0 auto;
}
#login_page_form .login-form-forgot {
  float: right;
}
#login_page_form .login-form-button {
  margin-top: 16px;
   margin-bottom: 24px;
  width: 100%;
}
</style>