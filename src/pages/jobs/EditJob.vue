<template>
  <q-page padding >
    <BannerPages
        bannerUrl="ImageJobs.png"
        pageName="Edit Job"
        :companyName="company.denomination"
      />
    <JobForm :key="myKey" v-if="renderForm && job " @form="saveForm" :jobProp="job"/>

  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import JobForm from "@/components/job/JobForm.vue";
import { sendToJobs }from "@/models/job.js"
import { mapGetters } from "vuex";
import { notify } from "@/models/utils/notifyUser"
import { deepCopy } from '@/models/utils/common.js'
import moment from "moment"
export default {
  name: 'EditJobPage',
  components: {
    BannerPages,
    JobForm
  },
  data() {
    return {
      job: null,
      job_id: null,
      jobs: null,
      myKey: 0,
      renderForm: false
    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/jobs"])
  },
  mounted(){
    this.job_id = this.$route.params.job_id
    if(!this["wilfried/jobs"] || !this.job_id){
        this.$router.push({ path: '/jobs' })
        notify('red', 'Jobs are not present or job ID is not define')
    }
    this.jobs = this["wilfried/jobs"]
    this.setupJob()
  },
  methods: {
    setupJob(){
      this.$q.loading.show({ message: "Pleace Wait ..." })
      let tempJob = this.jobs?.find(v => v.id == this.job_id)

      this.job = deepCopy(tempJob)

      this.renderForm = true
      this.myKey = !this.myKey
      this.$q.loading.hide()
    },
     async saveForm(form){
     if(form.status == '4' && !form.published_at) form.published_at = moment()
     if(form.status != '4') form.published_at = null

      const response = await sendToJobs(form)

      this.$store.dispatch("wilfried/updateJob", { ...response });
      this.$router.push({ path: "/jobs"})
    }
  }
}
</script>
