<template>
  <div class="font_arial">
    <q-layout view="hHh LpR lfr" v-if="renderComponents" >
       <Header  />

    <q-page-container >
      <transition appear name="allPages">
      <router-view class="fit row items-start content-start" />
      </transition>
    </q-page-container>
    <Footer />
    </q-layout>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { company } from "@/models/company";
import { mapGetters } from "vuex";
//import { notify } from "@/models/utils/notifyUser";
import store from "@/store";

export default {
  name: "MyLayout",
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      renderComponents: false
    };
  },
  async mounted() {
    if(!this.company){
      await this.getCompany()
    }
    this.renderComponents = true
    //this.propCompany = { ...this.company };
  },
  computed: {
    ...mapGetters(["company"])
  },
  methods: {
    async getCompany() {
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try{
        const response = await company();
         //response.data = [];
        if(response?.data.length === 0 ) this.$router.push({ name: 'notAvailable' });
        this.$store.dispatch("wilfried/setCompany", response?.data[0]);
      }catch(err){
        this.$router.push({ name: 'notAvailable' });
      }finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    },
    updateLang() {
      store.dispatch("setLang");
    }
  }
};
</script>

<style lang="scss" scoped>
  .allPages-enter-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .allPages-enter{
    transform: translateX(10px);
    opacity: 0;
  }


</style>
