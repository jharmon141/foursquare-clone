import Vue from 'vue'
import router from '@/router'
import { expect } from 'chai'
import App from '@/App.vue'
import Vuetify from 'vuetify'
import mockData from '../mockData.js'
import '@/filters'

Vue.use(Vuetify)

describe('App', () => {
  it('data is passed to app layer on selection and route is changed to detail', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor({ router }).$mount()
    vm.places = mockData.response

    expect(vm.selectedItem).to.equal(null)

    vm.selectItem(mockData.item)

    expect(vm.selectedItem).to.equal(mockData.item)
    expect(vm.$route.name).to.equal('detail-view')
  })


})
