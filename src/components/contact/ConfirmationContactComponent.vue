<template>
  <div>
    <q-dialog v-model="model">
      <q-card style="width: 300px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section class="flex flex-center">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmationContactComponent",
  props:{
    propTitle:String,
    propMessage:String
  },

  data() {
    return {
      title:this.propTitle,
      message:this.propMessage,
      model:true
      };
  },
};
</script>
