<template>
  <div class="row justify-center form-page">
    <div class="color_sysait_cerulean column text-center">
      <b>Registration</b>
    </div>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          type="name"
          label="First Name"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type name']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>

        <q-input
          filled
          v-model="username"
          type="username"
          label="Last Name"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type surname']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>

        <q-input
          filled
          v-model="email"
          type="email"
          label="Email Address"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type email address']"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="email" />
          </template>
        </q-input>

        <q-input filled v-model="password" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>

        <q-input
          filled
          v-model="repeatedPassword"
          type="password"
          label="Confirm Password"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>
        <q-checkbox v-model="right" label="I accept the license and terms" />
        <q-btn label="Submit" type="submit" color="primary" />
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
      right: null,
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
}
</style>
