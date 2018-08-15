import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import zuzhi from '../components/manage/zuzhi'
import users from '../components/manage/userqx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
	    	path: '/index/zuzhi',
	      name: 'zuzhi',
	      component: zuzhi
	    },{
	    	path: '/index/userqx',
	      name: 'users',
	      component: users
	    }]
    }
  ]
})
