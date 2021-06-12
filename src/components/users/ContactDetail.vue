<template>
  <div>
    <q-dialog v-model="model">
      <q-card class="q-pr-md">
        <q-card-section>
          <div class="text-h6">
            Message from {{ propMsg.first_name.toUpperCase() }}
            {{ propMsg.last_name.toUpperCase() }}
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-subtitle2">{{ propMsg.email }}</div>
              <div class="text-subtitle2">{{ propMsg.phone_number }}</div>
              <div class="text-subtitle2">{{ propMsg.address }}</div>
              <div class="text-subtitle2">{{ propMsg.city }}</div>
              <div class="text-subtitle2">{{ propMsg.country }}</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          {{ propMsg.message }}
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  props: {
    propMsg: String
  },

  data() {
    return {
      model: true
    };
  },

  methods: {}
};
</script>
