<template>
  <div>
    <p class="q-pt-lg text-center">
      {{ $t("trainingContact") }}

      <q-btn
        no-caps
        flat
        dense
        @click="toggleComponent()"
        class="text-primary text-bold"
      >
        {{ $t("contacts") }}
      </q-btn>
      <PopupContactFormComponent
        originFormParent="Training"
        titlePopup="apply_training"
        :key="termsKey"
        v-if="show"
        @formcontact="emitcontactform"
      />
    </p>
  </div>
</template>

<script>
import PopupContactFormComponent from "@/components/job/PopupContactFormComponent.vue";
export default {
  name: "SendUserFromTrainingToConntacts",
  components: {
    PopupContactFormComponent
  },
  data() {
    return {
      show: false,
      termsKey: 1
    };
  },
  methods: {
    toggleComponent() {
      this.termsKey++;
      this.show = true;
    },
    emitcontactform(contact) {
      this.$emit("formcontact", contact);
    }
  }
};
</script>
