<template>

  <el-row>
      <!-- <div v-show="show" :class="bottom" class="vue-toast toast-center">成功</div> -->
       <!-- <el-col :span="3" class="bgcolor gwhite toppadding header" @click.native="goBack()"><i class="icon iconfont icon-zuojiantou rele-120"></i></el-col> -->
      <el-col :span="24" class="bgcolor gwhite toppadding header">记事本
          <i class="icon iconfont icon-gengduo rele-120 siderleftbtn" @click="toolsEvent()"></i>

      </el-col>
      <siderleft :is-ehow="ishowtools" @showTable="ishowtools=false;isTable=true;islistnone=true" @clearData="clearData"></siderleft>
      <eventlist :is-none="islistnone"></eventlist>
      <eventtable @delevent="delData" :is-show="isTable"></eventtable>
      <eventdialog :is-show="isshowD" @cancelDialog="isshowD=false" :msg="tips" @sure="sureDialog"></eventdialog>

      

  </el-row>
</template>

<script>
import store from '@/vuex/index'
import siderleft from '@/components/page/siderleft.vue'
import eventlist from '@/components/page/event-list.vue'
import eventtable from '@/components/page/event-table.vue'
import eventdialog from '@/components/common/dialog.vue'
export default {
    name: 'Notepad',
  data(){
      return {
        //   show:true,
          ishowtools:false,
          isshowD:false,
          isTable:false,
          islistnone:false,
          dialog_type:'',
          tips:'',
          del_info: {
            index: 0,
            id: 0
        }
         
      }
      
  },
  mounted(){
  },
  computed:{
        goBack:function(){
          this.$router.isBack = true
          window.history.go(-1);

  }
  },
  components:{
      "siderleft":siderleft,
      "eventlist":eventlist,
      "eventtable":eventtable,
      "eventdialog":eventdialog
      
  },
  methods: {
      toolsEvent(){
          if(this.isTable==false){
              this.ishowtools = !this.ishowtools
          }else{
              console.log("df");
              this.isTable = false;
               this.islistnone = false;
          }
          
          
      },
      delData(index,id){
          this.dialog_type = "delData";
          this.tips="确定要删除记录吗"
          this.isshowD = true;
           this.del_info = {
                    index: index,
                    id : id
                }
      },
      clearData(){
          this.dialog_type = "clearData";
          this.tips="确定要清空所有数据吗"
          this.isshowD = true;
          this.ishowtools = false;
      },
      sureDialog(){
          var self = this;
          switch(self.dialog_type){
              case 'delData':
                self.$store.dispatch("eventDel",self.del_info);
                self.$toast('删除成功');
              break;
               case 'clearData':
                self.$store.dispatch("eventClear");
                self.$toast('清空成功');
              break;
          }
          this.isshowD = false;
      }

  },
  store
}
</script>
<style>
.header{
    z-index: 100;
    position: relative;
    height:3rem;
    line-height: 2rem;
    font-size:1.25rem;
    
}
.siderleftbtn{
    position: absolute;
    right:20px;
}
.container{
    width: 100%;
    padding: 0 10px;
}

</style>
