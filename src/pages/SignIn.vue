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
  </div>
</template>

<script>
import AuthenticationComponent from "@/components/authentication/AuthenticationComponent.vue";
import { login } from "@/models/auth/Auth";
export default {
  name: "signInPage",
  components: {
    AuthenticationComponent,
  },
  data() {
    return {};
  },
  methods: {
    getForm(form) {
      // foward data to backend;
      login(form);
    },
  },
};
</script>

<style scoped lang="scss">
.page-background {
  background-image: url("/users/ImageBgLoginRegister.png");
}
</style>
