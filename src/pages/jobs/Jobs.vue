<template>
  <q-page padding>
    <BannerPages
      bannerUrl="ImageJobs.png"
      :pageName="$t('joins')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain">
      <PageDescription :descriptionProp="pageDescription" @description="updatePageDescription" :key="descriptionKey" category="jobs"/>
      <div>
        <AddElementBtn link="newJob" @statusFilter="filterJobs"/>
      </div>
      <div v-if="renderComponent">
        <JobsComponent  :propJobs="filteredJobs"  :key="myKey"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import PageDescription from "@/components/utils/PageDescription.vue"
import JobsComponent from "@/components/job/JobsComponent.vue"
import AddElementBtn from "@/components/utils/AddElementBtn.vue"

import { mapGetters } from "vuex";
import { table_description, sendToTableDescriptions } from "@/models/table_description.js"

export default {
  name: 'Jobs',
  components: {
    BannerPages,
    EmptyComponent,
    PageDescription,
    JobsComponent,
    AddElementBtn
  },
  data() {
    return {
      renderComponent: true,
      jobs: [],
      pageDescription: null,
      descriptionKey: 4,
      myKey: 0,
      // editDescription: false,
      filteredJobs: [],
      model: null

    };
  },
  async mounted(){
    if(!this["wilfried/jobsPageDescription"]){
      await this.getPageDescription()
    }
    this.pageDescription = this["wilfried/jobsPageDescription"]
  },
  computed: {
    ...mapGetters(["company", "wilfried/jobs", "wilfried/jobsPageDescription", "currentUser"])
  },
  methods: {
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

    filterJobs(model = []){
      this.model = model
      if(model?.length > 0){
        this.filteredJobs = this.jobs?.filter(
          v => model.indexOf(parseInt(v.status)) > -1
        )
      }else{
        this.filteredJobs = this.jobs
      }
      this.myKey = !this.myKey;
    }
  }
}
</script>
