<template >
  <div class="q-pa-md row no-wrap items-center justify-around column">

     <!-- PUT YOUR COMPONENT HERE -->

   <!-- comment from here -->
    <div class="">
      <h5>Our Partner</h5>

    </div>
    <div v-if="customers">
      <ul>
        <li v-for="(customer, index) in customers" :key="index" class="row">
          <div class="" >{{ customer.denomination }} / </div>
          <div class="" >  {{ customer.description }}</div>
        </li>
      </ul>

    </div>
    <div>
      <q-icon size="100px" name="home" />

    <q-btn :dense="$q.screen.xs" no-caps label="Face" icon-right="colorize" color="primary">
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-color  />
      </q-popup-proxy>
    </q-btn>

    <q-btn :dense="$q.screen.xs" no-caps label="Hair" icon-right="colorize" color="secondary">
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-color  />
      </q-popup-proxy>
    </q-btn>
  </div>
  <!-- to here -->



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Planing',
  data () {
    return {}
  },
  computed: {

    ...mapGetters(
      [
        'customers',
      ]),
  },
}
</script>
