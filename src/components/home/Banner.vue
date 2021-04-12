<template>
  <div class=" row justify-center container1">

    <img src="~assets/HomePageImage.png" style="width:100%;" />
     <div class="banner_content txt  constrain">
      <div class=" nbm">
        <transition appear name="bannerHome">
          <div class="">

            <div
              class="content_1 q-pb-md"
              style="color: #ffffff"
              >
              {{ company.content_1 }}
            </div>

          <div class="learning-mission content_2">
            <div
              class="col-10"
              style="color: #ffffff"
            >
            {{ company.content_2 }}
            </div>
          </div>


          <div v-if="!$q.screen.lt.sm"  class="" style="text-align: center">
            <q-btn color="white" text-color="black" label="Read more" to="/about" />
          </div>

        </div>
      </transition>
      </div>
    </div>
    <BannerEcran/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BannerEcran from "@/components/home/BannerEcran.vue"
export default {
  name: "Banner",

  components: {
    BannerEcran
  },

  data() {
    return {};
  },
  mounted(){

  },

  methods: {

  },

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>

<style lang="scss" scoped>


.banner_content {
  position: absolute;
  text-align: center;
  width: 75%;
  padding-left: 10px ;
  padding-right: 10px ;
  padding-bottom: 30px ;
  border-right: 6px solid rgb(234, 237, 240);
  border-left: 6px solid rgb(234, 237, 240);
  //height: 300px;
  border-radius: 20px;


  @media (min-width: 700px){
    transform: translateY(35px);
    height: 200px;
  }

  @media (max-width: 440px){
    transform: translateY(30px);
     height: 120px;
  }

  @media (max-width: 400px){
     height: 100px;
  }

  @media (min-width: 500px){
    height: 150px;
    transform: translateY(30px);
  }

  @media (min-width: 1000px){
    height: 250px;
  }

  @media (min-width: 1300px){
    height: 400px;
  }
}

.content_1{

  @media (min-width: 700px){
    font-size: 20px;
  }

  @media (max-width: 440px){
    font-size: 10px;
  }
  @media (max-width: 400px){
     font-size: 8px;
  }

  @media (min-width: 500px){
    font-size: 14px;
  }
  @media (min-width: 1000px){
    font-size: 25px;
    padding-bottom: 30px ;
  }
  @media (min-width: 1300px){
    font-size: 30px;
  }
}

.content_2{

  @media (min-width: 700px){
    font-size: 10px;
  }

  @media (max-width: 440px){
    font-size: 5px;
  }


  @media (min-width: 500px){
    font-size: 10px;
  }
  @media (min-width: 1000px){
    font-size: 15px;
    padding-bottom: 30px ;
  }

  @media (min-width: 1300px){
    font-size: 20px;
  }
}


.container1 {
  position: relative;

  font-weight: bold;
  font-size: 25px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -20px;
}

.about-us {
  position: center;
  color: black;
}

.btn-2 {
  text-align: left;
  color: #007db7;
}


.bannerHome-enter-active {
  animation: bannerHome-in .5s;
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
