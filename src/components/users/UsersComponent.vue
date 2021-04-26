<template>
  <div class="content_1 row flex flex-center">
    <RegistrationImage
      class="bg-ecranRegistration col-md-6 col-sm-12 col-xs-12"
      :buttonProp="buttonProp"
      :pathToProp="pathToProp"
      :userQuestionProp="userQuestionProp"
    />
    <RegistrationForm
      @form="getForm"
      class="col-md-6 col-sm-12 col-xs-12"
      :pageNameProp="pageNameProp"
    />
  </div>
</template>

<script>
import RegistrationImage from "@/components/registration/RegistrationImage.vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
import { mapGetters } from "vuex";
export default {
  name: "UsersComponent",
  props: ["buttonProp", "pathToProp", "userQuestionProp", "pageNameProp"],
  components: {
    RegistrationImage,
    RegistrationForm,
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
.content_1 {
  border-radius: 26px;
  border: 5px solid;
  width: 60%;
  height: auto;
  @media (min-width: 1024px) {
    border: 8px solid;
  }
  @media (max-width: 1024px) {
    border: 10px solid;
    border-radius: 40px;
  }
  @media (max-width: $breakpoint-sm-max) {
    width: 70%;
  }
  @media (min-width: $breakpoint-sm-min) {
    width: 55%;
  }
}
</style>
