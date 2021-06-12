<template>
  <div class="row" :class="{globalComp: !this.$q.screen.lt.md}">
    <AuthenticationImage
      v-if="!this.$q.screen.lt.md"
      class="bg-ecranRegistration col-md-6 col-sm-12 col-xs-12"
      :buttonProp="buttonProp"
      :pathToProp="pathToProp"
      :userQuestionProp="userQuestionProp"
    />
    <AuthenticationForm
      @form="getForm"
      class="col-md-6 col-sm-12 col-xs-12"
      :pageNameProp="pageNameProp"
      :userQuestionProp="userQuestionProp"
      :buttonProp="buttonProp"
      :pathToProp="pathToProp"

    />
  </div>
</template>

<script>
import AuthenticationImage from "@/components/authentication/AuthenticationImage.vue";
import AuthenticationForm from "@/components/authentication/AuthenticationForm.vue";
import { mapGetters } from "vuex";
export default {
  name: "AuthenticationComponent",
  props: ["buttonProp", "pathToProp", "userQuestionProp", "pageNameProp"],
  components: {
    AuthenticationImage,
    AuthenticationForm,
  },
  data() {
    return {};
  },
  methods: {
    getForm(form) {
      // foward the form to the page;
      this.$emit("form", form);
    },
  },
  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>
<style scoped lang="scss">
.globalComp {
  background-color: #fafaf9;
  border-radius: 26px;
  border: 1px solid;
  @media (min-width: 1400px) {
    width: 100%;
  }

  @media (min-width: $breakpoint-md-min) {
    width: 70%;
  }
}
</style>
