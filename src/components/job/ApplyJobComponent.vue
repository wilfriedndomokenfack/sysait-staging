<template>
  <div class="">
    <q-dialog v-model="model"  full-width >
      <q-card class="">
        <q-bar class="bg-primary text-bold text-white">
          <div class="text-center"> {{ $t("apply") }}</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="">
          
        <q-card-section class="">
          <ContactFormComponent
            :isPopup="true"
            originForm="Job"
            @formcontact="emitcontactform"
          />
          
        </q-card-section>
        </div>

      </q-card>
    </q-dialog>
    <!-- <q-dialog v-model="model" full-width>
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="row"> 
            <div class="col-11 text-center">
              {{ $t("apply") }}
            </div>
            <div class="col-1 text-left">
              <q-btn flat v-close-popup round dense icon="close" />
            </div>
          </div>
        </q-card-section>

        <q-card-section style="" class="">
          <ContactFormComponent
            :isPopup="true"
            originForm="Job"
            @formcontact="emitcontactform"
          />
        </q-card-section>

      </q-card>
    </q-dialog> -->
   
  </div>
</template>

<script>
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue";

export default {
  components: {
    ContactFormComponent
  },

  name: "ApplyJobComponent",
  data() {
    return {
      model: true,
      originForm: null
    };
  },
  async mounted() {
    this.originForm = "Job";
  },
  methods: {
    emitcontactform(contact) {
      this.$emit("formcontact", contact);
    }
  }
};
</script>

<style lang="scss" scoped>
.diagPassword {
  border: 4px solid $primary;
  width: 100%;
}
</style>
