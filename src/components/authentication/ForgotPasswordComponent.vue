<template>
  <div>
    <q-dialog v-model="model" persistent >
      <q-card class="">
        <q-bar class="bg-primary text-bold text-white">
          <div class="text-center">{{ $t("forgotPass") }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="diagPassword">
          <q-card-section >
          <div>
            <p class=" text-center">
              Enter your email to recover your password. You will receive an email with instructions. Il you have problems recovering your password
              <q-btn no-caps flat dense to="/contact" class="text-primary text-bold">{{ $t('contacts') }}</q-btn>
            </p>
          </div>
        </q-card-section>
        <q-card-section class="flex flex-center ">
          <q-form
            @submit="checkForm"
            class=" q-gutter-md q-pb-xl"
            style="width: 70%"
          >
            <q-input
              dense
              rounded
              outlined
              bg-color="white"
              v-model="email"
              type="email"
              :label="$t('email')"
            >
              <template v-slot:prepend>
                <q-icon class="color_sysait_cerulean" name="email" />
              </template>
            </q-input>
            <div class="col flex flex-center">
              <q-btn label="Reset password" type="submit" color="primary" size="sm" rounded class="q-pa-xs"/>
            </div>
          </q-form>
        </q-card-section>
        </div>


      </q-card>
    </q-dialog>
    <!--q-dialog v-model="model" persistent >
      <q-layout view="Lhh lpR fff" container class="bg-white ">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>{{ $t("forgotPass") }}</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container class="diagPassword">
          <q-page padding>
            <div>
            <p class=" text-center">
              Enter your email to recover your password. You will receive an email with instructions. Il you have problems recovering your password
              <q-btn no-caps flat dense to="/contact" class="text-primary text-bold">{{ $t('contacts') }}</q-btn>
            </p>
          </div>
          <div class="flex flex-center ">
            <q-form
            @submit="checkForm"
            class=" q-gutter-md q-pb-xl"
            style="width: 70%"
          >
            <q-input
              dense
              rounded
              outlined
              bg-color="white"
              v-model="email"
              type="email"
              :label="$t('email')"
            >
              <template v-slot:prepend>
                <q-icon class="color_sysait_cerulean" name="email" />
              </template>
            </q-input>
            <div class="col flex flex-center">
              <q-btn label="Reset password" type="submit" color="primary" size="sm" rounded class="q-pa-xs"/>
            </div>
          </q-form>
          </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog-->
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordComponent',
  watch:{
    model: {
      immediate: true,
      handler(){
        if(!this.model){
            this.$emit("close")
        }
      }
    }
  },
  data () {
    return {
      email: null,
      title: "dssdsds",
      message:this.propMessage,
      model:true
    }
  },
  methods: {
    checkForm(){

    }
  }
}
</script>
<style lang="scss" scoped>
.diagPassword {
  border: 4px solid $primary;
  width: 100%;
}
</style>
