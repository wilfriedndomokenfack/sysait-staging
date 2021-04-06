<template>
  <q-page class="text-center padding_header">
    <!-- flex flex-center-->
    <!-- page content -->
    <div
      class="text-h5 text-bold q-mt-md service flex flex-center"
      id="techList"
      ref="techList"
    >
      {{ atYoutservices }}
    </div>
    <transition-group
      tag="div"
      class="row q-my-lg"
      name="techLists"
      enter-active-class="animated flipInY delay-5s"
    >
      <div
        class="col-md-3 col-sm-6 col-xs-12 q-pb-lg"
        v-for="tecnologie in localTecnologies"
        :key="tecnologie.id"
      >
        <div class="text-info " style="font-size: 2em">
          <q-icon :name="tecnologie.icon" class="color_sysait_cerulean" />
        </div>
        <div class="text-h7 text-bold">{{ tecnologie.name }}</div>
        <div>{{ tecnologie.content }}</div>
      </div>
    </transition-group>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { COMMON_isVisibile } from "@/models/utils/common.js";
export default {
  name: "Tecnologies",

  data() {
    return {
      atYoutservices: "",
      showTech: false,
      localTecnologies: []
    };
  },
  watch: {
    langChanged: {
      immediate: true,
      handler() {
        this.updateValues();
      }
    }
  },
  async mounted() {
    this.updateValues();
    window.addEventListener("scroll", () => this.renderSection());
  },
  computed: {
    ...mapGetters(["tecnologies", "langChanged"])
  },
  methods: {
    updateValues() {
      this.atYoutservices = this.$t("atYoutservices");
    },
    renderSection() {
      if (!this.showTech && COMMON_isVisibile(this.$refs.techList)) {
        this.localTecnologies = this.tecnologies;
        this.showTech = true;
      }
    }
  }
};
</script>

<style lang="scss">
.service {
  min-width: 250px;
  padding-top: 150px;
}

.service::before {
  min-width: 250px;
  content: "\a0\a0\a0\a0\a0\a0\a0\a0\a0\a0\a0\a0";
  display: block;
  position: absolute;
  text-decoration: underline;
  width: 70px;
  overflow: hidden;
  padding-top: 15px;
}

.animated.flipInY {
  --animate-duration: 7s;
}
</style>
