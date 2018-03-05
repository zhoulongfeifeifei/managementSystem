<template>
    <div class="allmange">
        <el-date-picker type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="times"></el-date-picker>
        <el-button type="primary">查询</el-button>
        <div class="main">
            <p>当日数据</p>
            <ul class="list">
                <li class="listLi" v-for="item in prossList">
                    <span>{{item.title}}</span>
                    <el-progress :percentage="item.number" :stroke-width="18" :text-inside="true"></el-progress>
                    <span>{{item.number}}</span>
                </li>
            </ul>
            <div class="mainLeft">
                <ul class="right-left">
                    <li v-for="item in dataList">
                        <!-- <span :style="item.style"></span>方法一 -->
                        <span :style="{background:item.bg}"></span>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <div class="huanxing" id="myChart"></div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
      return{
        times:'',
        prossList:[
            {title:'开不了锁：',number:30},
            {title:'无法结束行程：',number:20},
            {title:'退余额：',number:30},
            {title:'退押金：',number:30},
            {title:'支付宝扫码：',number:30},
            {title:'常规咨询：',number:30},
            {title:'单车故障:',number:30},
            {title:'未开始计费：',number:30},
            {title:'忘记锁车：',number:30},
            {title:'其它共享单车：',number:30},
            {title:'其它：',number:30}
        ],
        dataList:[
            {title:"开不了锁",style:{background:'#58F2E8'},bg:'#58F2E8'},
            {title:"无法结束行程", bg:'#40efae'},
            {title:"退余额",bg:'#4ad348'},
            {title:"退押金",bg:'#21d2ff'},
            {title:"支付宝扫码",bg:'#38afff'},
            {title:"常规查询",bg:'#e347f2'},
            {title:"单车故障",bg:'#ee67aa'},
            {title:"未开始计费",bg:'#f9ac78'},
            {title:"忘记锁车",bg:'#f78b6f'},
            {title:"其它单车",bg:'#f36e69'},
            {title:"其它",bg:'#4468da'}
        ]
      }
  },
  mounted:function(){
    var _this = this;
    this.myChart = echarts.init(document.getElementById('myChart'));
    this.myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: {
			text: '当日数据',
			subtext: '2000000.00',
			fontSize: '30',
			x: 'center',
			y: 'center'
        },
        color: ['#58F2E8', '#40efae', '#4ad348', '#21d2ff', '#38afff', '#e347f2', '#ee67aa', '#f9ac78', '#f78b6f', '#f36e69', '#4468da'],
        series:[{           
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: false,
					textStyle: {
						fontSize: '14',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 335,
				name: '开不了锁'
			}, {
				value: 310,
				name: '无法结束行程'
			}, {
				value: 234,
				name: '退余额'
			}, {
				value: 135,
				name: '退押金'
			}, {
				value: 1548,
				name: '支付宝扫码'
			}, {
				value: 335,
				name: '常规咨询'
			}, {
				value: 310,
				name: '单车故障'
			}, {
				value: 234,
				name: '未开始计费'
			}, {
				value: 135,
				name: '忘记锁车'
			}, {
				value: 1548,
				name: '其他共享单车'
			}, {
				value: 1548,
				name: '其他'
			}]		
        }] 
    });
  }
}
</script>
<style>
@import "../common/css/common.css";
    .el-range-editor.el-input__inner {
        width: 25%;
    }
    .list{
        width: 36%;
        padding: 10px 3%;
        background-color: #eff3f6;
        box-shadow:5px 5px 5px #dee3e7;
        float: left;
    }
    .mainLeft{
        width: 56%;
        background-color: #eff3f6;
        box-shadow:5px 5px 5px #dee3e7;
        float: right;
    }
    .list li{
        width: 100%;
        padding: 10px 0;
    }
    .el-progress{
        display: inline-block;
        width: 50%;
        margin:0 5px;
    }
    .right-left{
        float: left;
        width: 32%;
    }
    .right-left li{
        margin:21px 0;
    }
    .right-left span{
        float: left;
        width: 20px;
        height: 20px;
        margin: 2px 18px 0 5px;
        border-radius: 20px;
    }
    .right-left p{
        margin: 0 0 10px;
    }
    .huanxing{
        float: left;
        width: 66%;
        height: 400px;
        margin-top: 30px;
    }
    #myChart{
        height: 350px;
        width: 68%;
        margin: 0;
    }
</style>

