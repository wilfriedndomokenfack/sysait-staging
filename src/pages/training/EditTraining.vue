<template>
  <q-page padding >
    <BannerPages
        bannerUrl="ImageTraining.png"
        pageName="Edit training course"
        :companyName="company.denomination"
      />
    <TrainingForm :key="myKey" v-if="renderForm && training " @form="saveForm" :trainingProp="training"/>

  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import TrainingForm from "@/components/training/TrainingForm.vue";
import { sendToTranings }from "@/models/training.js"
import { mapGetters } from "vuex";
import { notify } from "@/models/utils/notifyUser"
import { deepCopy } from '@/models/utils/common.js'
export default {
  name: 'EditTrainingPage',
  components: {
    BannerPages,
    TrainingForm
  },
  data() {
    return {
      training: null,
      training_id: null,
      trainings: null,
      myKey: 0,
      renderForm: false
    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/trainings"])
  },
  mounted(){
    this.training_id = this.$route.params.training_id
    if(!this["wilfried/trainings"] || !this.training_id){
        this.$router.push({ path: '/courses' })
        notify('red', 'Tranongs are not present or training ID is not defint')
    }
    this.trainings = this["wilfried/trainings"]
    this.setupTraining()
  },
  methods: {
    setupTraining(){
      this.$q.loading.show({ message: "Pleace Wait ..." })
      let tempTraining = this.trainings.filter(v => v.id === this.training_id)[0]
      this.training = deepCopy(tempTraining)
      this.myKey = !this.myKey
      this.renderForm = true
      this.$q.loading.hide()
    },
     async saveForm(form){
      console.log(form)
      let response = await sendToTranings(form)

      this.$store.dispatch("wilfried/updateTraining", { ...response });
      this.$router.push({ path: "/training"})
    }
  }
}
</script>
