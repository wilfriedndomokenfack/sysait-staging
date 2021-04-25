<template>
  <q-page >
    <q-dialog v-model="model" :key="muKey">

      <q-card style="width: 300px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Email confirmation</div>
        </q-card-section>

        <q-card-section class=" flex flex-center">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup @click="goHome()"/>
        </q-card-actions>
      </q-card>

    </q-dialog>

  </q-page>
</template>

<script>
import Api from "@/models/Api";
export default {
  name: 'EmailConfirmationPage',
  data() {
    return {
      muKey: 3,
      model: true,
      confirmation_token: this.$route.params.confirmation_token ?? null,
      message: "Email confermato",
    };
  },
  async mounted(){
    this.$q.loading.show();
    console.log(this.confirmation_token)
    try {
      const response = await Api().post("users/confirmation", { params: { confirmation_token: this.confirmation_token } });
      this.message = response?.data ?? null
      this.muKey++
    } catch (error) {
      this.message = error
    }finally{
      this.$q.loading.hide();
    }
  },
  methods: {
    goHome(){
      this.$router.push({ path: "/"})
    }
  }
}
</script>
