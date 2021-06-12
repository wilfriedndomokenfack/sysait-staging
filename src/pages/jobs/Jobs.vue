<template>
  <q-page padding cla>
    <BannerPages
      bannerUrl="ImageJobs.png"
      :pageName="$t('joins')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain column">
      <PageDescription class="col" :descriptionProp="pageDescription" @description="updatePageDescription" :key="descriptionKey" category="jobs"/>
      <AddElementBtn v-if="isAdmin" class="col" link="newJob" @statusFilter="filterJobs" @searchPatern="filterJobs"/>
      <JobsComponent class="col card_jobs" v-if="renderComponent"   :propJobs="filteredJobs" :key="myKey" />
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import EmptyComponent from "@/components/utils/EmptyComponent.vue";
import PageDescription from "@/components/utils/PageDescription.vue"
import JobsComponent from "@/components/job/JobsComponent.vue"
import AddElementBtn from "@/components/utils/AddElementBtn.vue"

import { mapGetters } from "vuex";
import { isSuperUser } from '@/models/user.js'
import { table_description, sendToTableDescriptions } from "@/models/table_description.js"
import { jobs } from "@/models/job.js"

export default {
  name: 'Jobs',
  components: {
    BannerPages,
    EmptyComponent,
    PageDescription,
    JobsComponent,
    AddElementBtn
  },
  watch: {
    currentUser: {
      immediate: true,
      handler() {
        this.userChanged()
      }
    },
    jobs: {
      immediate: true,
      handler() {
        this.jobsChanged()
      }
    },
  },
  data() {
    return {
      renderComponent: false,
      jobs: [],
      pageDescription: null,
      descriptionKey: 4,
      myKey: 45,
      // editDescription: false,
      filteredJobs: [],
      model: null,
      isAdmin: false

    };
  },
  async mounted(){

    if(!this["wilfried/jobsPageDescription"]){
      await this.getPageDescription()
    }

    if(!this["wilfried/jobs"]){
      await this.getJobs()
    }
    this.jobs = this["wilfried/jobs"]
    this.pageDescription = this["wilfried/jobsPageDescription"]

    if(this.jobs) this.filterJobs([])
    this.renderComponent = true
  },
  computed: {
    ...mapGetters(["company", "wilfried/jobs", "wilfried/jobsPageDescription", "currentUser"])
  },
  methods: {
    async userChanged(){
      this.isAdmin = await isSuperUser()
      this.myKey++;
    },
    jobsChanged(){
      this.jobs = this["wilfried/jobs"];
      this.filterJobs(this.model)

    },
    async updatePageDescription(description){
      const response = await sendToTableDescriptions(description)
      if(response){
        this.pageDescription = response
        this.descriptionKey ++
      }
    },
    async getPageDescription(){
      this.$q.loading.show();
      try{
        const response = await table_description("jobs");
        this.pageDescription = response?.data
        this.$store.dispatch("wilfried/setJobsPageDescription", { ...response?.data } );
      }catch(e){
        this.pageDescription = null
      }finally {
        this.$q.loading.hide();
      }
    },
    async getJobs(){
      this.$q.loading.show();
      try {
        const response = await jobs();
        // response.data = [];
        this.$store.dispatch("wilfried/setJobs", response?.data);
        this.myKey = !this.myKey;
      } catch (e) {
        netWorkError(this.$t("netWorkErrorMSG") + " " + e);
        this.$router.push({ name: this.previousRoute });
      } finally {
        this.$q.loading.hide();
      }
    },

    filterJobs(model = null){

      if(!model || !this.jobs){
        this.filteredJobs = this.jobs
        this.myKey = !this.myKey;
        return
      }
      let isArray = Array.isArray(model)
      this.model = model
      let localJobs = [...this.jobs]

      if(isArray && model?.length > 0){
        localJobs = localJobs?.filter(
          v => model.indexOf(parseInt(v.status)) > -1
      )

      }else if(!isArray && model?.length > 0){

        const needle = model.toLowerCase() ?? ""
        localJobs = localJobs?.filter(
          v => v.job_cod?.toLowerCase().indexOf(needle) > -1
        )
      }

      this.filteredJobs = localJobs
      this.myKey = !this.myKey;
    }
  }
}
</script>

<style lang="scss" >
.card_jobs {
  width: 100%;
  // @media (min-width: $breakpoint-md-min){
  //   width: 500px;
  // }
  // @media (max-width: $breakpoint-sm-max){
  //   width: 100%;
  // }
}

.good{
  width: 100%;
}

</style>
