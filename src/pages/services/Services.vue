<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="pageName"
        :companyName="companyName"
      />
      <ServicesComponent :propServices="services" :key="myKey" />
    </div>
  </q-page>
</template>

<script>
import ServicesComponent from "@/components/ServicesComponent.vue";
import BannerPages from "@/components/utils/BannerPages.vue";
import { notify } from "@/models/utils/notifyUser";
import { services } from "@/models/service.js";
import { mapGetters } from "vuex";
export default {
  name: "Services",
  components: {
    ServicesComponent,
    BannerPages,
  },
  data() {
    return {
      services: null,
      bannerUrl: null,
      pageName: null,
      companyName: null,
      myKey: 0,
    };
  },
  computed: {
    ...mapGetters(["michael/services", "company"]),
  },

  async mounted() {
    if (!this["michael/services"]) {
      await this.getServices();
    }
    this.services = this["michael/services"];
    this.bannerUrl = "ImageServices.png";
    this.pageName = "SERVICES";
    this.companyName = this.company.denomination;
  },
  methods: {
    async getServices() {
      this.$q.loading.show({ message: "Getting data, Pleace Wait ..." });
      this.$q.loadingBar.start();
      try {
        const response = await services();
        this.$store.dispatch("michael/setServices", response?.data);
        this.myKey = !this.myKey;
        //notify("green", "Services uploaded successfull");
      } catch (e) {
        notify("red", "upload services failed " + e);
        this.$router.push({ path: "/" });
      } finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    },
  },
};
</script>
