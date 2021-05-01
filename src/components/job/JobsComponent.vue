<template>
  <div>
    <div v-if="localJobs && localJobs.length > 0" class="q-pa-md row items-center q-gutter-md justify-center">

      <div v-for="job in localJobs" class="col-12">
        <JobComponent :jobProp="job" class="text-center"/>
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
  name: 'JobsComponent',
  props: ['propJobs'],
  components: {
    JobComponent,
    EmptyComponent
  },

  data () {
    return {
      localJobs: null
    }
  },
  mounted(){
    this.filterJobs()
  },

  methods: {
    async filterJobs(){
      this.localJobs = await isSuperUser() ? this.propJobs : this.propJobs?.filter(v => v.status == "4")
    }
  }
}
</script>

