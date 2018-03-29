<template>
<!-- <div class="footerMenu"> -->
    <!-- <ul>
      <li><i class="icon iconfont icon-08"></i><div>菜谱</div></li>
      <li><i class="icon iconfont icon-fenlei"></i>分类</li>
      <li><i class="icon iconfont icon-gengduo"></i>更多</li>
  </ul> -->


<!-- </div> -->
  <el-row class="footerMenu">
	  <el-col @click.native="goUrl('coohbook')" :span="8"><i :class="{active:currentRouter=='coohbook'}" class="icon iconfont icon-08 rele-150"></i><div>菜谱</div></el-col>
	  <el-col :span="8" @click.native="goUrl('class')"><i :class="{active:currentRouter=='class'}" class="icon iconfont icon-fenlei rele-150"></i><div>分类</div></el-col>
	  <el-col :span="8" @click.native="goUrl('more')"><i :class="{active:currentRouter=='more'}" class="icon iconfont icon-gengduo rele-150"></i><div>更多</div></el-col>
  </el-row>
</template>
<script>
export default {
  name: 'footerMenu',
  data () {
    return {
		//msg:this.$route.path
		currentRouter:this.$route.path=="/"?"coohbook":this.$route.path.split('/')[2]
    }
  },
  methods:{
	  goUrl(urlname){
		  this.$router.push("/Pra/"+urlname);
		  this.currentRouter = urlname;
	  }
  }
}
</script>
<style>
.footerMenu{
    position: fixed !important;
    bottom:0;
	width:100%;
	/* height:5em;
	line-height: 5em; */
	border-top:1px solid #ccc;
	padding:.2em 0;
}
.footerMenu .active{
	color:red;
	
}
</style>
