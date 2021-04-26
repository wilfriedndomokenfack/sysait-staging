<template>
  <div>
    <q-card class="my-card card1" :class="{good: !$q.platform.is.desktop}">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">
          <div class="q-pl-md">
            <span class="text-bold">{{ jobProp.denomination.toUpperCase() }}</span>  REF-{{jobProp.job_cod}}
          </div>
          <div>

          </div>
        </div>
      </q-card-section>

      <q-card-actions class="column ">
        <div class="col text-left q-pa-md" v-html="jobProp.description">
        </div>
        <div class="col self-end q-pa-md" >
          <q-btn
            class="bg_sysait_cerulean text-white dense "
            no-caps
            :label="$t('consultJob')"
            @click="redirect('job', jobProp.id  )"

          />
        </div>

      </q-card-actions>
      <q-separator color="primary" size="5px"/>
      <q-card-actions align="right" v-if="isAdmin">
        <q-btn
          :label="status"
          outline
          color="red"
          dense
          :color="color"
          padding="sm"
        />

        <q-btn
          @click="redirect('editJob', jobProp.id  )"
          outline
          color="primary"
          round dense
          icon="fa fa-pen"
          padding="sm"
        />

        <q-btn
          @click="deleteJob()"
          outline
          color="primary"
          round dense
          icon="fa fa-trash"
          padding="sm"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { isSuperUser } from '@/models/user.js'
import { mapGetters } from "vuex";
import { Constants } from '@/models/utils/common.js'
import { deleteDBTraining } from "@/models/training.js"
import { isEnrollToTraining } from "@/models/user.js"
import axios from "axios";
export default {
  name: 'Job',
  props: ['jobProp'],
  data () {
    return {
      imKey: 0,
      status: null,
      color: null,
      isAdmin: false,
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  async mounted(){
    this.isAdmin = await isSuperUser()
    this.status = Constants.STATUS.find(v => v.value == this.jobProp.status)?.label
    this.color = Constants.STATUS.find(v => v.value == this.jobProp.status)?.color
  },
  methods: {
    isEnrollToTraining,
    openPage(link){
      window.open(link, '_blank');
    },


    deleteJob(){
      this.$q.dialog({
        title: 'Confirmazione',
        message: `Are you sure you want to delete ${this.jobProp.denomination.toUpperCase() } ? This action wil permanently delete this post from DATABASE. You may edit and change status to delete to maintaint the post in the DB`,
        cancel: true,
        persistent: true,
        color: "red",
        ok: "delete"
      }).onOk(() => {

        //deleteDBTraining(this.trainingProp?.id)
        //this.$store.dispatch("wilfried/removeTraining", this.trainingProp );
      })
    },
    redirect(link, id){
      this.$router.push({ name: link, params: { job_id: id }})
    },
  }
}
</script>

<style lang="scss" scoped>
.card1 {
  width: 100%;
}

</style>
