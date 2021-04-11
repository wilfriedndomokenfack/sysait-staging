<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6"> <strong>{{ trainingProp.denomination.toUpperCase() }}</strong> TRAINING COURSE </div>
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
    redirect(link, id){
      this.$router.push({ name: link, params: { training_id: id }})
    },
  }
}
</script>

<style lang="scss" scoped>
.my-card{
  width: 450px;
}

</style>
