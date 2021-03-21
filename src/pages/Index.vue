<template>
  <q-page class="flex-center row">
    <Banner class="col-12" v-if="renderBanner" :company="company" />
    <Technologies class="col-12" v-if="renderTechnologies" :tecnologies="tecnologies" :key="myKey"/>
    <Planing class="col-12" v-if="renderPartners" :partners="partners" />
  </q-page>

</template>

<script>
import Banner from "@/components/home/Banner.vue";
import Technologies from "@/components/home/Technologies.vue";
import Planing from "../components/home/Planing.vue";
import { technologies as allTecnologies  } from "@/models/technology.js"
import { partners as allPartners  } from "@/models/partner.js"



import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  components: {
    Banner,
    Technologies,
    Planing,
  },
  data() {
    return {
      partners: null,
      renderBanner: false,
      renderTechnologies: false,
      renderPartners: false,
      myKey: 0
    };
  },
  async mounted() {
    this.partners = this['wilfried/partners']

    if(this.company){
      this.renderBanner = true
    }

    if(!this.tecnologies){
      this.getTecnologies()
    }

    if(!this.partners){
      this.getPartners()
    }


  },
  computed: {
    ...mapGetters(
      [
        'company',
        "previousRoute",
        'tecnologies',
        'wilfried/partners'
      ]),
  },
  methods: {
    async getTecnologies(){
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try{
        const response = await allTecnologies();
         //response.data = [];
        this.$store.dispatch("wilfried/setTecnologies", response?.data);
        if(response?.data.length > 0 ) this.renderTechnologies = true
        this.myKey = !this.myKey
      }catch(err){
        this.$router.push({ name: 'notAvailable' });
      }finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    },

    async getPartners(){
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try{
        const response = await allPartners();
         //response.data = [];
        this.$store.dispatch("wilfried/setPartners", response?.data);
        if(response?.data.length > 0 ) this.renderPartners = true
      }catch(err){
        this.$router.push({ name: 'notAvailable' });
      }finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
