<template>
  <div class="page-background q-pt-xl q-pb-xl flex flex-center">
    <UsersComponent
      @form="getForm"
      :buttonProp="$t('registration')"
      pathToProp="/signup"
      :userQuestionProp="$t('noAccount')"
      :pageNameProp="$t('login')"
    />
  </div>
</template>

<script>
import UsersComponent from "@/components/users/UsersComponent.vue";
import { login } from "@/models/auth/Auth";
export default {
  name: "signInPage",
  components: {
    UsersComponent,
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
