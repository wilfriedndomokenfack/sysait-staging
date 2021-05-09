<template>
  <div class="column justify-between ">
    <div class="title-registration col-1 text-white bg-black flex flex-center text-h5 text-bold">
      {{ pageNameProp }}
    </div>
    <div class="form-page col-11 q-pb-xl text-center flex flex-center">
      <q-form
        @submit="checkForm"
        class="q-pa-md q-gutter-md "
        style="width: 100%"
      >
        <q-input
          v-if="currentRoute == 'signup'"
          id="input-long"
          rounded
          outlined
          bg-color="white"
          v-model="form.first_name"
          type="name"
          :label="$t('firstName')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="person" />
          </template>
        </q-input>

        <q-input
          v-if="currentRoute == 'signup'"
          rounded
          outlined
          bg-color="white"
          v-model="form.last_name"
          type="username"
          :label="$t('lastName')"
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
          label="Password"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>

        <q-input
          v-if="currentRoute == 'signup'"
          rounded
          outlined
          bg-color="white"
          v-model="repeatedPassword"
          type="password"
          :label="$t('passwordRepeated')"
        >
          <template v-slot:prepend>
            <q-icon class="color_sysait_cerulean" name="lock" />
          </template>
        </q-input>
        <p v-if="currentRoute == 'signup'" class="text-center">
          <q-checkbox v-model="form.accept" />
          {{ $t("readTerms") }}
          <q-btn
            no-caps
            flat
            dense
            @click="toggleComponent()"
            class="text-primary text-bold"
            >{{ $t("read") }}</q-btn
          >
        </p>

        <div v-if="currentRoute == 'signin'" class="forgotPassword text-center">
          <q-btn
            no-caps flat dense
            :label="$t('forgotPass')"
            @click="changePorgotPassword"/>
          <!-- <a href="#" style="text-decoration: none">{{ $t("forgotPass") }}</a> -->
        </div>

        <q-checkbox
          id="rememberMe"
          v-if="currentRoute == 'signin'"
          :label="$t('remember')"
          v-model="rememberMe"
        />
        <TermsOfAgreementComponent :key="termsKey" v-if="show" />
        <div class="col flex flex-center">
          <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded />
        </div>

      </q-form>
      <div v-show="this.$q.screen.lt.md" class="q-pb-xl q-pa-md text-center">
          <div class="text-h5 q-pb-md"> {{ userQuestionProp }}</div>
          <q-btn :to="pathToProp" :label="buttonProp" color="primary" size="md" rounded />
        </div>
    </div>
    <ForgotPasswordComponent v-if="forgotPassword" @close="changePorgotPassword"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { netWorkError } from "@/models/utils/netWorkError";
import ForgotPasswordComponent from "@/components/authentication/ForgotPasswordComponent.vue";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "src/models/utils/validations.js";
import TermsOfAgreementComponent from "@/components/authentication/TermsOfAgreementComponent.vue";
export default {
  name: "AuthenticationForm",
  components: {
    TermsOfAgreementComponent,
    ForgotPasswordComponent
  },
  props: ["pageNameProp", "userQuestionProp", "buttonProp", "pathToProp"],
  data() {
    return {
      forgotPassword: false,
      storage: window.localStorage,
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        accept: false,
      },
      rememberMe: false,
      repeatedPassword: null,
      currentRoute: null,
      show: false,
      termsKey: 1,
    };
  },

  mounted() {
    this.currentRoute = this.$store.getters.currentRoute; //Get the current root
  },
  methods: {
    changePorgotPassword(){
      this.forgotPassword = !this.forgotPassword
    },
    toggleComponent() {
      this.termsKey++;
      this.show = true;
    },

    email(val) {
      return email(val);
    },

    required(val) {
      return required(val);
    },

    lsRememberMe() {
      const emailInput = this.form.email;
      const rmCheck = this.rememberMe;

      if (localStorage.checkbox && localStorage.checkbox !== "") {
        rmCheck.setAttribute("checked", "checked");
        emailInput.value = localStorage.username;
      } else {
        rmCheck.removeAttribute("checked");
        emailInput.value = "";
      }

      if (rmCheck.checked && emailInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
      } else {
        localStorage.username = "";
        localStorage.checkbox = "";
      }
    },

    checkForm() {
      let check = true;
      this.errors = [];

      if (this.currentRoute == "signup") {
        if (this.form.first_name != "" && validateName(this.form.first_name) == false) {
          this.errors.push(this.$t("correctFirstName"));
          check = false;
        }

        if (!this.form.first_name) {
          this.errors.push(this.$t("emptyName"));
          check = false;
        }

        if (this.form.last_name != "" && validateName(this.form.last_name) == false) {
          this.errors.push(this.$t("correctLastName"));
          check = false;
        }

        if (!this.form.last_name) {
          this.errors.push(this.$t("emptyLastName"));
          check = false;
        }

        if (this.form.email != "" && validateEmail(this.form.email) == false) {
          this.errors.push(this.$t("correctEmail"));
          check = false;
        }

        if (!this.form.email) {
          this.errors.push(this.$t("emptyEmail"));
          check = false;
        }

        if (this.form.password != "" && validatePassword(this.form.password) == false) {
          this.errors.push(this.$t("correctPassword"));
          check = false;
        }

        if (!this.form.password) {
          this.errors.push(this.$t("emptyPassword"));
          check = false;
        }

        if (this.form.accept == false) {
          this.errors.push(this.$t("acceptTerms"));
          check = false;
        }

        if (this.form.password != this.repeatedPassword) {
          this.errors.push(this.$t("passwordMatch"));
          check = false;
        }
      }

      if (this.currentRoute == "signin") {
        if (!this.form.email) {
          this.errors.push(this.$t("emptyEmail"));
          check = false;
        }

        if (!this.form.password) {
          this.errors.push(this.$t("emptyPassword"));
          check = false;
        }

        //lsRememberMe();
      }

      if (check) {
        this.$emit("form", this.form);
      } else {
        netWorkError(this.errors);
        /* this.$q.notify({
          message: this.errors,
          color: "red-4",
          textColor: "white",
          icon: "cloud_done",
        }); */
      }
    },

    // onReset() {
    //   this.form.first_name = null;
    //   this.form.last_name = null;
    //   this.form.email = null;
    //   this.form.password = null;
    //   this.form.accept = false;
    //   this.repeatedPassword = null;
    // },
  },

  computed: {
    ...mapGetters(["company", "langChanged"]),
  },
};
</script>
<style scoped lang="scss">
.form-page {
  background-color: #e0ecf2;
  border-bottom-right-radius: 26px;
  @media (max-width: 770px) {
    border-bottom-left-radius: 26px;
  }


}

.title-registration {
  @media (min-width: $breakpoint-md-min) {
    border-top-right-radius: 26px;
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
</style>
