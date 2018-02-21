<template>
  <v-slide-x-transition>
    <div id="list-view">

      <Loading v-if="loading" />

      <v-list  v-else three-line>
        <ListItem 
          v-for="place in places" 
          v-on:click.native="selectItem(place)"
          :key="place.referralId" 
          :place="place" />
      </v-list>

    </div>
  </v-slide-x-transition>
</template>


<script>
import Loading from '@/components/Loading.vue'
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'ListView',
  components: {
    Loading,
    ListItem
  },
  props: {
    places: Array,
    loading: Boolean,
    selectItem: Function
  }
}
</script>


<style scoped>
#list-view {
  position: absolute;
  width: 100%;
}

.list {
  padding: 0px;
}
</style>
