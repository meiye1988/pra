<template>
<div>
<router-view></router-view>
<footerMenu></footerMenu>
</div>
        
</template>
<script>
import footerMenu from '@/components/common/footerMenu'
export default {
    name: 'Pra',
  data(){
      return {
        
      }
      
  },
  components:{
      footerMenu
  }
 
}
</script>

<style>
   
</style>
