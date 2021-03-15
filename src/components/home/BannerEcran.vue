<template>
  <div class="myCard">
      <q-banner class="myCard-body">
        <div class="q-col-gutter-md row items-start justify-around" >
          <div v-show="!this.$q.screen.lt.md" class="col-md-3 col-sm-12 col-xs-12 image">
            <img
              class=""
              alt="sysait ecran"
              src="~assets/SysaitEcranCarré.png"
              :ratio="1"
              style="width: 195px; height: auto"
            />
          </div>
<!-- style="width: 100%; height: auto" -->

        <transition name="bannerEcrans" enter-active-class="animated zoomInDown delay-1s">
          <div v-if="showBannerEcran" class="col-md-7 col-sm-10 col-xs-10 " >
            <div class="about-us">
              <p face="Time new roman" class="text-markup sysait_black text-weight-regular flex flex-center">
                <strong >Who are we</strong>
              </p>
              <p face="Time new roman" class="sysait_black" >{{ company.description }}</p>
            </div>
            <div class="btn-2">
              <q-btn   color="primary" label="Find out more" to="/about" />
            </div>
          </div>
        </transition>



          <div id="bannerEcran" ref="bannerEcran" class="col-md-1 col-sm-2 col-xs-2">
            <q-icon

              class="bannerIcon"
              name="fa fa-quote-right"
              size="50px"
              width="100px"
            />
          </div>
        </div>
      </q-banner>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { COMMON_isVisibile } from '@/models/utils/common.js'
export default {
  name: 'BannerEcran',
  data () {
    return {
      showBannerEcran: false
    }
  },
  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
  mounted(){
    window.addEventListener("scroll", () => this.renderSection());
  },
  methods: {
    renderSection(){

      if (!this.showBannerEcran && COMMON_isVisibile(this.$refs.bannerEcran)) {
        console.log("pippo")
        this.showBannerEcran = true
      }
    }
  }
}
</script>

<style lang="scss" >
.myCard {
  width: 75%;
//  height: 5px;
  max-width: 1200px;
  padding-bottom: 0;
  padding-top: -200px;
  transform: translateY(250px);
  border: 1px;
  background-color: $sysait_gallery;
}

.myCard-body {
  background-color: $sysait_gallery;
}

.image {
   padding-left: 0;
  //  padding-bottom: 0;
  //  padding-right: 0px;
   margin: -8px -17px -30px -17px;
  // margin-bottom: -15px;
 //  height: inherit;
 //  width: auto;
}
.bannerIcon {
  color: white;
  height: 180px;
}

.text-markup {
  border-bottom: 3px solid rgb(59, 133, 231);
  height: 40px;
  max-width: 230px;
  font-size: 40px;
  flex: 1;
  margin: 5px 0 10px -50;


  text-align: justify;
  text-justify: inter-word;
}


.bannerEcran-enter-active {
    transition: all .10s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .bannerEcran-enter{
    transform: translateX(10px);
    opacity: 0;
  }

</style>
