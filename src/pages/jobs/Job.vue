<template>
  <q-page padding>
    <BannerPages
      bannerUrl="ImageJobs.png"
      :pageName="$t('joins')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain">
      <JobPresentation :jobProp="job" v-if="job" :key="myKey"/>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";
import JobPresentation from "@/components/job/JobPresentation.vue";
export default {
  name: 'JobPage',
  components: {
    BannerPages,
    JobPresentation,
  },
  data() {
    return {
      jobId: this.$route.params.job_id,
      jobs: null,
      job: null,
      myKey: 0
    };
  },
  async mounted() {
    if (!this["wilfried/jobs"]) {
      this.$router.push({ name: "jobs" });
    }
    this.jobs = this["wilfried/jobs"];
    this.getJob();
  },
   computed: {
    ...mapGetters(["company", "wilfried/jobs", "currentUser"])
  },
  methods: {
    getJob() {
      this.job = this.jobs?.find(v => v.id === this.jobId)
      if (!this.job) {
        this.$router.push({ name: "jobs" });
      }
      else{
        this.myKey = !this.myKey;
      }
    }
  }
}
</script>
