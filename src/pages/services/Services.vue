<template>
  <q-page padding>
    <div>
      <BannerPages
        bannerUrl="ImageServices.png"
        :pageName="$t('services')"
        :companyName="companyName"
      />

      <ServicesComponent :propServices="services" :key="myKey" />
      <EmptyComponent v-if="services && services.length == 0" />
    </div>
  </q-page>
</template>

<script>
import ServicesComponent from "@/components/ServicesComponent.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import AlertComponent from "@/components/AlertComponent.vue";
import BannerPages from "@/components/utils/BannerPages.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { services } from "@/models/service.js";
import { mapGetters } from "vuex";
export default {
  name: "Services",
  components: {
    ServicesComponent,
    EmptyComponent,
    AlertComponent,
    BannerPages,
  },
  data() {
    return {
      services: null,
      //bannerUrl: null,
      pageName: null,
      companyName: null,
      myKey: 0,
      myAlert: false,
    };
  },
  computed: {
    ...mapGetters(["michael/services", "company", "previousRoute"]),
  },

  async mounted() {
    if (!this["michael/services"]) {
      await this.getServices();
    }
    this.services = this["michael/services"];
    //this.bannerUrl = "ImageServices.png";
    this.pageName = "SERVICES";
    this.companyName = this.company.denomination;
  },
  methods: {
    async getServices() {
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try {
        const response = await services();
        // response.data = [];
        this.$store.dispatch("michael/setServices", response?.data);
        this.myKey = !this.myKey;
        // notify("green", "Services uploaded successfull");
      } catch (e) {
        netWorkError(this.$t("netWorkErrorMSG") + " " + e);
        this.$router.push({ name: this.previousRoute });
      } finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    },
  },
};
</script>
