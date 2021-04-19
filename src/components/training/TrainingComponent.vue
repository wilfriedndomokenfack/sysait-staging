<template>
  <div>
    <q-card class="my-card card1" :class="{good: !$q.platform.is.desktop}">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6" v-if="$i18n.locale == 'en-us'">
          <strong >{{ trainingProp.denomination.toUpperCase() }}</strong>
          {{ $t('trainningCourse').toUpperCase() }}
        </div>
        <div class="text-h6" v-else>
          {{ $t('trainningCourse').toUpperCase() }}
          <strong>{{ trainingProp.denomination.toUpperCase() }}</strong>
        </div>
      </q-card-section>

      <q-card-actions class="row items-end justify-between">
        <div class="col-11" >
          <div v-html="trainingProp.description">

          </div>
          <div v-if="trainingProp.link_course && (isEnrollToTraining(trainingProp.id) || isAdmin)">
            <q-btn
              @click="openPage(trainingProp.link_course)"
              :label="$t('takeCourse')"
              outline
              color="primary"
              dense

              padding="sm"
            />
          </div>
        </div>

        <div :key="imKey" class="col-1">
          <img alt="IMG" v-if="googImg" :src="`training_img/${trainingProp.image_path}`" style="width: 100%" />
          <img alt="IMG" v-else src="training_img/code.png" style="width: 100%" />
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
          @click="redirect('editTraining', trainingProp.id  )"
          outline
          color="primary"
          round dense
          icon="fa fa-pen"
          padding="sm"
        />

        <q-btn
          @click="deleteTraining()"
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
  name: 'Training',
  props: ['trainingProp'],
  data () {
    return {
      imKey: 0,
      googImg: false,
      status: null,
      color: null,
      isAdmin: false
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  async mounted(){
    this.isAdmin = await isSuperUser()
    this.googImg = await this.getLogoUrl(this.trainingProp.image_path)
    this.status = Constants.STATUS.find(v => v.value == this.trainingProp.status)?.label
    this.color = Constants.STATUS.find(v => v.value == this.trainingProp.status)?.color
  },
  methods: {
    isEnrollToTraining,
    openPage(link){
      window.open(link, '_blank');
    },
    async getLogoUrl(club) {
      let resp = false
      let path = `${window.location.origin}/training_img/${club}`

      try{
        let response = null
        if(club) response = await axios.get(path);
        if(response?.status == 200){
          resp = true
        }
      }catch(e){
        resp = false
      }
      return resp;
    },

    deleteTraining(){
      this.$q.dialog({
        title: 'Confirmazione',
        message: `Are you sure you want to delete ${this.trainingProp.denomination.toUpperCase() } ${this.$t('trainningCourse').toUpperCase() } ? This action wil permanently delete this post from DATABASE. You may edit and change status to delete to maintaint the post in the DB`,
        cancel: true,
        persistent: true,
        color: "red",
        ok: "delete"
      }).onOk(() => {

        deleteDBTraining(this.trainingProp?.id)
        this.$store.dispatch("wilfried/removeTraining", this.trainingProp );
      })
    },
    redirect(link, id){
      this.$router.push({ name: link, params: { training_id: id }})
    },
  }
}
</script>

<style lang="scss" scoped>
.card1 {
  width: 525px;
  // @media (min-width: $breakpoint-md-min){
  //   width: 500px;
  // }
  // @media (max-width: $breakpoint-sm-max){
  //   width: 100%;
  // }
}

.good{
  width: 100%;
}

</style>
