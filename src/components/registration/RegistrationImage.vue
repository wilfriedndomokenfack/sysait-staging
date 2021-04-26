<template>
  <div class="column justify-between">
    <div class="registration-content">
      <div class="bg-content items-start text-center q-pa-md col">
        {{ company.content_1 }}<br />
        <h5>{{ userQuestionProp }}</h5>

        <q-btn :to="pathToProp" :label="buttonProp" color="primary" size="md" rounded />
      </div>
      <div class="col image-content">
        <img
          src="~assets/sysait_ecran.png"
          style="width: 100%; border-bottom-left-radius: 25px; margin: 0px 0px -6px 0px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RegistrationImage",
  props: ["buttonProp", "pathToProp", "userQuestionProp"],
  data() {
    return {};
  },
  mounted() {},

  methods: {},

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>
<style scoped <style lang="scss">
.bg-content {
  /* background-color: #fafaf9; */
  border-top-left-radius: 25px;

  @media (max-width: $breakpoint-xs-max) {
    border-top-right-radius: 25px;
    margin-top: 0px;
  }
  @media (max-width: $breakpoint-sm-max) {
    margin-top: 0px;
    margin-bottom: 52px;
  }
  @media (min-width: 780px) {
    background-color: #fafaf9;
  }
  @media (min-width: 1024px) {
    margin-top: inherit;
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
