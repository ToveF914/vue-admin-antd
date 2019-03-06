<template>
  <div>
    <a-modal
      title="电子邮箱"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :width="480"
      okText="确认"
      cancelText="取消"
    >
      <a-form>
          <a-form-item
            label="邮箱"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-input placeholder="请输入邮箱地址"></a-input>
          </a-form-item>
          <a-form-item
            label="验证码"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-row>
              <a-col :span="12">
                <a-input placeholder="请输入验证码"></a-input>
              </a-col>
              <a-col :span="12" style="textAlign:right">
                <a-button type="primary">获取验证码</a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      confirmLoading: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
    callback(){}
  }
}

</script>
<style scoped>
</style>