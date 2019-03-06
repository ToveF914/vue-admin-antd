<template>
  <div>
    <div id="index_user_header">
      <div id="index_user_header_left">
        <a-avatar :size="72" icon="user" />
        <span :style="{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px' }">
          <span id="index_user_header_left_wel">{{welcomeTime}}，{{nickName}}，欢迎登录天原集团危化品车辆管理系统</span>
          <span id="index_user_header_left_ps">管理员</span>
        </span>
      </div>
    </div>
    <div id="index_user_content">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="运输类型(天)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="pie1" style="width:100%;height:200px"></div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="运输类型(周)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="pie2" style="width:100%;height:200px"></div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="运输类型(月)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="pie3" style="width:100%;height:200px"></div>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" style="marginTop:22px">
        <a-col :span="8">
          <a-card title="车辆信息(天)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="line1" style="width:100%;height:200px"></div>
          </a-card> 
        </a-col>
        <a-col :span="8">
          <a-card title="车辆信息(周)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="line2" style="width:100%;height:200px"></div>
          </a-card> 
        </a-col>
        <a-col :span="8">
          <a-card title="车辆信息(月)" hoverable>
            <a-date-picker @change="onChange" slot="extra" placeholder="选择日期"/>
            <div ref="line3" style="width:100%;height:200px"></div>
          </a-card> 
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
const lineChartOptions = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data:['异常车次','正常车次','总车次']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {
        title: '保存'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    type: 'value'
  }
}
const pieChartOptions = {
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['类型1','类型2','类型3','其他']
  },
  toolbox: {
    right: '20',
    feature: {
      saveAsImage: {}
    }
  },
  series : [
    {
      name: '访问来源',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'类型1'},
        {value:310, name:'类型2'},
        {value:234, name:'类型3'},
        {value:135, name:'类型4'},
        {value:1548, name:'其他'}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
export default {
  data () {
    return {
      chart1: null,
      chart2: null,
      chart3: null,
      lineChart1: null,
      lineChart2: null,
      lineChart3: null,
      nickName: '',
      welcomeTime: '早上好',
      screenWidth: document.body.clientWidth
    };
  },

  components: {},

  created(){
    this.getTime();
    let role = sessionStorage.getItem('role');
    this.nickName = role
  },

  mounted(){
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initLineChart1();
    this.initLineChart2();
    this.initLineChart3();
    setTimeout(() => {
      this.chart1.resize();
      this.chart2.resize();
      this.chart3.resize();
      this.lineChart1.resize();
      this.lineChart2.resize();
      this.lineChart3.resize();
    },100)
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.screenWidth = window.screenWidth
      })()
    }
  },

  computed: {},

  methods: {
    //生成饼图
    initChart1(){
      this.chart1 = echarts.init(this.$refs.pie1)
      this.chart1.setOption(pieChartOptions)
    },
    //生成饼图
    initChart2(){
      this.chart2 = echarts.init(this.$refs.pie2)
      this.chart2.setOption(pieChartOptions)
    },
    //生成饼图
    initChart3(){
      this.chart3 = echarts.init(this.$refs.pie3)
      this.chart3.setOption(pieChartOptions)
    },
    //折线图
    initLineChart1(){
      this.lineChart1 = echarts.init(this.$refs.line1);
      let lineChart1Options = lineChartOptions;
      lineChart1Options.xAxis.data = []
      lineChart1Options.xAxis.data = ['03:00点','06:00','09:00','12:00','15:00','18:00','21:00','24:00']
      lineChart1Options.series = [
        {
          name:'异常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[ 0, 12, 16, 25, 30, 108, 90, 12]
        },
        {
          name:'正常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[ 0, 28, 36, 125, 230, 308, 190, 112]
        },
        {
          name:'总车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[ 0, 40, 52, 150, 260, 416, 280, 124]
        }
      ]
      this.lineChart1.setOption(lineChart1Options)
    },
    //折线图
    initLineChart2(){
      this.lineChart2 = echarts.init(this.$refs.line2);
      let lineChart2Options = lineChartOptions;
      lineChart2Options.xAxis.data = []
      lineChart2Options.xAxis.data = ['周一','周二','周三','周四','周五','周六','周日']
      lineChart2Options.series = [
        {
          name:'异常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[0, 0, 12, 16, 25, 30, 108, 90, 12]
        },
        {
          name:'正常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[0, 0, 28, 36, 125, 230, 308, 190, 112]
        },
        {
          name:'总车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:[0, 0, 40, 52, 150, 260, 416, 280, 124]
        }
      ]
      this.lineChart2.setOption(lineChart2Options)
    },
    //折线图
    initLineChart3(){
      this.lineChart3 = echarts.init(this.$refs.line3);
      let lineChart3Options = lineChartOptions;
      lineChart3Options.xAxis.data = [];
      let seriesData1 = []
      let seriesData2 = []
      let seriesData3 = []
      for(let i = 0; i < 29; i++){
        seriesData1.push(Math.random()*10)
        seriesData2.push(Math.random()*50)
        seriesData3.push(Math.random()*100)
      }
      for(let i = 1; i < 29; i++){
        lineChart3Options.xAxis.data.push(`2-${i}`)

      }
      lineChart3Options.series = [
        {
          name:'异常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:seriesData1
        },
        {
          name:'正常车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:seriesData2
        },
        {
          name:'总车次',
          type:'line',
          smooth: true,
          stack: '总量',
          data:seriesData3
        }
      ]
      this.lineChart3.setOption(lineChart3Options)
    },
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
    },
    onChange(){
      
    }
  },
  watch: {
    screenWidth(val){
      if(!this.timer){
        this.screenWidth = val;
        this.timer = true;
        setTimeout(()=> {
          this.chart1.resize();
          this.chart2.resize();
          this.chart3.resize();
          this.lineChart1.resize();
          this.lineChart2.resize();
          this.lineChart3.resize();
          this.timer = false;
        },300)
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