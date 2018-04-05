<template>
  <el-dialog
  title="提示"
  :visible.sync="isShow"
  width="90%"
  :before-close="cancelDialog">
  <span class="">{{msg}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancelDialog()">取 消</el-button>
    <el-button type="primary" @click="confirm()">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
export default {
   data() {
      return {
        //dialogVisible: false,
        //msg:''
      };
    },
    props:['isShow','msg'],
    methods:{
        confirm:function(){
            this.$emit("sure");
        },
        handleClose:function(){
           // this.dialogVisible = false;
        },
        cancelDialog:function(){
            this.$emit("cancelDialog");
        }
    }

}
</script>
<style>
.el-dialog__body{
    text-align: left;
}
</style>

