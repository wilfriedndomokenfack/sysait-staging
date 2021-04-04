<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div>
      {{ descriptionProp }}
    </div>
    <div v-for="training in propTrainings" >
      <TrainingComponent :trainingProp="training" />
    </div>
  </div>
</template>

<script>
import TrainingComponent from "@/components/training/TrainingComponent.vue";
export default {
  name: 'Trainings',
  props: ['propTrainings', 'descriptionProp'],
  components: {
    TrainingComponent,
  },
  data () {
    return {}
  }
}
</script>
