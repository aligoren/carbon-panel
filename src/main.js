import Vue from 'vue'
import App from './App.vue'
import '@inkline/inkline/dist/inkline.css'
import Inkline from '@inkline/inkline'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Inkline);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
