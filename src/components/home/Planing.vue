<template>
  <q-page class="text-center padding_header">  <!-- flex flex-center-->
    <!-- page content -->
    <div v-if="partners">
      <div class="text-h5 text-bold q-mt-md partners flex flex-center" id="partList" ref="partList">
      {{ this.$t('ourPartners') }}
    </div>
    <!-- <div class="row q-my-lg items-center justify-center"> -->
      <transition-group tag="div" class="row q-my-lg items-center justify-center" name="partLists" enter-active-class="animated flipInY delay-5s">
        <div class="col-md-3 col-sm-6 col-xs-12 q-pb-lg " v-for="partner in partners" :key="partner.id">
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
       </transition-group>
    </div>

    <!-- </div> -->
    <div class=" q-mb-lg">
      <div class="text-primary text-center text-subtitle1  col-md q-ma-md font_Brush_Script_MT" color="primary">
        Let's create a new Word with Technology!
      </div>
      <div class="col-md q-ma-md">
        Ready to start a new project with us? That's great! Give us a call or send us an email and we will contact you as soon as possible!
      </div>
    </div>
   </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { COMMON_isVisibile } from '@/models/utils/common.js'
export default {
  name: 'Planing',
  props: ['propPartners'],
  data () {
    return {
      partners: [],
      ourPartners: "",
      showPart: false,
    }
  },
  async mounted(){
    window.addEventListener("scroll", () => this.renderSection());
    this.renderSection()
  },
  methods: {
    partnerlLink(link){
      window.open(link, '_blank');
    },
    renderSection(){
      if (!this.showPart && COMMON_isVisibile(this.$refs.partList)) {
        this.partners = this.propPartners?.length > 0 ? this.partners = [...this.propPartners] : null
        this.showPart = true
      }
    }
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

.animated.flipInY {
  --animate-duration: 14s;
}

</style>
