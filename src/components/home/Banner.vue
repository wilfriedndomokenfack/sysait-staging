<template>
  <div class="bg_banner row justify-center">
    <div class="banner_content">
      <div class="vc_col-sm-3 nbm">
        <div class="learning-automated-div">
          <span style="color: #ffffff"
            >We help you to create<br />the future that you want. <br />Making your lives
            simplier, cheaper and easier</span
          >
        </div>
        <div class="learning-mission row">
          <q-btn flat class="col-1" icon="fa fa-circle" color="white" />
          <span class="col-10" style="color: #ffffff">{{ company.content_1 }}</span>
          <q-btn flat class="col-1" icon="fa fa-circle" color="white" />
        </div>
        <br /><br />
        <div class="btn-1" style="text-align: center">
          <q-btn color="white" text-color="black" label="Read more" to="/about" />
        </div>
      </div>
    </div>
    <div class="myCard">
      <q-banner class="myCard-body">
        <div class="q-col-gutter-md row items-start">
          <div class="col-md-3 col-sm-12 col-xs-12 image">
            <img
              alt="sysait ecran"
              src="~assets/sysait_ecran.png"
              :ratio="1"
              style="width: 240px; height: 200px"
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
              <q-btn padding="xs lg" round color="primary" label="Find out more" to="/about" />
            </div>
          </div>
          <div class="col-md-2 col-sm-2 col-xs-2">
            <q-icon

              class="bannerIcon"
              name="fa fa-quote-right"
              size="70px"
              width="100px"
            />
          </div>
        </div>
      </q-banner>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Banner",

  components: {},

  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapGetters(["company", "langCange"]),
  },
};
</script>

<style lang="scss" scoped>
.bg_banner {
  background-color: #cccccc;
  background-image: url("~assets/HomePageImage.png");
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
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
  height: 300px;
}

.myCard {
  width: 75%;
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
  padding-right: 0px;
  margin-top: -8px;
  margin-bottom: -15px;
}
.bannerIcon {
  color: white;
  height: 180px;
}

.about-us {
  position: center;
  color: black;
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
.btn-2 {
  text-align: left;
  color: #007db7;
}

</style>
