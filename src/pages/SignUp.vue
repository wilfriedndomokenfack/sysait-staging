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
    <RegistrationPopupComponent
      v-if="emailConfirmMessage"
      :propTitle="$t('confirm')"
      :propMessage="emailConfirmMessage"
      :key="myKey"
      @close="pupopChanged"
      :flag="flag"
    />
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
      emailConfirmMessage: null,
      myKey: 50,
      flag: null,
    };
  },
  methods: {
    pupopChanged(){
      this.emailConfirmMessage = null 
    },

    async getForm(form) {
      // foward the form to the page;
      const response = await signup(form);
      this.emailConfirmMessage = response.message
      this.flag = response.flag

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
