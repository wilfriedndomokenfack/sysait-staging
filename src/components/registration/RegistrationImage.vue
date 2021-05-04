<template>
  <div class="column justify-between">
    <div class="col-12 flex flex-center">
      <div class="pg-description q-pb-xl q-pa-md text-center">
        {{ pageDescriptio }}<br />
        <h5>{{ userQuestionProp }}</h5>

        <q-btn :to="pathToProp" :label="buttonProp" color="primary" size="md" rounded />
      </div>
      <img
        src="~assets/sysait_ecran.png"
        style="width: 100%; height: auto; border-bottom-left-radius: 25px"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RegistrationImage",
  props: ["buttonProp", "pathToProp", "userQuestionProp"],
  data() {
    return {
      pageDescriptio:
        "We help you to create the future that you want, making your life simplier cheaper and easier.",
    };
  },
  mounted() {},

  methods: {},

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>
<style scoped <style lang="scss">
.pg-description {
  background-color: #fafaf9;
  @media (min-width: $breakpoint-sm-min) {
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    width: 100%;
  }
  @media (max-width: 420px) {
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    width: 100%;
  }
}
.image-content {
  @media (min-width: $breakpoint-sm-min) {
    border-bottom-left-radius: 25px;
  }
  @media (max-width: $breakpoint-sm-max) {
    display: none;
    background-color: none;
  }
  @media (min-width: 1024px) {
    padding: inherit;
  }
}
</style>
