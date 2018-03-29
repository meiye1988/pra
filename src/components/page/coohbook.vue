<template>
  <el-row>
      <el-col :span="24" class="bgcolor gwhite toppadding">菜谱大全</el-col>
      <el-col :span="24">
        <el-col :span="22" class="inputbox">
            <i  class="icon iconfont icon-sousuo gcolor"></i><span class="gcC9">想吃什么搜这里</span>
        </el-col>
      </el-col>
      <el-col :span="24" class="bgwhite">
          <el-row>
              <el-col :span="20" class="text-l">
                  <span class="gcC9" style="display:block;padding:0.6em 0 0.6em 0.8em">热门菜</span>
              </el-col>
          </el-row>
          <el-row class="hotclass">
              <el-col :span="6" v-for="vo in praList" ><router-link :to="`/classList/${vo}`">{{vo}}</router-link></el-col>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
var praList = ['家常菜','素菜','粥','汤','川菜','早餐','凉菜','更多'];
export default {
    name: 'Pra',
  data(){
      return {
         praList:praList
      }
      
  },
 
}
</script>

<style>
    .inputbox{
        border-radius: 5px;
        border:1px solid #FF3300;
        height:2.5em;
        margin:0 auto;
        float:none;
        margin-top:0.7em;
        margin-bottom:0.7em;
        background-color: white;
        line-height:2.5em;
    }
    .hotclass > div{
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
        padding:0.8em 0;
    }
    .hotclass > div:nth-child(4n){
         border-right:0;
    }
</style>
