<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="model" persistent>
      <q-layout view="Lhh lpR fff" container class="bg-white ">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              {{ $t("apply") }}</q-toolbar-title
            >
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
            <ContactFormComponent
              originForm="Job"
              @formcontact="emitcontactform"
            />
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
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
