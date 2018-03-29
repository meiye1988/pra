<template>
	<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition :name="transitionName"> 
    	<router-view  class="Router"></router-view>
		</transition>
	</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      transitionName: 'slide-left'  // 默认动态路由变化为slide-right
    }
  },
  components:{
	  
  },
  watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　       this.transitionName = 'slide-left'
　　　　　}
　　  this.$router.isBack = false
　　}
　  }
}
</script>

<style>
body{
	margin:0;
	border:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.Router {
     position: absolute;
     width: 100%;
     transition: all .5s ease;
     height:100%;
     /* top: 40px; */
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
