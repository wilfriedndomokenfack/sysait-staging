<template>
  <q-page padding >
    <BannerPages
        bannerUrl="ImageTraining.png"
        pageName="New training course"
        :companyName="company.denomination"
      />
      <TrainingForm @form="saveForm"/>

  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import TrainingForm from "@/components/training/TrainingForm.vue";
import { sendToTranings }from "@/models/training.js"
import { mapGetters } from "vuex";
export default {
  name: 'NewTrainingPage',
  components: {
    BannerPages,
    TrainingForm
  },
  computed: {
    ...mapGetters(["company", "previousRoute"])
  },
  methods: {
    async saveForm(form){
      console.log(form)
      let response = await sendToTranings(form)

      this.$store.dispatch("wilfried/addTraining", { ...response });
      this.$router.push({ path: "/training"})
    }
  }
}
</script>
