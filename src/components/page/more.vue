<template>
  <el-row>
      <el-col :span="24" class="bgcolor gwhite toppadding">更多</el-col>
      <el-col :span="24" class="titlebox">
          <el-row>
              <el-col :span="24" class="maintitle" >
                  
<div class="iconwidth"><i class="icon iconfont icon-wodeshoucang rele-150"></i></div>
                  <div class="titlewidth">收藏
                      <div class="arrowwidth"><i class="icon iconfont icon-arrow-right"></i></div>
                  </div>

                 
                  
                  
              </el-col>
              <el-col :span="24" class="maintitle" @click.native="goUrl()">
                  <div class="iconwidth"><i class="icon iconfont icon-book rele-150"></i></div>
                  <div class="titlewidth">待事本
                      <div class="arrowwidth"><i class="icon iconfont icon-arrow-right"></i></div>
                  </div>
                  
              </el-col>
          </el-row>

      </el-col>

  </el-row>
</template>

<script>
export default {
    name: 'More',
  data(){
      return {
         
      }
      
  },
  methods:{
      goUrl(){
          this.$router.push("/notepad");
      }
  }
 
}
</script>
<style>
.titlebox{
    background-color: white;
    margin-top:1em;
}
.maintitle{
    padding:0.8em 0;
    width:100%;
}
.maintitle > div{
    display:inline-block;
    text-align: left;
}
.maintitle .iconwidth,.maintitle .arrowwidth{
    width:10%;
    text-align: center;
}
.maintitle .titlewidth{
    width:90%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1em;
    position: relative;
    float:right;
}
.arrowwidth{
    float: right;
    margin-right:1em;
}
.maintitle .arrowwidth{
    text-align: right;
}
</style>
