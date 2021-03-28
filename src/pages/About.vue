<template>
  <q-page style="background-color:white" padding>
    <banner-pages
      v-if="renderComponent && company"
      :bannerUrl="bannerUrl"
      :pageName="$t('about')"
      :companyName="company.denomination"
      :key="myKey"
    />
    <BodyAbout v-if="renderAll()" :vision="company.vision" :mission="company.mission" />

    <ManagementAbout v-if="renderAll()" :listHumanComponent="humanComponents" />
    <EmptyComponent v-if="!renderAll()" />

  </q-page>
</template>

<script>
import { humanComponent } from "@/models/humanComponent.js";
import EmptyComponent from "@/components/EmptyComponent.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { company } from "@/models/company.js";
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
      renderComponent: false,
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["humanComponents", "langChanged", "company", "previousRoute"])
  },

  async mounted() {
    if (!this.humanComponents) {
      await this.getHumanComponents();
    }


  },
  methods: {
    renderAll(){
      return (this.humanComponents && this.humanComponents.length > 0 )
    },
    async getHumanComponents() {
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try {
        let response = await humanComponent();
        // response.data = [];
        this.$store.dispatch("rosine/setHumanComponents", response?.data);
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
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
}
.image_paddingless {
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -20px;
}
.container {
  position: relative;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 25px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -20px;
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
p {
  text-align: justify;
}
hr.separator {
  border: 1px solid $sysait_cerulean;
}
</style>
