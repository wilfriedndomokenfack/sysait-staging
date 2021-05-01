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
          <q-btn flat label="OK" v-close-popup/>
        </q-card-actions>
      </q-card>

    </q-dialog>

  </q-page>
</template>

<script>
import Api from "@/models/Api";
export default {
  name: 'EmailConfirmationPage',
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
      muKey: 3,
      model: true,
      fullPath: this.$route.fullPath,
      message: "Email confermato",
    };
  },
  async mounted(){
    this.$q.loading.show();
    const confirmation_token = this.fullPath.split("=")[1];
    try {
      const response = await Api().post("users/confirmation", { params: { confirmation_token: confirmation_token } });
      this.message = response?.data.message ?? null
      this.muKey++
    } catch (error) {
      this.message = error + " try again latter"
    }finally{
      this.$q.loading.hide();
    }
  },
  methods: {
    goHome(){
      this.$router.push({ path: "/signin"})
    }
  }
}
</script>
