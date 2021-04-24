<template>
  <div class="content_1 row flex flex-center">
    <RegistrationImage class="bg-ecranRegistration col-md-6 col-sm-6 col-xs-12" />
    <RegistrationForm class="col-md-6 col-sm-6 col-xs-12" />
  </div>
</template>

<script>
import RegistrationImage from "@/components/registration/RegistrationImage.vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
export default {
  name: "UsersComponent",
  components: {
    RegistrationImage,
    RegistrationForm,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.content_1 {
  border-radius: 25px;
  border: 3px solid;
  width: 60%;
  height: auto;
  @media (max-width: $breakpoint-sm-max) {
    width: 90%;
  }
}
/* .bg-ecranRegistration {
  background-image: url("/users/ImageBgLoginRegisster.png");
  //background-color: red;
  height: 500px;
} */
</style>
