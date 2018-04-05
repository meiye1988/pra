<template>
    <el-col :span="24" class="titlebox" :class="{'none':isNone}">
        <el-row class="container">
              <el-col :span="24" >
                 <div class="event-add"><input v-model="eventTitle" type="text" placeholder="待办事项" class="n-input"> <button class="add-btn bgcolor" @click="addEventSubmit()">提交</button></div>
                
                  
              </el-col>

          </el-row>
          <el-row>
                <el-col :span="24">
                    <el-collapse v-model="activeNames" @change="handleChange">
                    
                    <el-collapse-item title="未完成" name="1">
                        <div class="buttinbox text-l" v-for="vo in getNoDo">{{vo.title}}
                            <button class="buttin finish" @click="moveToDone(vo.id)">完成</button>
                            <button class="buttin" @click="moveToCancel(vo.id)">取消</button>

                        </div>
                        <!-- <div class="buttinbox text-l">123123123
                            <button class="buttin finish">完成</button>
                            <button class="buttin">取消</button>

                        </div> -->
                        <!-- <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div> -->
                    </el-collapse-item>
                    <el-collapse-item title="已完成" name="2">
                        <div class="buttinbox text-l" v-for="vo in getDone">{{vo.title}}

                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="已取消" name="3">
                            <div class="buttinbox text-l" v-for="vo in getCancel">{{vo.title}}

                        </div>
                    </el-collapse-item>
                </el-collapse>
                </el-col>
          </el-row>
   </el-col>          
  
</template>
<script>

export default {
  name: 'event-list',
  data(){
      return {
          activeNames: [],
          eventTitle:'',
         
      }
      
  },
  props:['isNone'],
  computed:{
      getNoDo(){
          return this.$store.getters.getDoNo;
      },
      getDone(){
            return this.$store.getters.getDone;
        },
        getCancel(){
            return this.$store.getters.getCancel;
        },
        // goBack:function(){
        //   this.$router.isBack = true
        //   window.history.go(-1);

        // }
  },
  methods: {
      handleChange(val) {
        console.log(val);
      },
      addEventSubmit(){
          
          let title = this.eventTitle;
          if(title!="" && title!=undefined){
              title  = title.trim();
              this.$store.dispatch('addEvent',title);
              this.eventTitle = "";
          }
      },
      moveToDone(id){
          this.$store.dispatch("eventDone",id);
      },
      moveToCancel(id){
          this.$store.dispatch("eventCancel",id);
      }

  },
  
}
</script>
<style>
.none{
    display:none;
}
.event-add {
    position: relative;
    padding: 30px 90px 30px 0;
    font-size: 16px;
}
.event-add .n-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    box-sizing: border-box;
    font-size: inherit;
}


.event-add .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    border:0;
    cursor: pointer;
    
}
.el-collapse-item .el-collapse-item__header{
    background-color:#FF3300;
    color:white;

}
.el-collapse-item__content{
    padding-bottom: 0;
}
.buttinbox{
    width:100%;
    position: relative;
    height:44px;
    line-height: 44px;
}
.buttin{
    position: absolute;
    right:10px;
    background-color:white;
    color:#FF3300;;
    border:1px solid #FF3300;
    padding:5px 10px;
    top:10px;

}
.buttin.finish{
    right:80px;
}
</style>


