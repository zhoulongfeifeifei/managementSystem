<template>
  <div class="Moneystatistics">
      <div class="top">
        <div class="select-item">
            请选择：
            <el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true" :clearable="true" :filterable="true" @change="handleChange"></el-cascader>
            <span>所选地区：{{form.cityName}}{{form.eraeName}}{{form.mineraeName}}</span>
        </div>
        <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
        <el-button type="primary">搜索</el-button>
    </div>      
    <div class="main">
        <p>当日数据</p>
        <el-table :data="tableData" class="tab">
            <el-table-column stripe="true" border="true" prop="newUser" label="新增用户"></el-table-column>
            <el-table-column stripe="true" border="true" prop="newMoney" label="新增充值"></el-table-column>
            <el-table-column stripe="true" border="true" prop="newDop" label="新增押金"></el-table-column>
            <el-table-column stripe="true" border="true" prop="newQi" label="新增骑行"></el-table-column>
		</el-table>
        <el-table :data="tableData1" class="tab">
            <el-table-column stripe="true" border="true" prop="yjtk" label="押金退款"></el-table-column>
            <el-table-column stripe="true" border="true" prop="cztk" label="充值退款"></el-table-column>
            <el-table-column stripe="true" border="true" prop="yjsy" label="押金收益"></el-table-column>
            <el-table-column stripe="true" border="true" prop="czsy" label="充值收益"></el-table-column>
		</el-table>
        <p>用户数据</p>
        <el-tabs type="border-card">
            <el-tab-pane label="用户总数/15600">   
                <ul class="list">
                    <li v-for="item in numData1"><span>{{item.title}}</span><span>{{item.num}}</span></li>
                </ul>    
                <div class="qushi-right">
                    <div id="chartPie" class="charts"></div>
                </div>       
            </el-tab-pane>
            <el-tab-pane label="用户总数/15600">   
                <ul class="list">
                    <li v-for="item in numData2"><span>{{item.title}}</span><span>{{item.num}}</span></li>
                </ul>    
                <div class="qushi-right">
                    <div id="chartPie2" class="charts"></div>
                </div>       
            </el-tab-pane>						 				
        </el-tabs>
    </div> 
  </div>
</template>
<script>
import echarts from 'echarts'
import selectedOptions from '../common/js/city-data.js';
export default {
  data(){
      return{
        form:{
            city : '',
            cityName : '',
            erae : '',
            eraeName : '',
            minerae : '',
            mineraeName : '',
            selectedOptions:[],
        },
        CityInfo:CityInfo,
        time:'',
        tableData:[
            {newUser:15633,newMoney:14567,newDop:13456,newQi:15675}
        ],
        tableData1:[
            {yjtk:15633,cztk:14567,yjsy:13456,czsy:15657}
        ],
        numData1:[
            {title:'当天新增数',num:3600},{title:'昨日新增数',num:3600},{title:'最近一周新增数',num:3600},
            {title:'最近一月新增数',num:3600},{title:'周平均增长数',num:3600},{title:'月平均增长数',num:36001}
        ],
        numData2:[
            {title:'当天新数',num:300},{title:'昨日增数',num:3600},{title:'最近一周新增数',num:3600},
            {title:'最近一月增数',num:3600},{title:'周平均',num:3600},{title:'月平均',num:36001}
        ],
        numData3:[
           {title:'当天新增数',num:3600},{title:'昨日新增数',num:3600},{title:'最近一周新增数',num:3600},
            {title:'最近一月新增数',num:3600},{title:'周长数',num:3600},{title:'月增长数',num:36001}
        ],
        numData4:[
            {title:'当天新增数',num:3600},{title:'昨日新增数',num:3600},{title:'最近一新增数',num:3600},
            {title:'最一月新增数',num:3600},{title:'周长数',num:3600},{title:'月增数',num:36001}
        ],
        timeData:['02-01','02-02','02-03','02-04','02-05','02-06','02-07'],
        zhexian:[10,16,25,11,24,33,22]
      }
  },
  methods:{
      handleChange(value) {
        this.form.city = this.form.selectedOptions[0];
        this.form.erae = this.form.selectedOptions[1];
        this.form.minerae = this.form.selectedOptions[2];
        if(this.form.selectedOptions[0]!=undefined){
          for(var y=0 ;y<CityInfo.length;y++){
            if(this.CityInfo[y].value == this.form.city){
              this.form.cityName = this.CityInfo[y].label;
            }
          };
        }else{
            this.form.cityName='';
        }		 
        if(this.form.selectedOptions[1]!=undefined){
          for(var y=0 ;y<CityInfo.length;y++){
            for(var z=0;z<CityInfo[y].children.length;z++){
              if(CityInfo[y].children[z].value == this.form.erae && this.form.erae!=undefined){
                this.form.eraeName = CityInfo[y].children[z].label;
              }
            }
          };
        }else{
          this.form.eraeName='';
        }				 
        if(this.form.selectedOptions[2]!=undefined){
            for(var y=0 ;y<CityInfo.length;y++){
            for(var z=0;z<CityInfo[y].children.length;z++){
              for(var i=0;i<CityInfo[y].children[z].children.length;i++){
                if(CityInfo[y].children[z].children[i].value == this.form.minerae && this.form.minerae!=undefined){
                  this.form.mineraeName = CityInfo[y].children[z].children[i].label
                }
              }
            }
          };
        }else{
            this.form.mineraeName='';
        }
	},
    


  },
  mounted:function(){
    this.myChart1 = echarts.init(document.getElementById('chartPie'));
    this.myChart2 = echarts.init(document.getElementById('chartPie2'));
    var _this = this;
      
    this.option = {
        tooltip: {
            trigger: 'axis'
        },
        title:{
            padding: [0, 0],
            x: 'top',
			y: 'bottom',
        },
        toolbox: {
            show: false,
            feature: {
                magicType: {
                    show: true, 
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                /*restore: {},*/
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: _this.timeData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        series: [{
            name: '用户总数',
            type: 'line',
                itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#ff787c'  
                            }  
                        }  
                    },  
            data:_this.zhexian,
            smooth:true
            
        }]
    };
    this.myChart1.setOption(this.option);
    this.myChart2.setOption(this.option);
  }
}
</script>
<style>
@import "../common/css/common.css";
.select-item{
    float: left;
    margin-top: 12px;
}
.el-button--primary{
    margin-top: 12px;
}
.main p{
    padding: 10px 0;
}
.tab{
    margin: 10px;
    border-bottom: 1px solid #ccc;
}
.list{
    float: left;
    width: 24%;
    margin: 0;
}
.list li{
    float: left;
    width: 100%;
}
.list li span{
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    margin-left: 32px;
    color: #9AA3AE;
}
.qushi-right {
    float: left;
    width: 74%;
    margin-left: 1%;
    height: 320px;
    margin-top: -40px;
}
.charts{
    width: 600px;
    height: 320px;
}
</style>


