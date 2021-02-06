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
        <div style="text-align: center">
          <q-btn color="secondary" label="Read more" to="/about" />
        </div>
      </div>
    </div>
    <div class="my-card">
      <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <div class="image">
            <img src="~assets/sysait_ecran.png" style="width: 200px; height: 200px" />
          </div>
        </template>
        <div id="about">
          <font
            style="text-decoration: underline"
            face="Time new roman"
            class="sysait_black"
            size="6"
          >
            <b>Who are we</b> </font
          ><br /><br /><br />
          <font face="Time new roman" class="sysait_black" size="4">
            <p>{{ company.description }}</p>
          </font>
        </div>
        <div style="text-align: left">
          <q-btn color="secondary" label="Find out more" to="/about" />
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

.my-card {
  width: 75%;
  max-width: 1200px;
  padding-bottom: 0;
  padding-top: -200px;
  transform: translateY(250px);
  border: 1px;
}

#about {
  position: right;
  color: black;
}
</style>
