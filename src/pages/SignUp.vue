<template>
  <div class="bg-image q-pt-xl q-pb-xl flex flex-center">
    <UsersComponent
      @form="getForm"
      :buttonProp="$t('login')"
      pathToProp="/signin"
      :userQuestionProp="$t('hasAccount')"
      :pageNameProp="$t('registration')"
    />
  </div>
</template>

<script>
import UsersComponent from "@/components/users/UsersComponent.vue";
import { login } from "@/models/auth/Auth";
export default {
  name: "signUpPage",
  components: {
    UsersComponent,
  },
  data() {
    return {
      user: {
        fullname: "Pratik",
        password: "12345",
      },
    };
  },
  methods: {
    getForm(form) {
      // foward the form to the page;
      //this.$emit("form", form);
    },
    onSubmit() {
      console.log(this.user);
      login(this.user);
    },
  },
};
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("/users/ImageBgLoginRegisster.png");
}
</style>
