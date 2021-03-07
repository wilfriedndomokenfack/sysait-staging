<template>
  <q-page class="text-center padding_header">  <!-- flex flex-center-->
    <!-- page content -->
    <div class="text-h5 text-bold q-mt-md partners flex flex-center">
      {{ ourPartners }}
    </div>
    <div class="row q-my-lg items-center justify-center">
        <div class="col-md-3 col-sm-6 col-xs-12 q-pb-lg " v-for="(partner, index) in partners" :key="index">
            <div class="text-info " style="font-size: 2em">
             <q-img clickable @click="partnerlLink(partner.link)"  class="partner rounded-borders col-6 full-height" :src="`partners/${partner.image_path}`" style="">
                <q-tooltip
                  :offset="[10, 10]"
                  transition-show="rotate"
                  transition-hide="rotate"
                  content-class="tooltip"
                >
                  <strong>{{ partner.denomination }}</strong>
                </q-tooltip>
             </q-img>
            </div>
        </div>
    </div>
    <div class=" q-mb-lg">
      <div class="text-primary text-center text-subtitle1  col-md q-ma-md" color="primary" style="font-family: Cursive">
        Let's create a new Word with Technology!
      </div>
      <div class="col-md q-ma-md" style="font-family: Fantasy">
        Ready to start a new project with us? That's great! Give us a call or send us an email and we will contact you as soon as possible!
      </div>
    </div>
   </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Planing',
  data () {
    return {
      partners: null,
      ourPartners: "",
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
    if(this['wilfried/partners'])
      this.partners = this['wilfried/partners']
  },
  computed: {
    ...mapGetters(
      [
        'company',
        'langCange',
        'wilfried/partners'
      ]),
  },
  methods: {
    updateValues() {
      this.ourPartners = this.$t('ourPartners')
    },
    partnerlLink(link){
      window.open(link, '_blank');
    },
  }
}
</script>

<style lang="scss">

.partners::before {
  min-width: 250px;
  content:'\a0\a0\a0\a0\a0\a0\a0\a0\a0\a0';
  display: block;
  position: absolute;
  text-decoration: underline;
  width:70px;
  overflow:hidden;
  padding-top: 15px;
}

.partner:hover {
  cursor: pointer;
}
.partner {
  width: 30%;
}

.tooltip{
  background-color: $primary;
}

</style>
