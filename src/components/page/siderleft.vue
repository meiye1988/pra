<template>
  <el-col :span="12" class="tools" :class="{'show-tools':isEhow}">
          <div class="siderLeft">
              <ul>
                  <li><button class="bgcolor gwhite">编辑数据</button></li>
                  <li><button class="bgcolor gwhite">清空数据</button></li>
              </ul>
          </div>
      </el-col>
</template>


<script>
export default {
  name:'siderleft',
  data(){
      return {
          // ishowtools:false
      }
  },
  props:['isEhow'],
  methods:{

  }
}
</script>
<style>
.tools{
    position:fixed;
    top:0;
    z-index:50;
    background:rgba(0, 0, 0, 0.5);
    height:100%;
    left:0;
    width:250px;
    transform:translateX(-250px);
    transition:transform .3s;
}
.tools.show-tools{
    transform:translateX(0px)
}
.siderLeft{
    padding:2em;
}
.siderLeft ul{
    padding-left:0;padding-right:0;
}
.siderLeft ul li {
    list-style:none;
    margin-bottom:0.5em;
}
.siderLeft button{
    border:0;
    padding:0.4em 0.6em;

}
</style>


