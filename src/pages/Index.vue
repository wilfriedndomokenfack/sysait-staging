<template>
  <q-page class="flex-center">
   <Banner /><br/>
   <Technologies /><br/>
   <Planing />
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
        'company',
      ]),
  },
}
</script>
