<template>
  <div class="Exportdetial">
      <div class="export export01">
          <h2>用户充值明细</h2>
          <div class="itemall">
              <el-date-picker type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="times"></el-date-picker>
              <div class="checks">
                  <p>类型：</p>  
                  <el-checkbox-group v-model="checkedType" @change="handleCheckedTypeChange">
                    <el-checkbox v-for="money in moneyType" :label="money" :key="money">{{money}}</el-checkbox>
                </el-checkbox-group>
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <!-- <i class="el-icon-upload"></i> -->
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </div>
          </div>
           <el-button type="primary">数据导出</el-button>
      </div>
      <div class="export export02">
          <h2>用户充值明细</h2>
          <div class="itemall">
              <el-date-picker type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="times"></el-date-picker>
              <div class="checks">
                  <p>类型：</p>  
                  <el-checkbox-group v-model="checkedType" @change="handleCheckedTypeChange">
                    <el-checkbox v-for="money in moneyType" :label="money" :key="money">{{money}}</el-checkbox>
                </el-checkbox-group>
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <!-- <i class="el-icon-upload"></i> -->
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </div>
          </div>
           <el-button type="primary">数据导出</el-button>
      </div>
      <div class="export export03">
          <h2>用户充值明细</h2>
          <div class="itemall">
              <el-date-picker type="datetimerange"  range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="times"></el-date-picker>
              <div class="checks">
                  <p>类型：</p>  
                  <el-checkbox-group v-model="checkedType" @change="handleCheckedTypeChange">
                    <el-checkbox v-for="money in moneyType" :label="money" :key="money">{{money}}</el-checkbox>
                </el-checkbox-group>
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <!-- <i class="el-icon-upload"></i> -->
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </div>
          </div>
           <el-button type="primary">数据导出</el-button>
      </div>
  </div>
</template>
<script>
var  moneyType=['押金','充值','返现','红包'];
export default {
  data(){
      return{
           times:'',
           checkedType: ['押金'],
           moneyType: moneyType,
      }
  },
  methods:{
      handleCheckedTypeChange(value) {
        let checkedCount = value.length;
        moneyType=value;
         console.log(checkedCount,moneyType,1)
      }
  }
}
</script>
<style>
    .export{
        float: left;
        width: 30%;
        background: #fff;
        margin-right: 3%;
        box-shadow: 5px 5px 5px #ddd;
        border-radius: 10px;
        margin-top: 34px;
        overflow: hidden;
    }
    .export h2 {
        float: left;
        width: 100%;
        height: 60px;
        background: #f4f8fb;
        font-size: 18px;
        color: #9AA3AE;
        font-weight: 500;
        line-height: 60px;
        text-align: center;
    }
    .itemall {
        float: left;
        width: 100%;
        box-sizing: border-box;
        padding: 0 25px;
    }
    .el-date-editor--datetimerange.el-input__inner{
        width: 285px;
    }
    .checks p{
        padding: 5px 0;
    }
    .el-checkbox__label{
        padding-left: 4px;
    }
    .el-upload-dragger{
        width: 150%;
    }
    .el-upload-dragger .el-upload__text{
        line-height: 12;
    }
    .el-button--primary{
        display: block;
        margin: 10px auto;
    }
</style>

