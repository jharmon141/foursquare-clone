import Vue from 'vue'

//a global filter that constructs the photo url
Vue.filter('photo', val => `${val.prefix}cap300${val.suffix}`)

//a global filter that constructs the address of the location
Vue.filter('address', val => `${val.address} ${val.city}, ${val.state}  ${val.postalCode}`)
