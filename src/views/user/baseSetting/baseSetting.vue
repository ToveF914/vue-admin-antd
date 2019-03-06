<template>
  <div id="user_content">
          <a-form :form="form" layout='vertical' :style="{ width:'40%' }">
            <a-form-item
              label="姓名"
            >
              <a-input
                v-decorator="[
                  'username',
                  {rules: [{ required: true, message: '请输入你的姓名' }]}
                ]"
                placeholder="请输入你的姓名"
              />
            </a-form-item>
            <a-form-item
              label="用户名"
            >
              <a-input
                v-decorator="[
                  'nickname',
                  {rules: [{ required: true, message: '请输入你的身份证号码' }]}
                ]"
                placeholder="请输入你的身份证号码"
              />
            </a-form-item>
            
            <a-form-item
            >
              <a-button
                type="primary"
                @click="check"
              >
                更新信息
              </a-button>
            </a-form-item>
          </a-form>
          <div :style="{ paddingLeft: '104px'}">
            <a-avatar src='https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLdnicKibC8MHfKTToSaeeUGlMibaxIj8hw83mgzjia8nzaOs3WPvD2aCMMcfGW3D7acCZ4BcSF4pmlTQ/132' :size='144' />
          </div>
        </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16, offset: 8 },
};
export default {
  data () {
    return {
      checkNick: false,
      form: this.$form.createForm(this),
    };
  },

  components: {},

  computed: {},

  methods: {
    check  () {
      this.form.validateFields(
        (err) => {
          if (!err) {
            console.info('success');
          }
        },
      );
    },
    handleChange  (e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  }
}

</script>
<style scoped>
  #user_content {
    display: flex
  }
</style>