<template>
  <div class="column justify-between">
    <div class="bg-content items-start text-center q-pa-md col">
      {{ company.content_1 }}<br />
      <h5>{{ $t("hasAccount") }}</h5>

      <q-btn to="/signin" :label="$t('login')" color="primary" size="md" rounded />
    </div>
    <div class="col image-content">
      <img
        src="~assets/sysait_ecran.png"
        style="width: 100%; border-bottom-left-radius: 25px; margin: 0px 0px -6px 0px"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RegistrationImage",
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
  height: 100px;
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
    margin-top: 0px;
    height: 100%;
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
}
</style>
