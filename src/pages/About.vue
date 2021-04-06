<template>
  <q-page style="background-color:white" padding>
    <banner-pages
      v-if="renderComponent && company"
      :bannerUrl="bannerUrl"
      :pageName="pageName"
      :companyName="company.denomination"
      :key="myKey"
    />
    <BodyAbout :vision="company.vision" :mission="company.mission" />

    <ManagementAbout :listHumanComponent="humanComponents" />
  </q-page>
</template>

<script>
import { humanComponent } from "@/models/humanComponent.js";
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
    ManagementAbout
  },

  data() {
    return {
      bannerUrl: "ImageAbout.png",
      pageName: "About",
      renderComponent: false,
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["humanComponents", "langChanged", "company"])
  },

  async mounted() {
    if (!this.humanComponents) {
      try {
        const response = await humanComponent();
        this.$store.dispatch("rosine/setHumanComponents", response?.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (!this.company) {
      this.$q.loading.show({ message: "Pleace Wait, getting data ..." });
      this.$q.loadingBar.start();
      try {
        const response1 = await company();
        this.$store.dispatch("rosine/setCompany", { ...response1?.data });

        this.myKey = !this.myKey;
      } catch (err1) {
        console.log(err1);
        this.$router.push({ path: "/" });
      } finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    }
    if (this.company) {
      this.renderComponent = true;
    }
  }
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
