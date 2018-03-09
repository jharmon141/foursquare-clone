<template>
  <div id="app">

    <AppHeader />

    <main>
      <router-view v-bind="{ selectItem, places, loading, selectedItem }" />
    </main>

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
    places: [],
    selectedItem: null
  }),

  methods: {
    selectItem(item) {
      const urlName = item.venue.name.toLowerCase().split(' ').join('+') 
      this.selectedItem = item
      this.$router.push(`/detail/${urlName}`)
    }
  },

  created() {
    this.loading = true
    const urlName = `https://api.foursquare.com/v2/venues/explore?checkin=checkin&client_id=VZLRH3FKWTSLBOQAJKYD1K3JB2SY2GAZH44HJBQUDUENIR3Y&client_secret=3NARX2FU5LDX5N4SKCRUBKJPIVBAFNCPCY2APEHZ51AU24ED&limit=50&near=New York,NY&m=foursquare&sortByDistance=1&v=20140924&venuePhotos=1`

    axios.get(urlName)
      .then((response) => {
        this.places = response.data.response.groups[0].items
        this.loading = false
      })
      .catch((error) => {
        this.loading = false
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

main {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  right:0;
}
</style>
