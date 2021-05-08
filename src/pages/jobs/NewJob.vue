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
import { sendToJobs }from "@/models/job.js"
import { mapGetters } from "vuex";
import moment from "moment"
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
      
      if(form.status == '4') form.published_at = moment()
      let response = await sendToJobs(form)

      this.$store.dispatch("wilfried/addJob", { ...response });
      this.$router.push({ path: "/jobs"})
    }
  }
}
</script>
