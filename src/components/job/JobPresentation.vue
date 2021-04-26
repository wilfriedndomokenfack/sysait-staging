<template>
  <div class="column">
    <div class=" col text-h6 text-bold job-denomination">
        {{ jobProp.denomination.toUpperCase() }}  <span class="text-primary">REF-{{jobProp.job_cod}}</span>
    </div>
    <div class="col text-right q-pb-xl">
      <span class="bg-primary q-pa-xs text-white">Candidate</span>
    </div>
    <div class="col">
        Published on <span class="q-pt-md text-bold">{{ jobProp.published_at }}</span>
    </div>
    <div class="col">
      <ul>
        <li color="primary" v-if="jobProp.targetCustomer">{{ jobProp.targetCustomer }}</li>
        <li v-if="jobProp.profile">{{ jobProp.profile }}</li>
      </ul>
    </div>

    <div class="col" v-if="jobProp.targetCustomerDescription">
        <div class="text-bold">
          TARGET CUSTOMER
        </div>
        <div v-html="jobProp.targetCustomerDescription">
        </div>
    </div>

     <div class="col q-pt-md" v-if="jobProp.description">
        <div class="text-bold">
          JOB DESCRIPTION
        </div>
        <div v-html="jobProp.description">
        </div>
    </div>

     <div class="col q-pt-md" v-if="jobProp.requirements">
        <div class="text-bold">
          REQUIREMENTS AND SKILLS
        </div>
        <div v-html="jobProp.requirements">
        </div>
    </div>
     <div class="col q-pt-md" v-if="jobProp.offer">
        <div class="text-bold">
          THE OFFER
        </div>
        <div>
          {{ jobProp.offer }}
        </div>
    </div>
     <div class="col q-pt-md q-pb-xl job-note" v-if="jobProp.note">
        <div class="text-bold">
          NOTE
        </div>
        <div v-html="jobProp.note"></div>
    </div>
     <div class="col text-right q-pb-xl">
      <span class="bg-primary q-pa-xs text-white">Candidate</span>
    </div>


  </div>
</template>

<script>
export default {
  name: 'JobPresentation',
  props: ["jobProp"],
  data () {
    return {}
  }
}
</script>

<style lang="scss" >
.job-denomination, .job-note{
  border-bottom: 2px solid $primary
}
</style>
