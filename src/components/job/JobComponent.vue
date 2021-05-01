<template>
  <div  class="">
     <q-card class="my-card " >
      <q-card-section class="bg-primary text-white text-left text-h6">
        <span class="text-bold q-pl-md ">{{ jobProp.denomination.toUpperCase() }}</span>  REF-{{jobProp.job_cod.toUpperCase() }}
      </q-card-section>

      <q-card-actions class="column justify-between">
        <div class="col  q-pa-md self-start" v-html="jobProp.description" style="">
        </div>
        <div class="col  q-pa-md self-end" >
          <q-btn
            class="bg_sysait_cerulean text-white dense  "
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
import { deleteDBJob } from "@/models/job.js"
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

        deleteDBJob(this.jobProp?.id)
        this.$store.dispatch("wilfried/removeJob", this.jobProp );
      })
    },
    redirect(link, id){
      this.$router.push({ name: link, params: { job_id: id }})
    },
  }
}
</script>
