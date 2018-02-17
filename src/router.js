import Vue from 'vue'
import Router from 'vue-router'
import ListView from './views/ListView.vue'
import DetailView from './views/DetailView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list-view',
      component: ListView
    },
    {
      path: '/detail',
      name: 'detail-view',
      component: DetailView
    }
  ]
})
