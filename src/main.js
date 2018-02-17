import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filters'
import vueScrollBehavior from 'vue-scroll-behavior'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(vueScrollBehavior, { router: router })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
