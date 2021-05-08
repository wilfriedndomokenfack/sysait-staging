<template>
  <div class="page-background q-pt-xl q-pb-xl flex flex-center">
    <UsersComponent
      @form="getForm"
      :buttonProp="$t('login')"
      pathToProp="/signin"
      :userQuestionProp="$t('hasAccount')"
      :pageNameProp="$t('registration')"
    />
  confirm:"Messaggio di conferma"
  confirm:"Messaggio di conferma"
    <RegistrationPopupComponent v-if="emailConfirmMessage" :propTitle="$t('confirm')" :propMessage="emailConfirmMessage" :key="myKey" />
  </div>
</template>

<script>
import UsersComponent from "@/components/users/UsersComponent.vue";
import { signup } from "@/models/auth/Auth";
import RegistrationPopupComponent from "@/components/registration/RegistrationPopupComponent.vue";
export default {
  name: "signUpPage",
  components: {
    UsersComponent,
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
