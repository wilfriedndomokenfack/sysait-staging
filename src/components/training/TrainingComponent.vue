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
        <div class="col-11" v-html="trainingProp.description">

        </div>
        <div class="col-1">
          <img v-if="trainingProp.image_path" :src="`training_img/${trainingProp.image_path}`" style="width: 100%" />
          <img v-else="trainingProp.image_path" :src="`training_img/java.png`" style="width: 100%" />
        </div>

      </q-card-actions>
      <q-separator color="primary" size="5px"/>
      <q-card-actions align="right" v-if="currentUser">
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
import { mapGetters } from "vuex";
export default {
  name: 'Training',
  props: ['trainingProp'],
  data () {
    return {}
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    deleteTraining(){
      this.$q.dialog({
        title: 'Confirmazione',
        message: `Are you sure you want to delete ${this.trainingProp.denomination.toUpperCase() } ${this.$t('trainningCourse').toUpperCase() } ?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('training deleted')
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
