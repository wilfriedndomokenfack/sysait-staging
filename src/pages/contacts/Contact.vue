<template>
  <q-page padding>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="$t('contact')"
        :companyName="companyName"
      />
       <div class="column constrain justify-between q-gutter-md q-pb-xl q-t-xl">
        <MessageContactComponent class="bg-primary text-center q-pa-md text-white"/>
        <InfoMapComponent :key="myKey" @formcontact="emitcontactform" class=" text-center"/>
      </div>
      <!--<MessageContactComponent/>
       <ContactFormComponent></ContactFormComponent> -->
    

  </q-page>
</template>

<script>
import { sendcontactform } from '@/models/contact/FormContact.js';
import EmptyComponent from "@/components/utils/EmptyComponent.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";
import MessageContactComponent from "@/components/contact/MessageContactComponent.vue";
import InfoMapComponent from "@/components/contact/InfoMapComponent.vue";
import ContactInfoComponent from "@/components/contact/ContactInfoComponent.vue";
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue"; 



export default {
  name: "contact",
  components: {
    BannerPages,
    EmptyComponent,
    MessageContactComponent ,
    ContactInfoComponent,
    ContactFormComponent,
    InfoMapComponent 
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
  },
  methods: {
    async emitcontactform(contact) {
       // console.log("page Contact",contact);
        await sendcontactform(contact);
        this.myKey++;
       //this.$emit('formcontact', this.contact)
    }
  }
};
</script>
