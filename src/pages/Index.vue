<template>
  <q-page class="flex-center row">
   <Banner class="col-12"/>
   <Technologies class="col-12"/>
   <Planing class="col-12"/>
  </q-page>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import Technologies from '@/components/home/Technologies.vue'
import Planing from '../components/home/Planing.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    Banner,
    Technologies,
    Planing,
  },
  computed: {
    ...mapGetters(
      [
        'copmany',

      ]),
  },
}
</script>
