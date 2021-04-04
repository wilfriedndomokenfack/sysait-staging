<template>
  <q-page style="background-color:white" padding>
    <banner-pages
      :bannerUrl="bannerUrl"
      :pageName="$t('about')"
      :companyName="company.denomination"
    />
    <div v-if="renderAll() && renderComponent">
      <BodyAbout :vision="company.vision" :mission="company.mission" />
      <ManagementAbout v-if="renderAll() && renderComponent" :listHumanComponent="humanComponents" />
    </div>
    <EmptyComponent v-else-if="renderComponent" />
  </q-page>
</template>

<script>
import { humanComponent } from "@/models/humanComponent.js";
import EmptyComponent from "@/components/EmptyComponent.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";
import BodyAbout from "@/components/about/BodyAbout.vue";
import ManagementAbout from "@/components/about/ManagementAbout.vue";
export default {
  name: "About",
  components: {
    BannerPages,
    BodyAbout,
    ManagementAbout,
    EmptyComponent
  },

  data() {
    return {
      bannerUrl: "ImageAbout.png",
      renderComponent: false
    };
  },
  computed: {
    ...mapGetters(["humanComponents", "company", "previousRoute"])
  },

  async mounted() {
    if (!this.humanComponents) {
      await this.getHumanComponents();
    }
    this.renderComponent = true

  },
  methods: {
    renderAll(){
      return (this.humanComponents && this.humanComponents?.length > 0)
    },
    async getHumanComponents() {
      this.$q.loading.show();
      try {
        let response = await humanComponent();
        this.$store.dispatch("rosine/setHumanComponents", response?.data);

      } catch (e) {
        netWorkError(this.$t("netWorkErrorMSG") + " " + e);
        this.$router.push({ name: this.previousRoute });
      } finally {
        this.$q.loading.hide();
      }
    },
  },
};
</script>
