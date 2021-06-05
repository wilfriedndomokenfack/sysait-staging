<template>
  <q-page >
    <q-dialog v-model="model" persistent :key="muKey">
      <q-card class="">
        <q-bar class="bg-primary text-bold text-white">
          <div class="text-center">{{ $t("resetPass") }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>{{ $t('close') }}</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="diagPassword">
          <q-card-section >
            <!-- LISTA ERRORI-->
            <div class="col column bg-grey-3 q-mb-md " v-if="endCheck && errors.length > 0">
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
            <div>
              <p class=" text-center">
                {{ $t('resetPassDescrip') }}
              </p>
            </div>
        </q-card-section>
        <q-card-section class="flex flex-center ">
          <q-form
            @submit="onSubmit"
            class=" q-gutter-md q-pb-xl column"
            style="width: 100%"
          >
            <q-input
              class="col"
              dense
              rounded
              outlined
              bg-color="white"
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="password"
            >
              <template v-slot:prepend>
                <q-icon class="color_sysait_cerulean" name="lock" />
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
              class="col"
              dense
              rounded
              outlined
              bg-color="white"
              v-model="repeatedPassword"
              :type="isPwd ? 'password' : 'text'"
              :label="$t('passwordRepeated')"
            >
              <template v-slot:prepend>
                <q-icon
                  :class="{
                    'text-primary': !password,
                    'text-red-5': password && password != repeatedPassword,
                    'text-green-5': password && password == repeatedPassword
                  }"
                  name="lock"
                />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="col flex flex-center">
              <q-btn :label="$t('submit')" type="submit" color="primary" size="md" rounded/>
            </div>
          </q-form>
        </q-card-section>
        </div>
      </q-card>
    </q-dialog>
    <RegistrationPopupComponent
      v-if="message"
      :propTitle="$t('forgotPass')"
      :propMessage="message"
      @closed="pupopChanged"
      :flag="flag"
    />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { redirect } from "@/models/utils/common.js"
import { validatePassword } from "@/models/utils/validations.js";
import RegistrationPopupComponent from "@/components/authentication/RegistrationPopupComponent.vue"
import Api from "@/models/Api";
export default {
  name: 'PasswordResetPage',
  components: {
    RegistrationPopupComponent
  },
  watch: {
    model: {
      immediate: true,
      handler() {
        if(!this.model) this.goHome();
      }
    }
  },
  data() {
    return {
      flag: null,
      errors: [],
      endCheck: false,
      password: null,
      repeatedPassword: null,
      isPwd: true,

      openPupop: true,
      muKey: 33,
      model: true,
      fullPath: this.$route.fullPath,
      message: null
    };
  },
   computed: {
    ...mapGetters(["previousRoute"])
  },
  async mounted(){
    if(this.previousRoute == "signin"){
      this.openPupop = false
      this.muKey++
      redirect("home")
    }

  },
  methods: {
    pupopChanged(){
      this.message = null
      if(this.flag == 1) this.model = false
    },
    async onSubmit() {
      this.errors = [];
      this.endCheck = false

      if (this.password != "" && validatePassword(this.password) == false) {
        this.errors.push(this.$t("correctPassword"));
      }

      if (this.password != this.repeatedPassword) {
        this.errors.push(this.$t("passwordMatch"));
      }

      this.endCheck = true
      if(this.errors.length > 0){
        return
      }else{
        this.$q.loading.show();
        const reset_password_token = this.fullPath.split("=")[1];
        try {
          if(reset_password_token){
            const form = {
              password: this.password,
              token: reset_password_token
            }
            const response = await Api().patch("password_reset", form);
            if(response?.data.message ) this.message = response?.data.message
            this.flag = response.data.flag
            this.muKey++
          }

        } catch (error) {
          this.message = error + " - " + this.message
        }finally{
          this.$q.loading.hide();
        }
      }
    },

    goHome(){
      redirect("signin")
    }
  }
}
</script>
