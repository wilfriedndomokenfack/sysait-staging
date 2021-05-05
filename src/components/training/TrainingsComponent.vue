<template>
  <div v-if="renderContent">
    <div v-if="localTrainings.length > 0" class="q-pa-md row items-start q-gutter-md justify-between">
      <div v-for="training in localTrainings" >
        <TrainingComponent :trainingProp="training" />
      </div>
    </div>
    <div v-else>
      <EmptyComponent message="emptyCourse"/>
    </div>
  </div>
</template>

<script>
import TrainingComponent from "@/components/training/TrainingComponent.vue";
import { isSuperUser } from '@/models/user.js'
import EmptyComponent from "@/components/utils/EmptyComponent.vue";
export default {
  name: 'TrainingsComponent',
  props: ['propTrainings'],
  components: {
    TrainingComponent,
    EmptyComponent
  },

  data () {
    return {
      localTrainings: [],
      renderContent: false
    }
  },
  created(){
    this.filterTrainings()
  },

  methods: {
    async filterTrainings(){
      this.localTrainings = await isSuperUser() ? this.propTrainings : this.propTrainings?.filter(v => v.status == "4")
      this.renderContent = true
    }
  }
}
</script>

