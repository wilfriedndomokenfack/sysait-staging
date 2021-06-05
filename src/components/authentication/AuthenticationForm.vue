<template>
  <div class="column justify-between ">
    <div class="title-registration col-1 text-white bg-black flex flex-center text-h5 text-bold">
      {{ pageNameProp }}
    </div>
    <div class="form-page col-11 q-pb-xl text-center flex flex-center">

      <q-form
        @submit="onSubmit"
        class="q-pa-md q-gutter-md column"
        style="width: 80%"
      >
        <!-- LISTA ERRORI-->
          <div class="col column bg-grey-3 " v-if="endCheck && errors.length > 0">
            <div class="col row justify-end items-center">
              <q-btn
                @click="errors = []"
                color="red"
                dense
                flat
                icon="highlight_off"
                class="q-pr-xs"
              />
            </div>
            <ul class="col">
              <li class="text-red text-bold text-left" v-for="(error, index) in errors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>

        <q-input
          dense
          class="col"
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
          dense
          class="col"
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
          dense
          class="col"
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
          dense
          class="col"
          rounded
          outlined
          bg-color="white"
          v-model="form.password"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
        >
          <template v-slot:prepend>
            <q-icon  class="color_sysait_cerulean" name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-input
          dense
          class="col"
          v-if="currentRoute == 'signup'"
          rounded
          outlined
          bg-color="white"
          v-model="repeatedPassword"
          :label="$t('passwordRepeated')"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:prepend>
            <q-icon :class="{'text-primary': !form.password, 'text-red-5': form.password && form.password != repeatedPassword, 'text-green-5': form.password && form.password == repeatedPassword} " name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

      <!-- CAPTCHA -->
        <div class="col column" v-if="currentRoute == 'signup'">
          <div class="col row items-center justify-center q-gutter-sm">
            <div class="col-3">
              <q-btn flat @click="updateCaptcha()" icon="autorenew"/>
            </div>
            <div class="col-6 bg-grey-4 text-bold text-h5 captcha text-strike" >
              {{ captcha }}
            </div>
          </div>

          <div class="col row items-center justify-center q-gutter-sm">
            <div class="col-3 text-bold text-center">
              CAPTCHA
            </div>

            <div class="col-6">
              <q-input
                dense

                outlined
                bg-color="white"
                v-model="reCaptcha"
              >
                <template v-slot:append>
                  <q-icon :class="{'text-red-5': reCaptcha !=  captcha, 'text-green-5': reCaptcha ==  captcha }"  class="text-red text-bold" name="check" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <!-- END CAPTCHA -->

        <p v-if="currentRoute == 'signup'" class="text-center col">
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

        <div v-if="currentRoute == 'signin'" class="forgotPassword text-center col">
          <q-btn
            no-caps flat dense
            :label="$t('forgotPass')"
            @click="changePorgotPassword"/>
        </div>
        <!--
        <div v-if="currentRoute == 'signin'" class="forgotPassword text-center col">
          <q-checkbox
          class="col row jystify-center"
          id="rememberMe"
          v-if="currentRoute == 'signin'"
          :label="$t('remember')"
          v-model="rememberMe"
        />
        </div>
        -->
        <TermsOfAgreementComponent :key="termsKey" v-if="show" />
        <div class="col flex flex-center">
          <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded />
        </div>

      </q-form>
      <div v-show="this.$q.screen.lt.md" class="q-pb-xl q-pa-md text-center  column">
          <div class="q-pb-md"> {{ userQuestionProp }}</div>
          <q-btn :to="pathToProp" :label="buttonProp" color="primary" size="xs" rounded />
        </div>
    </div>
    <ForgotPasswordComponent v-if="forgotPassword" @close="changePorgotPassword"/>
  </div>
</template>

<script>
import { deepCopy, uniqCode } from '@/models/utils/common.js'
import { mapGetters } from "vuex";
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
  props: [
    "pageNameProp",
    "userQuestionProp",
    "buttonProp",
    "pathToProp",

  ],
  data() {
    return {
      isPwd: true,
      errors: [],
      endCheck: false,
      captcha: uniqCode(6),
      reCaptcha: null,
      forgotPassword: false,
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        accept: false,
      },
      rememberMe: false,
      repeatedPassword: null,
      show: false,
      termsKey: 1,
    };
  },

  created() {

  },
  mounted(){
    if (this.currentRoute == "signin"){
      if(this.userCredentials){
        this.form = deepCopy(this.userCredentials)
      }
      delete this.form.first_name
      delete this.form.last_name
      delete this.form.accept
    }
  },

  computed: {
    ...mapGetters(["userCredentials", "currentRoute"])
  },
  methods: {
    updateCaptcha(){
      this.captcha = uniqCode(6)
    },
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
    onSubmit() {
      this.errors = [];
      this.endCheck = false

      if (!this.form.email) {
        this.errors.push(this.$t("emptyEmail"));
      }
      if (this.form.email != "" && validateEmail(this.form.email) == false) {
          this.errors.push(this.$t("correctEmail"));
      }

      if (this.form.password != "" && validatePassword(this.form.password) == false) {
        this.errors.push(this.$t("correctPassword"));
      }
      if (!this.form.password) {
        this.errors.push(this.$t("emptyPassword"));
      }

      if (this.currentRoute == "signup") {
        if (this.form.first_name != "" && validateName(this.form.first_name) == false) {
          this.errors.push(this.$t("correctFirstName"));
        }

        if (!this.form.first_name) {
          this.errors.push(this.$t("emptyName"));
        }

        if (this.form.last_name != "" && validateName(this.form.last_name) == false) {
          this.errors.push(this.$t("correctLastName"));
        }

        if (!this.form.last_name) {
          this.errors.push(this.$t("emptyLastName"));
        }

        if (this.form.accept == false) {
          this.errors.push(this.$t("acceptTerms"));
        }

        if (this.form.password != this.repeatedPassword) {
          this.errors.push(this.$t("passwordMatch"));
        }

        if (this.captcha != this.reCaptcha) {
          this.errors.push(this.$t("captchaError"))
        }
      }

      this.endCheck = true
      if(this.errors.length > 0){
        return
      }else{
        let response = null

        if (this.currentRoute == "signin"){
          response = {
            form: this.form,
            rememberMe: this.rememberMe
          }
          this.$store.dispatch("setUserCredential", this.form)
        }else{
          response = this.form
        }
        this.$emit("form", response);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-page {
  background-color: #e0ecf2;
  border-bottom-right-radius: 26px;
  @media (max-width: $breakpoint-sm-max) {
    border-bottom-left-radius: 26px;
  }


}

.title-registration {

  border-top-right-radius: 26px;

  @media (max-width: $breakpoint-sm-max) {
    border-top-left-radius: 26px;
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
