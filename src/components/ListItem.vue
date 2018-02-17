<template>
  <div id="list-item">
    <v-list-tile>

      <img :src="place.venue.featuredPhotos.items[0] | photo">

      <v-list-tile-content>
        <v-list-tile-title v-html="place.venue.name"></v-list-tile-title>
        <v-list-tile-sub-title>{{ place.venue.location | address }}</v-list-tile-sub-title>
      </v-list-tile-content>

    </v-list-tile>
  </div>
</template>


<script>
export default {
  name: 'ListItem',
  props: {
    place: Object
  }
}
</script>


<style scoped>
.list--three-line .list__tile {
  height: 125px;
  width: 100%;
}

.list__tile__content {
  position: absolute;
  height: 100px;
  max-width: 70%;
  left: 100px;
}

.list__tile__title {
  margin-top: 25px;
  font-size: 22px;
  height: 28px;
  line-height: 24px;
}

.list__tile__sub-title {
  font-size: 17px;
  margin-top: 10px;
}

li, a {
  height: 125px;
  width: 100%;
  border-top: 1px solid lightgrey;
}

.list {
  width: 100%;
  padding: 0px !important;
}

img {
  position: absolute;
  border-radius: 50%;
  top: 25px;
  left: 10px;
  height: 80px;
  min-width: 80px;
  max-width: 80px;
}

</style>
