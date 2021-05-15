<template>
  <div
    class="page-background flex flex-center"
    :class="{'q-pt-xl q-pb-xl': !this.$q.screen.lt.md, 'q-pt-sm q-pb-sm': this.$q.screen.lt.md}"
    >
    <AuthenticationComponent
      @form="getForm"
      :buttonProp="$t('registration')"
      pathToProp="/signup"
      :userQuestionProp="$t('noAccount')"
      :pageNameProp="$t('login')"
    />
    <RegistrationPopupComponent
      v-if="message"
      :propTitle="$t('loginError')"
      :propMessage="message"
      @closed="pupopChanged"
      :flag="flag"
    />
  </div>
</template>

<script>
import RegistrationPopupComponent from "@/components/authentication/RegistrationPopupComponent.vue"
import AuthenticationComponent from "@/components/authentication/AuthenticationComponent.vue";
import { login } from "@/models/auth/Auth";
export default {
  name: "signInPage",
  components: {
    AuthenticationComponent,
    RegistrationPopupComponent
  },
  data() {
    return {
      message: null,
      flag: null
    };
  },
  methods: {
    pupopChanged(){
      this.message = null
    },
    async getForm(formDatas) {
      // foward data to backend;
      const response = await login(formDatas.form);
      this.flag = response.flag
      if(this.flag == 3 || this.flag == 2){
        this.message = response.message
      }else if(this.flag == 1){
        const payload = {
          token: response.message,
          rememberMe: formDatas.rememberMe ,
        }
        this.$store.dispatch("setCurrentUser", payload );
      }else{
        this.message = "Internal server error: Contact The administrator"
      }
    },
  },
};
</script>

<style scoped lang="scss">
.page-background {
  background-image: url("/users/ImageBgLoginRegister.png");
}
</style>
