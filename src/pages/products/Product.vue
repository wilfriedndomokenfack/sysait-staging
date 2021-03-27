<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="pageName"
        :companyName="companyName"
      />
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
export default {
  name: "Product",
  components: {
    BannerPages
  },
  data() {
    return {
      bannerUrl: null,
      pageName: null,
      companyName: null,
      myKey: 0
    };
  },
  async mounted() {
    /*  if (!this["rosine/services"]) {
      await this.getServices();
    } 
    this.services = this["michael/services"];*/
    this.bannerUrl = "ImageProducts.png";
    this.pageName = "Product";
    this.companyName = this.company.denomination;
  }
};
</script>
