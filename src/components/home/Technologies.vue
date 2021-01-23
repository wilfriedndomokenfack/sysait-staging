<template>
 <div class="q-pa-md row no-wrap items-center justify-around column">

   <!-- PUT YOUR COMPONENT HERE -->

   <!-- comment from here -->
   <div class="">
     At Your Service
    </div>
   <div class="col-6">
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
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
