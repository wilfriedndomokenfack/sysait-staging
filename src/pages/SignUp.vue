<template>
  <div
    class="page-background flex flex-center"
    :class="{'q-pt-xl q-pb-xl': !this.$q.screen.lt.md, 'q-pt-sm q-pb-sm': this.$q.screen.lt.md, }"
  >
    <AuthenticationComponent
      @form="getForm"
      :buttonProp="$t('login')"
      pathToProp="/signin"
      :userQuestionProp="$t('hasAccount')"
      :pageNameProp="$t('registration')"
    />
    <RegistrationPopupComponent v-if="emailConfirmMessage" :propTitle="$t('confirm')" :propMessage="emailConfirmMessage" :key="myKey" />
  </div>
</template>

<script>
import AuthenticationComponent from "@/components/authentication/AuthenticationComponent.vue";
import { signup } from "@/models/auth/Auth";
import RegistrationPopupComponent from "@/components/authentication/RegistrationPopupComponent.vue";
export default {
  name: "signUpPage",
  components: {
    AuthenticationComponent,
    RegistrationPopupComponent,
  },
  data() {
    return {
      emailConfirmMessage:null,
      myKey: 50,
    };
  },
  methods: {
    async getForm(form) {
      // foward the form to the page;
      this.emailConfirmMessage = await signup(form);
      this.myKey++;
    },
    onSubmit() {
      login(this.user);
    },
  },
};
</script>

<style scoped lang="scss">
.page-background {
  background-image: url("/users/ImageBgLoginRegister.png");
}
</style>
