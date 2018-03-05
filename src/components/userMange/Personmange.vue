<template>
    <div class="personmange">
		<el-input placeholder="请输入手机号" prefix-icon="el-icon-search" v-model="moible"></el-input>
		<el-button type="primary" round class="search">搜索</el-button>
		<div class="main">
			<p>当日数据</p>
			<el-table :data="tableData">
				<el-table-column stripe="true" border="true" prop="name" label="姓名"></el-table-column>
				<el-table-column stripe="true" border="true" prop="address" label="归属地"></el-table-column>
				<el-table-column stripe="true" border="true" prop="status" label="状态"></el-table-column>
				<el-table-column stripe="true" border="true" prop="phone" label="手机号"></el-table-column>
				<el-table-column stripe="true" border="true" prop="deposit" label="押金"></el-table-column>
				<el-table-column stripe="true" border="true" prop="bikeNum" label="骑行次数"></el-table-column>
				<el-table-column stripe="true" border="true" prop="regisTime" label="注册时间"></el-table-column>
				<el-table-column stripe="true" border="true" prop="lastTime" label="最后使用时间"></el-table-column>
			</el-table>
			<el-tabs type="border-card">
				<el-tab-pane v-for="(item,index) in editableTabs" :label="item.title">
					<el-table :data="item.tableData">
						<el-table-column stripe="true" border="true" v-for="propLi in item.propList" :prop="propLi.poor" :label="propLi.label"></el-table-column>
					</el-table>
					<el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[2]"
						:page-size="2"  :current-page="currentPage1" :total="item.totle" layout="total, sizes, prev, pager, next, jumper" >
					</el-pagination>
				</el-tab-pane>				 				
			</el-tabs>
		</div>
    </div>  
</template>
<script>
	 export default{
	 	data() {
	        return {
				moible:'',
				currentPage1: 1,
				tableData:[{name:'周龙飞',address:'杭州市',status:'骑行中',phone:'11011011011',deposit:'199',bikeNum:'999',regisTime:'2017-05-01',lastTime:'2015-12-25'}],
				activeName2: 'first',
				editableTabs:[
					{
						title:'余额实充反冲(15500)',
						totle:12,
						tableData:[
							{time:'2017.08.20 12:25:44',qudao:'支付宝',type:'押金',yajin:'199',shichong:'0',fanchong:"0",money:'0',status:'退款中'},
							{time:'2017.08.20 12:25:44',qudao:'支付宝',type:'押金',yajin:'199',shichong:'0',fanchong:"0",money:'0',status:'退款中'}
						],
						propList:[
							{poor:'time',label:"时间"},{poor:'qudao',label:"渠道"},{poor:'type',label:"类型"},{poor:'shichong',label:"实充"},
							{poor:'fanchong',label:"返充"},{poor:'money',label:"红包"},{poor:'status',label:"状态"}
						]
					},
					{
						title:'红包(15500)',
						totle:6,
						tableData:[
							{endtime:'2017.08.20 12:25:44',edu:'199',status:'押金'},
							{endtime:'2017.08.20 12:25:44',edu:'199',status:'押金'}
						],
						propList:[
							{poor:'endtime',label:"到期时间"},{poor:'edu',label:"额度"},{poor:'status',label:"状态"}
						]
					},{
						title:'信用(15500)',
						totle:10,
						tableData:[
							{time:'2017.08.20 12:25:44',change:'199',nowxy:'押金',because:'退款中'},
							{time:'2017.08.20 12:25:44',change:'199',nowxy:'押金',because:'退款中'}
						],
						propList:[
							{poor:'time',label:"时间"},{poor:'change',label:"变动"},{poor:'nowxy',label:"当前信用"},{poor:'because',label:"原因"}
						]
					},
					{
						title:'骑行消费(15500)',
						totle:8,
						tableData:[
							{starttime:'2017.08.20 12:25:44',km:'199',intime:'8小时',shichong:'0',fanchong:"0",hbkk:'0',bikeno:'00000000011111',ddbh:'11111000000',endtime:"2017.08.20 12:25:44"},
							{starttime:'2017.08.20 12:25:44',km:'199',intime:'8小时',shichong:'0',fanchong:"0",hbkk:'0',bikeno:'00000000011111',ddbh:'11111000000',endtime:"2017.08.20 12:25:44"}
						],
						propList:[
							{poor:'starttime',label:"开始时间"},{poor:'km',label:"199"},{poor:'intime',label:"用时"},{poor:'shichong',label:"实充扣款"},{poor:'fanchong',label:"返充扣款"},
							{poor:'hbkk',label:"红包扣款"},{poor:'bikeno',label:"车辆编号"},{poor:'ddbh',label:"订单编号"},{poor:'endtime',label:"结束时间"}
						]
					}
				],
	        }
	   },
	    methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      },
	    },
	    created: function() {
			
	    },
	 }
</script>
<style>
	.el-input{
		width: 430px;
	}
	.el-input__inner{
		border-radius: 50px;
	}
	.search{
		width: 120px;
		margin-left: 20px;
	}
</style>
