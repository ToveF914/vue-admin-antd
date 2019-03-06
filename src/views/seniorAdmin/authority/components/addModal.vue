<template>
  <div>
    <a-modal
      title="添加成员"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="取消"
      okText="确定"
    >
      <a-form
        :form="form"
        style="margin: 0 22px"
      >
        <a-form-item
          label="用户名"
        >
          <a-input></a-input>
        </a-form-item>
        <a-form-item
          label="所属公司"
        >
          <a-input></a-input>
        </a-form-item>
        <a-form-item
          label="密码"
        >
          <a-input></a-input>
        </a-form-item>
        <a-form-item
          label="确认密码"
        >
          <a-input></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      form: {}
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.$emit('newUser')
      }, 1200);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
}
</script>
