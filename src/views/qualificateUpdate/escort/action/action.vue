<template>
  <div>
    <a-modal
      title="押运员基本信息"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :width="640"
      okText="确认"
      cancelText="取消"
    >
      <a-form
        :form="form"
        @submit="handleSubmit"
        id="actionForm"
      >
        <a-form-item
          label="押运员姓名"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-input
            v-decorator="[
              'note',
              {rules: [{ required: true, message: '请输入押运员姓名信息!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item
          label="押运员手机号码"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-input
            v-decorator="[
              'note',
              {rules: [{ required: true, message: '请输入押运员手机号码!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item
          label="押运证编号"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-input
            v-decorator="[
              'note',
              {rules: [{ required: true, message: '请输入押运证编号!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item
          label="押运证有效期止"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-date-picker 
            placeholder="选择日期"
            style="width:100%"
          />
        </a-form-item>
        <a-form-item
          label="押运证附件上传"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
            <a-button>
              <a-icon type="upload" /> 点击上传
            </a-button>
          </a-upload>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      headers: {
        authorization: 'authorization-text',
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
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
    handleSubmit(){

    },
    handleChange(){

    }
  }
}

</script>
<style scoped>
  #actionForm .ant-form-item{
    margin-bottom: 4px;
  }
</style>