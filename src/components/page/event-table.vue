<template>
  <el-col :span="24" class="table" :class="{'show':isShow}">
      <el-row class="eibox" :class="{'show':isebox}" @click.native="hideEbox">
         <div class="edit-input" @click.stop="">
             <input type="text" v-model="info.title" ref="title">
             <button @click="editBtn">确定</button>
        </div> 
      </el-row>
      <el-row>
          <el-col :span="10" class="select">
              <el-dropdown trigger="click" style="" class="selectbox">
                <span class="el-dropdown-link" >
                    {{getTypeName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="doselect(0)">全部</el-dropdown-item>
                    <el-dropdown-item @click.native="doselect(1)">未完成</el-dropdown-item>
                    <el-dropdown-item @click.native="doselect(2)">已完成</el-dropdown-item>
                    <el-dropdown-item @click.native="doselect(3)">已取消</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="14">
              <input type="text" placeholder="过滤词" class="finput" v-model="screen_title">
          </el-col>
      </el-row>
      <el-row>
           <table class="event-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>所有事项</th>
                        <th width="">类型</th>
                        <th width="">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, index) in notapad">
                        <td align="center">{{index + 1}}</td>
                        <td>{{value.title}}</td>
                        <td align="center">{{getType(value.type)}}</td>
                        <td align="center" style="font-size: 0;"><button @click="showInput(index)">编辑</button>
                            <button class="del-btn" @click="showDialog(index,value.id)">删除</button></td>
                    </tr>
                </tbody>
            </table>
      </el-row>
  </el-col>
</template>
<script>
export default {
    name: 'event-table',
  data(){
      return {
          screen_type:0,
          screen_title: '',
          edit_title:'',
          active: false,
          isebox:false,
          info:{
               title: '',
                id: 0,
                index: 0
              
          }
      }
  },
  props:['isShow'],
  computed:{
      notapad(){ 
          var self =this;
          return this.$store.getters.getEventList.filter(function(d){
              if(self.screen_type !== 0 && self.screen_title === ''){
                    if( d.type === self.screen_type ){
                        return d;
                    }
                }else if(self.screen_type !== 0 && self.screen_title !== ''){
                    if( d.type === self.screen_type && d.title.indexOf(self.screen_title) !== -1){
                        return d;
                    }
                }else if(self.screen_type === 0 && self.screen_title !== ''){
                    if(d.title.indexOf(self.screen_title) !== -1){
                        return d;
                    }
                }else{
                    return d;
                }
          });
      },
      getTypeName(){
                const self = this;
                return self.getType(self.screen_type) || '全部';
            }
  },
  methods:{
      doselect(type){
          this.screen_type = type;
          this.active = false;
      },
      getType(type){
        let str = '';
        switch(type) {
            case 1:
                str = '未完成';
                break;
            case 2:
                str = '已完成';
                break;
            case 3:
                str = '已取消';
                break;
        }
        return str;
    },
    showDialog(index,id){
        this.$emit("delevent",index,id);
    },
    showInput(index){
        this.info = {
            index:index,
            id:this.notapad[index].id,
            title:this.notapad[index].title
        }
        this.isebox = true;
        this.$refs.title.focus();
    },
    hideEbox(){
        this.isebox = false;
    },
    editBtn(){
        this.info.title = this.info.title.trim();
        if(this.info.title){
            this.$store.dispatch("eventEdit",this.info);
            this.$message("保存成功");
        }
        this.isebox = false;
    }
  }
}
</script>
<style>
.table{
    position: absolute;
    top:3rem;
    transform:translateX(-100%);
    transition:transform .5s;
    height:100%;
    background: #F2F2F2
}
.table.show{
    transform:translateY(0);
}
.eibox{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 90;
    position: fixed;
    transform:translateY(-100%);
    transition:transform .3s;
}
.eibox.show{
    transform:translateY(0);
}
.edit-input{
    /* position: fixed; */
    /* height:100%; */
    top:3rem;
    width:100%;
    padding:10px 100px 10px 10px;
    height:60px;
    z-index:10;
    transform:translateY(0);
    box-sizing: border-box;
    background-color: white;

}
.edit-input input{
    width:100%;
    float: left;
    height:40px;
    border: 1px solid #ddd;
    padding: 5px 10px;
    box-sizing: border-box;
}
.edit-input button{
    position: absolute;
    width:80px;
    right: 10px;
    height:40px;
    border:0;
}
.select{
    text-align: left;

}
.selectbox{
    border:1px solid #ccc;  
     padding:0.5em 0.2em;
    background-color: white;
}
.finput{
        width: 100%;
    height: 35px;
    line-height: 25px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 12px;
    font-family: Arial,Microsoft YaHei;
    color: #999;
}
.event-table{
    margin-top:2em;
    width:100%;
    padding:0;
    border-left:1px solid #ccc;
    border-top:1px solid #ccc;
    
    border-spacing: 0px;
}
.event-table td,th{
    position: relative;
    height: 40px;
    min-width: 0;
    padding:5px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-right: 1px solid #ccc;
    border-bottom:1px solid #ccc;
                    
}
</style>


