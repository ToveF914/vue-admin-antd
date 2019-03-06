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
        <a-form-item><h2>注册</h2></a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: 'Please input your username!' }] }
            ]"
            placeholder="姓名"
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
              { rules: [{ required: true, message: 'Please input your Password!' }] }
            ]"
            type="password"
            placeholder="用户名"
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
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] }
            ]"
            type="password"
            placeholder="邮箱"
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
          <a-input
            placeholder="手机号码"
            size="large"
            v-decorator="[
              'phone',
              {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              }
            ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="[
                'prefix',
                { initialValue: '86' }
              ]"
              style="width: 70px"
            >
              <a-select-option value="86">
                +86
              </a-select-option>
              <a-select-option value="87">
                +87
              </a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Please input your Password!' }] }
                ]"
                type="password"
                placeholder="验证码"
                size="large"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-col>
            <a-col :span="8" style="textAlign:right">
              <a-button size="large">获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] }
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
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] }
            ]"
            type="password"
            placeholder="确认密码"
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
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="12">
              <a-button type="primary" style="width:100%" size="large">注册</a-button>
            </a-col>
            <a-col :span="8" style="textAlign:right">
              <a @click="$router.push({path:'/login'})">使用已有账户登录</a>
            </a-col>
          </a-row>
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
          console.log('Received values of form: ', values);
        }
      });
    },
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
  width: 100%;
}
</style>