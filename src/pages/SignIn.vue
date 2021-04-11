<template>

      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}" >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="login/profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
             @submit="onSubmit"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="user.fullname"
                label="Fullname"
                lazy-rules
                :rules="[
                  val => val && val.length > 0 || 'Digita il tuo nome utente'
                ]"

              />

              <q-input
                type="password"
                filled
                v-model="user.password"
                label="Password"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Digita la tua password']"

              />
              <div>
                <q-btn label="Login" type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
</template>

<script>
import { login } from '@/models/auth/Auth';
export default {
  data() {
      return {
        user: {
          fullname: 'Pratik',
          password: '12345'
        }
      }
  },
  methods: {
    onSubmit() {
      login(this.user)
    }
  },
}
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #007db7 0%, #e140b9 100%);
  }
</style>
