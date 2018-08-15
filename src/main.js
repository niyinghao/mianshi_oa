// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/reset.css'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/font-awesome.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
  methods: {
    setSessionStorage:function(data) { 
      for(let key in data){
        sessionStorage[key] = data[key];
      }
    },
    setLocalStorage: function(data) { 
      for(let key in data){
        localStorage[key] = data[key];
      }
    }
  }
})
