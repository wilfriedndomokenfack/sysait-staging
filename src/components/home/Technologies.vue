<template>
  <q-page-container >
    <q-page class="text-center padding_header">  <!-- flex flex-center-->
      <!-- page content -->
      <div class="text-h5 text-bold q-mt-md service flex flex-center">
        {{ atYoutservices }}
      </div>
       <div class="row q-my-lg">
        <div class="col-md-3 col-sm-6 col-xs-12 q-pb-lg" v-for= "(tecnologie, index) in tecnologies" :key="index">
            <div class="text-info " style="font-size: 2em">
             <q-icon :name="tecnologie.icon"  class="color_sysait_cerulean" />
            </div>
             <div class="text-h7 text-bold">{{ tecnologie.name}}</div>
            <div>{{ tecnologie.content}}</div>
        </div>
    </div>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'Tecnologies',

  data () {
    return {
      atYoutservices: "",
    }
  },
  watch: {
    langCange: {
      immediate: true,
      handler() {
        this.updateValues()
      }
    },
  },
  async mounted(){
    this.updateValues()
  },
  computed: {
    ...mapGetters(
      [
        'tecnologies',
        'langCange'
      ]),
  },
  methods: {
    updateValues() {
      this.atYoutservices = this.$t('atYoutservices')
    }
  }

}
</script>

<style lang="scss">
.service {
  border-bottom: 3px solid rgb(59, 133, 231);
  max-width: 230px;
  margin: 60px 500px 5px 500px ;
}
</style>
