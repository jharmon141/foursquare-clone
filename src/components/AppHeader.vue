<template>

  <header>

    <div v-if="!itemSelected" class="list-view">
      <v-layout row>
        <v-flex xs4 offset-xs4>
          List
        </v-flex>
      </v-layout>
    </div>

    <div v-else class="detail-view">
      <v-layout row>
        <v-flex xs3>
          <div @click="$emit('toggleView')" class="left-link">
            <v-icon>chevron_left</v-icon>
            List
          </div>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <div class="list-view">
            Detail
          </div>
        </v-flex>
      </v-layout>
    </div>

  </header>

</template>


<script>
export default {
  name: 'AppHeader',
  props: {
    itemSelected: Boolean
  }
}
</script>


<style scoped>
header {
  position: fixed;
  opacity: 0.99;
  z-index: 999;
  top: 0;
  min-width: 100%;
  height: 80px;
  background-color: #fafafb;
  border-bottom: 1px solid lightgrey;
  font-size: 26px;
  padding-top: 25px;
}

i {
  font-size: 40px;
}

.left-link {
  text-align: left;
  font-size: 22px;
  color: dodgerblue;
  cursor: default;
}
</style>