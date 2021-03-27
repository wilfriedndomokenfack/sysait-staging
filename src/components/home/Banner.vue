<template>
  <div class="bg_banner row justify-center">
    <div class="banner_content txt">
      <div class="nbm">
        <transition appear name="bannerHome">
          <div class="">
            <div
              style="color: #ffffff"
              :class="{
                content_1_lg: $q.screen.lt.lg,
                content_1_md: $q.screen.lt.md,
                content_1_sm: $q.screen.lt.sm,
                content_1_xs: $q.screen.lt.xs,
              }"
            >
              {{ company.content_1 }}
            </div>

            <div class="learning-mission row">
              <q-btn loading flat class="col-1" icon="fa fa-circle" color="white" />
              <div
                :class="{
                  content_2_lg: $q.screen.lt.lg,
                  content_2_md: $q.screen.lt.md,
                  content_2_sm: $q.screen.lt.sm,
                  content_2_xs: $q.screen.lt.xs,
                }"
                class="col-10"
                style="color: #ffffff"
              >
                {{ company.content_2 }}
              </div>
              <q-btn loading flat class="col-1" icon="fa fa-circle" color="white" />
            </div>

            <br /><br />
            <div class="btn-1" style="text-align: center">
              <q-btn
                color="white"
                text-color="black"
                :label="$t('readMore')"
                to="/about"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>

    <BannerEcran />

    <!-- <div class="myCard">
      <q-banner class="myCard-body">
        <div class="q-col-gutter-md row items-start justify-around" >
          <div v-show="!this.$q.screen.lt.md" class="col-md-3 col-sm-12 col-xs-12 ">
            <img
              class="image"
              alt="sysait ecran"
              src="~assets/SysaitEcranCarré.png"
              :ratio="1"

            />
          </div>

          <div class="col-md-7 col-sm-10 col-xs-10 " >
            <div class="about-us">
              <p face="Time new roman" class="text-markup sysait_black text-weight-regular flex flex-center">
                <strong>Who are we</strong>
              </p>
              <p face="Time new roman" class="sysait_black" >{{ company.description }}</p>
            </div>
            <div class="btn-2">
              <q-btn   color="primary" label="Find out more" to="/about" />
            </div>
          </div>
          <div class="col-md-1 col-sm-2 col-xs-2">
            <q-icon

              class="bannerIcon"
              name="fa fa-quote-right"
              size="50px"
              width="100px"
            />
          </div>
        </div>
      </q-banner>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BannerEcran from "@/components/home/BannerEcran.vue";
export default {
  name: "Banner",

  components: {
    BannerEcran,
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>

<style lang="scss" scoped>
.content_1_lg {
  font-size: 3vw;
}
.content_1_md {
  font-size: 3vw;
}
.content_1_sm {
  font-size: 4vw;
}
.content_1_xs {
  font-size: 4vw;
}

.content_2_lg {
  font-size: 1vw;
}
.content_2_md {
  font-size: 1vw;
}
.content_2_sm {
  font-size: 2vw;
}
.content_2_xs {
  font-size: 3vw;
}

.txt {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(0%, 30%);
  font-family: "Time New Roman";
  font-size: 1vw;
}
.bg_banner {
  background-color: #cccccc;
  background-image: url("~assets/HomePageImage.png");
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
}

.learning-automated-div {
  text-align: center;
  font-size: 48px;
  line-height: 52px;
  padding: 100px 5px 10px 5px;
  font-weight: bold;
}

.banner_content {
  text-align: center;
  width: 75%;
  padding: 5px 40px 5px;
  border-right: 6px solid rgb(234, 237, 240);
  border-left: 6px solid rgb(234, 237, 240);
  //height: 300px;
  border-radius: 20px;
}

// .myCard {
//   width: 75%;
// //  height: 5px;
//   max-width: 1200px;
//   padding-bottom: 0;
//   padding-top: -200px;
//   transform: translateY(250px);
//   border: 1px;
//   background-color: $sysait_gallery;
// }

// .myCard-body {
//   background-color: $sysait_gallery;
// }

// .image {
//   // padding-left: 0;
//   // padding-right: 0px;
//    margin-top: -8px;
//    margin-bottom: -12px;
//  //  height: inherit;
//  //  width: auto;
// }
// .bannerIcon {
//   color: white;
//   height: 180px;
// }

.about-us {
  position: center;
  color: black;
}

// .text-markup {
//   border-bottom: 3px solid rgb(59, 133, 231);
//   height: 40px;
//   max-width: 230px;
//   font-size: 40px;
//   flex: 1;
//   margin: 5px 0 10px -50;

//   text-align: justify;
//   text-justify: inter-word;
// }
.btn-2 {
  text-align: left;
  color: #007db7;
}

.bannerHome-enter-active {
  animation: bannerHome-in 0.5s;
}
@keyframes bannerHome-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
