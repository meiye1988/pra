<template>
  <el-row>
      <el-col :span="3" class="bgcolor gwhite toppadding" @click.native="goBack()"><i class="icon iconfont icon-zuojiantou rele-120"></i></el-col>
      <el-col :span="21" class="bgcolor gwhite toppadding">{{$route.params.title}}</el-col>
      <el-col :span="24">
          <el-row>
			<el-col :span="24" v-for="vo in praList">{{vo.name}}</el-col>
          </el-row>
      </el-col>
  </el-row>
</template>


<script>
var praList = ['家常菜','素菜','粥','汤','川菜','早餐','凉菜','更多'];
import Axios from 'axios'
export default {
    name: 'Pra',
  data(){
      return {
         praList:[]
      }
      
  },
  mounted:function(){
	  Axios.get('./static/json/classlist.json')
		  .then(response=>{
			  this.praList = response.data;
		  })
		  .catch();
  },
  computed:{
  },
  methods:{
      goBack:function(){
          this.$router.isBack = true
          window.history.go(-1);

  }
  }
 
}
</script>