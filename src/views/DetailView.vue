<template>
  <v-slide-x-reverse-transition>
    <div id="detail-view">

      <v-layout row wrap>
        <v-flex xs4 offset-xs4>
          <img :src="selectedItem.venue.featuredPhotos.items[0] | photo">
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          {{ selectedItem.venue.name }}
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          {{ selectedItem.venue.location | address }}
        </v-flex>
      </v-layout>

    </div>
  </v-slide-x-reverse-transition>
</template>


<script>

export default {
  name: 'DetailView',
  props: {
    selectedItem: Object
  }
}

</script>


<style scoped>
.row {
  margin-top: 25px;
}

#detail-view {
  font-size: 24px;
}

img {
  margin-top: 50px;
  height: 125px;
  min-width: 125px;
  max-width: 125px;
  border-radius: 50%;
}
</style>
