import Vue from 'vue'
import Router from 'vue-router'
import Pra from '@/components/page/pra'
import Coohbook from '@/components/page/coohbook'
import Class from '@/components/page/class'
import More from '@/components/page/more'
import ClassList from '@/components/page/classList'
import Notepad from '@/components/page/Notepad'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/Pra',
      component: Pra,
      children:[
        {path:'/',component:Coohbook},//默认子路由
          ],
      
    },
    {
      path: '/Pra',
      name: 'Pra',
	  component: Pra,
	  children:[
		{path:'/',component:Coohbook},
		{path:'coohbook',component:Coohbook},
		{path:'class',component:Class},
		{path:'more',component:More},
      ],
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }
    ,
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/classList/:title',
      name: 'ClassList',
      component: ClassList
    },
    {
      path: '/notepad',
      name: 'Notepad',
      component: Notepad
    }
    
  ]
})
