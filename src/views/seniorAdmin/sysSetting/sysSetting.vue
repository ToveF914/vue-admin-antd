<!--  -->
<template>
  <div id="content">
    <a-card title="系统推送" hoverable>
      <a-form layout="inline">
        <a-form-item label="所属公司" >
          <a-select
            defaultValue="a1"
            style="width: 200px"
            @change="handleChange"
            mode="multiple"
            allowClear
          >
            <a-select-option v-for="i in 10" :key="(i + 9).toString(36) + i">
              {{(i + 9).toString(36) + i}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="用户名" >
          <a-select
            defaultValue="a1"
            style="width: 200px"
            @change="handleChange"
            mode="multiple"
            allowClear
          >
            <a-select-option v-for="i in 10" :key="(i + 9).toString(36) + i">
              {{(i + 9).toString(36) + i}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="推送频率" >
          <a-select
            defaultValue="c1"
            style="width: 200px"
            @change="handleChange"
          >
            <a-select-option value="c1">1周/1次</a-select-option>
            <a-select-option value="c2">2周/1次</a-select-option>
            <a-select-option value="c3">3周/1次</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item >
          <a-button type="primary">确认</a-button>
        </a-form-item>
        <a-form-item >
          <a-button>重置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card title="资质提醒" style="marginTop:18px" hoverable>
      <a-form layout="inline">
        <a-form-item label="资质类型" >
          <a-select
            defaultValue='c1'
            style="width: 200px"
            @change="handleChange"
            mode="multiple"
          >
            <a-select-option value="c1">驾驶证</a-select-option>
            <a-select-option value="c2">押运证</a-select-option>
            <a-select-option value="c3">运输证</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="提醒时间" >
          <a-select
            defaultValue="c1"
            style="width: 200px"
            @change="handleChange"
          >
            <a-select-option value="c1">过期前7天</a-select-option>
            <a-select-option value="c2">过期前15天</a-select-option>
            <a-select-option value="c3">过期前30天</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item >
          <a-button type="primary">确认</a-button>
        </a-form-item>
        <a-form-item >
          <a-button>重置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:[{
        title: '系统推送',
      }, {
        title: '资质提醒',
      }]
    }
  },

  components: {},

  computed: {},

  methods: {
    handleChange(){

    }
  }
}

</script>
<style scoped>
  #content {
    padding-top: 24px;
    background: #fff;
    margin-top: 14px;
    border-top: 1px solid #e8e8e8
  }
</style>