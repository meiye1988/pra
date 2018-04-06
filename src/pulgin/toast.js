// 弹出提示框，用于成功 失败 提示
var Toast = {};
var ToastVm = null;//存储toast vm
var isToastShow = false;
Toast.install = function(Vue,options){
    let opt = {
        default :'bottom',
        duration:'2000'
    };
    for(let pr in options){
        opt[pr] = options[pr];
    }
    Vue.prototype.$toast = (title,type) => {
       
        if(type){
            opt.default = type;         // 如果有传type，位置则设为该type
        }
        if(isToastShow){
            // 如果toast正在显示，则不再执行
            return ;
        }
        if(!ToastVm){
            let toastTpl = Vue.extend({  //1.构造器，定义好模板
                data(){
                    return {
                        show:isToastShow
                    }
                },
                template:'<div v-show="show" class="vue-toast toast-'+opt.default+'">'+title+'</div>',
            });
            var ToastVm = new toastTpl();  //2.创建实例
            var tpl = ToastVm.$mount().$el; //3.挂载实例
            document.body.appendChild(tpl);
        }
        
       
        ToastVm.show = isToastShow = true;
        setTimeout(function () {
            ToastVm.show = isToastShow = false;
        }, opt.duration)
    } 
    ['bottom','center','top'].forEach(type=>{
        Vue.prototype.$toast[type] = (title)=>{
            return Vue.prototype.$toast(title,type);
        }
    });
}
export default Toast;