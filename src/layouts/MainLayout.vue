<template>
  <div class="">
    <q-layout view="hHh LpR lfr">
      <Header />

      <q-page-container class="">
        <transition appear name="allPages">
          <router-view class="fit row wrap items-start content-start" />
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
      drawerLeft: false,
      drawerRight: false
    };
  },
  mounted() {
    /* if(!this.company){
      this.getCompany()
    }*/
    this.propCompany = { ...this.company };
  },
  computed: {
    ...mapGetters(["company"])
  },
  methods: {
    async getCompany() {
      let temp = null;
      alert("dentro");
      try {
        alert("prima");
        const response = await company();
        alert("dopo");
        if (response?.data?.length > 0) temp = { ...response.data[0] };
      } catch (err) {
        //notify("red", "get company error! " + err);
        console.log("red", "get company error! " + err);
      }

      store.dispatch("setCompany", { ...temp });
    },
    updateLang() {
      store.dispatch("setLang");
    }
  }
};
</script>

<style lang="scss" scoped>
.allPages-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.allPages-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
