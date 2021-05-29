<template>
  <q-page padding>
    <BannerPages
      bannerUrl="ImageJobs.png"
      :pageName="$t('joins')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain">
      <JobPresentation
        :jobProp="job"
        v-if="job"
        :key="myKey"
        @formcontact="emitcontactform"
      />
      <ConfirmationContactComponent
      v-if="confirmMessage"
      :propTitle="$t('confirm')"
      :propMessage="confirmMessage"
      :key="myKey"
    />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";
import JobPresentation from "@/components/job/JobPresentation.vue";
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue";
import ApplyJobComponent from "@/components/job/ApplyJobComponent.vue";
import { sendcontactform } from "@/models/contact/FormContact.js";
import ConfirmationContactComponent from "@/components/contact/ConfirmationContactComponent.vue";
export default {
  name: "JobPage",
  components: {
    BannerPages,
    JobPresentation,
    ContactFormComponent,
    ApplyJobComponent,
    ConfirmationContactComponent
  },
  data() {
    return {
      jobId: this.$route.params.job_id,
      jobs: null,
      job: null,
      myKey: 0,
      confirmMessage: null,
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
      this.job = this.jobs?.find(v => v.id === this.jobId);
      if (!this.job) {
        this.$router.push({ name: "jobs" });
      } else {
        this.myKey = !this.myKey;
      }
    },
    async emitcontactform(contact) {
      this.confirmMessage = await sendcontactform(contact);
      this.myKey++;
    }
  }
};
</script>
