<template>
  <div class="myCard constrain" >
      <q-banner class="myCard-body ">
        <div class=" row items-start justify-between" >
          <div v-show="!this.$q.screen.lt.md" class="col-md-3 col-sm-12 col-xs-12 pbn-image">
            <img
              class=""
              alt="sysait ecran"
              src="~assets/SysaitEcranCarré.png"
              :ratio="1"
              style="width: 195px; height: auto; border-radius: 15px 0px 0px 15px ;"
            />
          </div>

        <transition name="bannerEcrans" enter-active-class="animated zoomInDown delay-1s">
          <div v-if="showBannerEcran" class="col-md-7 col-sm-12col-xs-12 text-center">
            <div class="about-us q-pt-md">
              <p class="pbn-title sysait_black text-weight-regular flex flex-center ">
                <strong>Who are we</strong>
              </p>
              <p  class="sysait_black" :class="{'q-pr-md':!this.$q.screen.lt.md}" >{{ company.description }}</p>
            </div>
            <div class="">
              <q-btn color="primary" :label="$t('findOutMore')" to="/about" />

              <!-- <br><br><br> -->
            </div>
          </div>
        </transition>

        <div v-show="!this.$q.screen.lt.md" id="bannerEcran" ref="bannerEcran" class="col-md-1 col-sm-2 col-xs-2">
          <q-icon class="bannerIcon" name="fa fa-quote-right" size="50px" width="100px" />
        </div>
      </div>
    </q-banner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { COMMON_isVisibile } from "@/models/utils/common.js";
export default {
  name: "BannerEcran",
  data() {
    return {
      showBannerEcran: false,
      interval: null,
    };
  },
  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
  mounted() {
    this.interval = setInterval(this.renderSection, 1000);
    window.addEventListener("scroll", () => this.renderSection());
  },
  methods: {
    renderSection() {
      if (!this.showBannerEcran && COMMON_isVisibile(this.$refs.bannerEcran)) {
        this.showBannerEcran = true;
        clearInterval(this.interval);
      }
    },
  },
};
</script>

<style lang="scss">
.myCard {
  width: 75%;
  //  height: 5px;
  max-width: 1200px;
  padding-bottom: 0;
  padding-top: -200px;
  padding-right: 10px ;
  transform: translateY(-10%);
  border: 1px;
  background-color: $sysait_gallery;


  border-radius: 15px ;
  @media (max-width: $breakpoint-sm-max){
    transform: translateY(-4%);
  }

}

.myCard-body {
  border-radius: 15px ;
  background-color: $sysait_gallery;
}

.pbn-image {
  padding-left: 0;
  margin: -8px -17px -30px -17px;
  // @media (min-width: 500px){
  //   height: 160px;
  //   transform: translateY(40px);
  // }
}
.bannerIcon {
  color: white;
  height: 180px;
}

.pbn-title {
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
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.bannerEcran-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
