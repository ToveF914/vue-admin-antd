<template>
  <div id="infoForm">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-divider orientation="left" style="fontSize:18px;color:#1890ff">驾驶员基本信息</a-divider>
      <a-form-item
        label="姓名"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '请输入姓名信息!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="手机号码"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '请输入手机号码!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="驾驶证编号"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '请输入驾驶证编号!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="驾驶证有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="道路危险货物运输驾驶证编号"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '请输入道路危险货物运输驾驶证编号!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="道路危险货物运输驾驶证编号有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="驾驶证附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item
        label="道路危险货物运输驾驶证附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-divider orientation="left" style="fontSize:18px;color:#1890ff">押运员基本信息</a-divider>
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
      <a-divider orientation="left" style="fontSize:18px;color:#1890ff">车头基本信息</a-divider>
      <a-form-item
        label="车牌号"
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
        label="行驶证有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="使用性质"
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
        label="危险化学品道路运输证号码"
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
        label="危险化学品道路运输证有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="经营范围"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="行驶证附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item
        label="危险化学品道路运输证附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-divider orientation="left" style="fontSize:18px;color:#1890ff">挂车基本信息</a-divider>
      <a-form-item
        label="车牌号"
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
        label="危险化学品道路运输证号码"
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
        label="危险化学品道路运输证有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="经营范围"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="罐体检查报告有效期止"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-date-picker 
          placeholder="选择日期"
          style="width:100%"
        />
      </a-form-item>
      <a-form-item
        label="罐体材质"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="充装材质"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-input
          v-decorator="[
            'note',
            {rules: [{ required: true, message: '' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="危险化学品道路运输证附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item
        label="罐体检查报告附件上传"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        style="marginBottom:16px"
      >
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item
        :wrapper-col="btnWrapperCol"
        
      >
        <a-button
          type="primary"
          @click="check"
          style="width:100%"
          size="large"
          v-if="isButtonView"
        >
          录入信息
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      headers: {
        authorization: 'authorization-text',
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      btnWrapperCol: {
        xs: { span: 24 },
        sm: { span: 6, offset: 6 },
      },
      isButtonView:true
    };
  },

  created(){
    console.log(this.$route.query.isSolved)
    if(this.$route.query.isSolved == 'true'){
      this.isButtonView = false
    }else {
      this.isButtonView = true
    }
  },

  components: {},

  computed: {},

  methods: {
    handleSubmit(){

    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    check(){

    }
  }
}

</script>
<style scoped>
   #infoForm .ant-form-item{
    margin-bottom: 4px;
  }
</style>