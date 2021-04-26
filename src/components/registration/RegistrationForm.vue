<template>
  <div class="row component-2">
    <div class="form-page col">
      <div class="form-content col text-white bg-black flex flex-center">
        {{ pageNameProp }}
      </div>
      <q-form
        @submit="checkForm"
        method="post"
        @reset="onReset"
        class="q-pa-md q-gutter-md"
      >
        <q-input
          v-if="currentRoute == 'signup'"
          id="name"
          rounded
          outlined
          bg-color="white"
          v-model="form.name"
          type="name"
          :label="$t('firstName')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || $t('enterName')]"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>

        <q-input
          v-if="currentRoute == 'signup'"
          id="last-name"
          rounded
          outlined
          bg-color="white"
          v-model="form.username"
          type="username"
          :label="$t('lastName')"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || $t('enterLastName')]"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>
        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="form.email"
          type="email"
          :label="$t('email')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="email" />
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          bg-color="white"
          v-model="form.password"
          type="password"
          :label="$t('password')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>

        <q-input
          v-if="currentRoute == 'signup'"
          id="passwordR"
          rounded
          outlined
          bg-color="white"
          v-model="form.repeatedPassword"
          type="password"
          :label="$t('passwordRepeated')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>
        <q-checkbox
          v-if="currentRoute == 'signup'"
          id="terms"
          v-model="accept"
          label="I accept
        the license and terms"
        />
        <div class="col flex flex-center">
          <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required, email } from "src/models/utils/validations.js";
export default {
  name: "RegistrationForm",
  props: ["pageNameProp"],
  data() {
    return {
      form: {
        name: null,
        username: null,
        email: null,
        password: null,
        repeatedPassword: null,
        accept: false,
      },
      currentRoute: null,
    };
  },

  mounted() {
    this.currentRoute = this.$store.getters.currentRoute; //Get the current root
  },
  methods: {
    email(val) {
      return email(val);
    },

    required(val) {
      return required(val);
    },

    checkForm() {
      let check = true;
      /* this.errors = [];

      if (this.currentRoute == "signup") {
        if (!this.form.name) {
          this.errors.push("Name required.");
          check = false;
        }

        if (this.form.username.length > 0 && !email(form.username)) {
          this.errors.push("Last name required.");
          check = false;
        }
      } */
      if (check) {
        this.$emit("form", this.form);
      } else {
        this.$q.notify({
          message: "Check errors in the form!",
          color: "red-4",
          textColor: "white",
          icon: "cloud_done",
        });
      }
    },

    onReset() {
      this.name = null;
      this.surname = null;
      this.email = null;
      this.password = null;
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
  height: 34px;
  @media (min-width: $breakpoint-md-min) {
    border-top-right-radius: 15px;
    margin-top: 0px;
  }
  @media (min-width: 1024px) {
    height: 30px;
  }
}
.component-2 {
  @media (max-width: $breakpoint-xs-max) {
    padding-top: 12px;
  }
}
</style>
