<template>
  <div class="q-pa-md row items-start q-gutter-md justify-between">
    <div v-for="training in propTrainings" >
      <TrainingComponent :trainingProp="training" />
    </div>
  </div>
</template>

<script>
import TrainingComponent from "@/components/training/TrainingComponent.vue";
export default {
  name: 'Trainings',
  props: ['propTrainings'],
  components: {
    TrainingComponent,
  },
  data () {
    return {}
  }
}
</script>

