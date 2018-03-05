<template>
  <div class="permismange">
      <div class="main">
          <div class="top">
            <p>工作人员信息概览</p>
            <el-button type="primary"  @click="dialogVisible = true">查询</el-button>
            <el-dialog title="请填写新增内容"  :visible.sync="dialogVisible"  width="50%" center :show-close=false>
                   <el-form-item label="用户名：">
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="密码：">
                    <el-input v-model="form.password" auto-complete="off" type="password" placeholder="请输入用密码"></el-input>
                  </el-form-item>
                  <el-form-item label="昵称：">
                    <el-input v-model="form.fullname" auto-complete="off" placeholder="请输入昵称"></el-input>
                  </el-form-item>
                  <el-form-item label="权限：">
                   <el-select v-model="form.value"  placeholder="仅自己可见" @change="selectChange">
                     <el-option v-for="item in form.options" :label="item.label" :value="item.value"></el-option>
                   </el-select>
                  </el-form-item>
                  <el-form-item label="范围：">
                    <el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true" :clearable="true" :filterable="true" @change="handleChange"></el-cascader>
				            <span>所选地区：{{form.cityName}}{{form.eraeName}}{{form.mineraeName}}</span>
                  </el-form-item>
                <el-form :model="form">
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="btnCancel">取 消</el-button>
                  <el-button type="primary" @click="btnSuccess">确 定</el-button>
                </span>
            </el-dialog>
          </div>
          <el-table :data="tableData">
            <el-table-column stripe="true" border="true" prop="userName" label="用户名"></el-table-column>
            <el-table-column stripe="true" border="true" prop="fullName" label="昵称"></el-table-column>
            <el-table-column stripe="true" border="true" prop="lastTime" label="最后登录时间"></el-table-column>
            <el-table-column stripe="true" border="true" prop="arar" label="区域"></el-table-column>
            <el-table-column stripe="true" border="true" prop="qx" label="权限"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="lookClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[6]" :current-page="currentPage1" :total="totle" layout="total, sizes, prev, pager, next, jumper" >
        </el-pagination>
         <el-dialog title="请填写编写内容"  :visible.sync="dialogChange"  width="50%" center :show-close=false>
            <el-form :model="tabChange">
              <el-form-item label="用户名：">
              <el-input v-model="tabChange.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="昵称：">
              <el-input v-model="tabChange.fullName" auto-complete="off" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="权限：">
              <el-select v-model="tabChange.value"  placeholder="超级管理员" @change="selectChange1">
                <el-option v-for="item in tabChange.options" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>                
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnCancel1">取 消</el-button>
            <el-button type="primary" @click="btnSuccess1">确 定</el-button>
          </span> 
        </el-dialog>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          currentPage1:1,
          totle:30,
          dialogVisible: false,
          selectValue:1,
          selectValue2:1,
          dialogChange:false,
          form:{
            name:'',
            password:'',
            fullname:'',
            options:[
              {value: '1',label: '超级管理员'},
              {value: '2',label: '普通管理员'},
              {value: '3',label: '普通人'}
            ],
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
            {userName:'李哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'},
            {userName:'王哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'},
            {userName:'周哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'},
            {userName:'你哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'},
            {userName:'我哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'},
            {userName:'她哥',fullName:'LG',lastTime:'2017-09-06 12:58:25',arar:'杭州市西湖区古墩路',qx:'超级管理员'}
          ],
          tabChange:{
            userName:'',
            fullName:'',
            lastTime:'',           
            arar:'',
            qx:'',
            options:[
              {value: '1',label: '超级管理员'},
              {value: '2',label: '普通管理员'},
              {value: '3',label: '普通人'}
            ],
          }    
      }
  },
  methods:{
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //表格编辑
      lookClick(row) {
        console.log(row);
        this.dialogChange=true;
        this.tabChange={
           userName:row.userName,
            fullName:row.fullName,
            lastTime:row.lastTime,
            arar:row.arar,
            options:[
              {value: '1',label: '超级管理员'},
              {value: '2',label: '普通管理员'},
              {value: '3',label: '普通人'}
            ],
        };
      },
     selectChange(value){
        selectValue=value;
        console.log(this.selectValue);
     },
     selectChange1(value){
        selectValue2=value;
        console.log(this.selectValue2);
     },
     btnCancel(){
        this.dialogVisible=false;
        console.log('取消')
     },
     btnSuccess(){
        this.dialogVisible=false;
        console.log('确定');
     },
     btnCancel1(){
        this.dialogChange=false;
        console.log('取消')
     },
     btnSuccess1(){
        this.dialogChange=false;
        console.log('确定');
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
  .top {
    float: left;
    width: 100%;
    height: 75px;
    line-height: 75px;
}
.top p {
    float: left;
    line-height: 35px;
    font-size: 22px;
    color: #9AA3AE;
}
.top .el-button {
    float: right;
}
.el-dialog--center .el-dialog__footer{
  padding-bottom: 60px;
}
</style>


