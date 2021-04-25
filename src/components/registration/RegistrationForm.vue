<template>
  <div class="row component-2 justify-center items-stretch">
    <div class="form-page text-center col">
      <div class="form-content col color_sysait_cerulean bg-black flex flex-center">
        {{ $t("registration") }}
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md q-gutter-md">
        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="name"
          type="name"
          :label="$t('firstName')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type name']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="username"
          type="username"
          :label="$t('lastName')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type surname']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>
        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="email"
          type="email"
          :label="$t('email')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type email address']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="email" />
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="password"
          type="password"
          :label="$t('password')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type your password']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          bg-color="white"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please repeat your password']"
          v-model="repeatedPassword"
          type="password"
          :label="$t('passwordRepeated')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>
        <q-checkbox v-model="accept" label="I accept the license and terms" />
        <div class="flex col flex-center">
          <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RegistrationForm",
  data() {
    return {
      name: null,
      username: null,
      email: null,
      password: null,
      repeatedPassword: null,
      accept: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>
<style scoped lang="scss">
.form-page {
  background-color: #e0ecf2;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  @media (max-width: $breakpoint-sm-max) {
    border-bottom-left-radius: 25px;
  }
}
.form-content {
  height: 30px;
  @media (min-width: $breakpoint-md-min) {
    border-top-right-radius: 20px;
    margin-top: 0px;
  }
}
.component-2 {
  @media (max-width: $breakpoint-xs-max) {
    padding-top: 12px;
  }
}
</style>
