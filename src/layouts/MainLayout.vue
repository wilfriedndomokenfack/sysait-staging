<template>
  <q-layout class="bg-grey-1">

    <Header :company="propCompany" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer :company="propCompany"/>
  </q-layout>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCompany } from '@/models/company'

export default {
  name: 'MyLayout',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      propCompany: null
    }
  },
  mounted(){
    if(!this.company){
      this.getCompany()
    }
    this.propCompany = { ...this.company }
  },
  computed: {
    ...mapGetters(
      [
        'company',
      ]),
  },

}
</script>

<style lang="sass">
</style>
