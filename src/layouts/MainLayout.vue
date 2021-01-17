<template>
  <q-layout class="bg-grey-1">
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MyLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
</style>
