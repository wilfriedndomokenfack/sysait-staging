<template>
  <div class="content_1 row">
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
  border: 4px solid;
  @media (min-width: 1400px) {
    width: 100%;
  }

  @media (min-width: $breakpoint-md-min) {
    width: 70%;
  }
}
</style>
