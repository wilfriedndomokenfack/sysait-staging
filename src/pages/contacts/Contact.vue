<template>
  <q-page padding>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="$t('contact')"
        :companyName="companyName"
      />
      <ContactComponent/>
      <ContactFormComponent></ContactFormComponent>
    

  </q-page>
</template>

<script>
import { humanComponent } from "@/models/humanComponent.js";
import EmptyComponent from "@/components/EmptyComponent.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";
import ContactComponent from "@/components/contact/ContactComponent.vue";
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue";
import ContactInfoComponent from "@/components/contact/ContactInfoComponent.vue";
export default {
  name: "contact",
  components: {
    BannerPages,
    EmptyComponent,
    ContactComponent,
    ContactInfoComponent,
    ContactFormComponent
  },
  data() {
    return {
      bannerUrl: null,
      pageName: null,
      companyName: null,
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["company", "previousRoute"]),
  },
  async mounted() {
    this.bannerUrl = "ImageContact.png";
    this.companyName = this.company.denomination;
  }
};
</script>
