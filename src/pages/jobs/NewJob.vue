<template>
  <q-page padding >
    <BannerPages
        bannerUrl="ImageJobs.png"
        pageName="New job"
        :companyName="company.denomination"
      />
      <JobForm @form="saveForm"/>

  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import JobForm from "@/components/job/JobForm.vue";
import { sendToTranings }from "@/models/training.js"
import { mapGetters } from "vuex";
export default {
  name: 'NewJobPage',
  components: {
    BannerPages,
    JobForm
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
