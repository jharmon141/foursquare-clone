<template>
  <div id="app">
    <AppHeader :itemSelected="itemSelected" />

    <div id="main">
      <router-view v-bind="{ selectItem, places, loading, selectedItem }" />
    </div>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data: () => ({
    loading: null,
    itemSelected: false,
    places: [],
    selectedItem: null
  }),

  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.$router.push('/detail')
    }
  },

  created() {
    this.loading = true
    axios.get('https://api.foursquare.com/v2/venues/explore?checkin=checkin&client_id=VOOBH5VSIL11PX2DCD22GLDVTZDMQKC5MZKDR5SA4C4V2U1F&client_secret=YZCK5VBAURVS1E2ZZ4XP4ZOB04NRH0I3OEXPCE0RPOKWAYKG&limit=50&near=New York,NY&m=foursquare&sortByDistance=1&v=20140924&venuePhotos=1')
      .then((response) => {
        this.places = response.data.response.groups[0].items
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  right:0;
}
</style>
