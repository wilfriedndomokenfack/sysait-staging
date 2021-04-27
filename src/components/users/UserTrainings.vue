<template>
  <div>
     <q-dialog v-model="model" style="min-width: 500vh; max-height: 100vh">
        <q-card class="q-pr-md" >
          <q-card-section>
            <div class="text-h6">Manage trainings of {{ propUser.first_name.toUpperCase() }} {{ propUser.last_name.toUpperCase() }}</div>
          </q-card-section>
           <q-separator />

          <q-card-section style=" max-height: 50vh" class="scroll" :key="myKey">
            <div class="q-gutter-md row items-start justify-between">
              <q-select
                dense
                class="col-lg-4 col-md-12 col-sm-12 col-xs-12"
                filled
                v-model="selectedTrainingId"
                :options="trainingsOption"

                emit-value
                map-options
                hint="Select training course"

              >
                <template v-slot:after>
                  <q-btn
                    color="primary"
                    v-show="selectedTrainingId"
                    @click="addTrainingUser()"
                    v-close-popup round dense flat
                    icon="fa fa-save"
                  >
                  <q-tooltip :offset="[10, 10]" transition-show="rotate"
                    transition-hide="rotate">
                    Save
                  </q-tooltip>
                </q-btn>
                </template>
              </q-select>

            </div><br>
            <q-separator />
          </q-card-section>


          <q-card-section style=" max-height: 50vh" class="scroll" v-if="propUser.courses.length > 0">
            <div v-for="(training, index) in propUser.courses" :key="index">
              <div class="row justify-between">
                <div class="col-9">
                  {{index+1}} - {{ training.denomination }}
                </div>
                <div class="col-2">
                  <q-btn size="7px" class="text-red" @click="removeTrainingUser(training.id)">
                    remove
                  </q-btn>
                </div>
              </div>


          <q-separator />

            </div>

          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import { trainings, addTraining, removeTraining } from "@/models/training.js"
export default {
  name: 'UserTrainings',
  props: ['openDialog', 'propUser'],
  data () {
    return {
      ok: false,
      model: false,
      trainings: [],
      selectedTrainingId: null,
      myKey: 43,
      trainingsOption: [],
    }
  },
  async mounted(){
    this.model = this.openDialog

    if(!this["wilfried/trainings"]){
      await this.getTrainings()
    }
    this.trainings = this["wilfried/trainings"]

    for(let index in this.trainings){
      const training = this.trainings[index]
      this.trainingsOption.push(
        {label: training.denomination, value: training.id  }
      )
    }

  },
   computed: {
    ...mapGetters(["wilfried/trainings", "currentUser"])
  },
  methods: {
     async getTrainings(){
      this.$q.loading.show();
      try {
        const response = await trainings();
        // response.data = [];

        this.trainings = response?.data
        this.$store.dispatch("wilfried/setTrainings", response?.data);
        this.myKey++;
      } catch (e) {
       console.log("error: " + e)
      } finally {
        this.$q.loading.hide();
      }
    },
    emitData(){
        const trainingData = {
          id: this.propUser.id,
          training: this.trainings.find(v => v.id == this.selectedTrainingId) ?? null
        }
      this.$emit("popopClosed", trainingData)
    },
    async addTrainingUser(){
      const trainingData = {
        id: this.currentUser.id,
        user_id: this.propUser.id,
        course_id: this.selectedTrainingId
      }

      await addTraining(trainingData)
      this.model = false
      this.emitData()

    },
    removeTrainingUser(training_id){
      const trainingData = {
        id: this.currentUser.id,
        user_id: this.propUser.id,
        course_id: training_id
      }
      const training = this.trainings.find(v => v.id == training_id)

      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove ${training.denomination.toUpperCase() }`,
        cancel: true,
        persistent: true,
        color: "red",
        ok: "delete"
      }).onOk( async () => {
        await removeTraining(trainingData)
        const index = this.propUser.courses.indexOf(training)
        this.propUser.courses.splice(index, 1)
      })



    }

  }
}
</script>

