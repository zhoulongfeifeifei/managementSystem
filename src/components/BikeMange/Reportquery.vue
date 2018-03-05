<template>
  <div class="Reportquery">
    <div class="term">
      <div class="bikeno">车辆编号：<span>2133122211</span></div>
      <div class="select-item">
        请选择：
				  <el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true"
            :clearable="true" :filterable="true" @change="handleChange"></el-cascader>
				  <span>所选地区：{{form.cityName}}{{form.eraeName}}{{form.mineraeName}}</span>
      </div>
      <div class="search"><el-button type="primary">搜索</el-button></div>
    </div>
    <el-table :data="tableData" class="tab">
				<el-table-column stripe="true" border="true" prop="bikeno" label="车辆编号"></el-table-column>
				<el-table-column stripe="true" border="true" prop="addTime" label="添加时间"></el-table-column>
				<el-table-column stripe="true" border="true" prop="zuNum" label="租车次数"></el-table-column>
				<el-table-column stripe="true" border="true" prop="lastUser" label="最后租车用户"></el-table-column>
				<el-table-column stripe="true" border="true" prop="lastAddress" label="终点位置上报"></el-table-column>
		</el-table>
    <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[6]" :current-page="currentPage1" :total="totle" layout="total, sizes, prev, pager, next, jumper" >
    </el-pagination>
  </div>
</template>
<script>
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
        tableData:[
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'},
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'},
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'},
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'},
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'},
          {bikeno:'55652322',addTime:'2017.08.21 10:54:34',zuNum:1142,lastUser:'15658124545',lastAddress:'浙江省杭州市富阳区富春街道恩波大道富阳俊豪汽车有限公司'}
        ],
        currentPage1:1,
        totle:30
    }    
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
  }
}
</script>
<style>
  .bikeno{
    float: left;
    width: 180px;
    height: 40px;
    line-height: 40px;
    margin-top: 12px;
    margin-right: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #dfe2e7;
    border: 1px solid #fff;
    cursor: pointer;
    box-sizing: border-box;
    background: #fff;
  }
  .select-item{
    height: 40px;
    float: left;
    padding: 0 10px;
    margin-right: 20px;
    margin-top: 12px;
    background: #fff;
    border: 1px solid #0f423d;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #dfe2e7;
    border: 1px solid #fff;
    cursor: pointer;
    box-sizing: border-box;
  }
  .el-button--primary{
    margin-top: 12px;
  }
  .tab{
    margin: 10px;
  }
</style>


