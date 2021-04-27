<template>
  <div class="page-background q-pt-xl q-pb-xl flex flex-center">
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
import { signup } from "@/models/auth/Auth";
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
      signup(form);
    },
    onSubmit() {
      console.log(this.user);
      login(this.user);
    },
  },
};
</script>

<style scoped lang="scss">
.page-background {
  background-image: url("/users/ImageBgLoginRegisster.png");
}
</style>
