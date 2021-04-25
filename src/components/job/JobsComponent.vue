<template>
  <div>
    <div v-if="localJobs.length > 0" class="q-pa-md row items-start q-gutter-md justify-between">
      <div v-for="job in localJobs" >
        <JobComponent :trainingProp="job" />
      </div>
    </div>
    <div v-else>
      <EmptyComponent message="emptyJobs"/>
    </div>
  </div>
</template>

<script>
import JobComponent from "@/components/job/JobComponent.vue";
import { isSuperUser } from '@/models/user.js'
import EmptyComponent from "@/components/EmptyComponent.vue";
export default {
  name: 'Jobs',
  props: ['propJobs'],
  components: {
    JobComponent,
    EmptyComponent
  },

  data () {
    return {
      localJobs: []
    }
  },
  mounted(){
    this.filterJobs()
  },

  methods: {
    filterJobs(){
      this.localJobs = isSuperUser() ? this.propJobs : this.propJobs?.filter(v => v.status == "4")
    }
  }
}
</script>

