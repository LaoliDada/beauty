import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routers/index';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
