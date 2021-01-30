<template>
  <q-layout class="bg-grey-1">

    <Header v-on:lang="updateLang" />
<!-- class="fit row wrap justify-center items-start content-start" -->
    <q-page-container class="" >

      <router-view class="fit row wrap items-start content-start"/>
      <Breadcrumbs class="breadcrumbs" floating/>
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { company } from '@/models/company'
import { mapGetters } from 'vuex'
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";

export default {
  name: 'MyLayout',
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {

    }
  },
  mounted(){
    /* if(!this.company){
      this.getCompany()
    }*/
    this.propCompany = { ...this.company }
  },
  computed: {
    ...mapGetters(
      [
        'company',

      ]),
  },
  methods: {
   async getCompany(){
        let temp = null
        alert("dentro")
        try{
            alert("prima")
            const response = await company()
            alert("dopo")
            if(response?.data?.length > 0) temp = { ...response.data[0] }
        }catch(err){
            notify('red', 'get company error! ' + err)
        }

        store.dispatch("setCompany", { ...temp} );
    },
    updateLang(){
       store.dispatch("setLang" );
    }
  }

}
</script>

<style lang="sass">
</style>
