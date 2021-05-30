<template>
  <div>
    <q-dialog v-model="model" full-width>
      <q-card>
        <div
          class="bg-primary text-bold text-white row justify-end items-center"
        >
          <div class="col-12 text-center">
            <span
              class="applyTitle"
              :class="{
                'text-h4': $q.screen.gt.xs,
                'text-h5': !$q.screen.gt.xs
              }"
              >{{ $t(titlePopup) }}</span
            >
          </div>

          <div class="col-1 text-right">
            <q-btn
              class="closeBtn"
              :class="{
                'text-h5': $q.screen.gt.xs,
                'text-h5': !$q.screen.gt.xs
              }"
              dense
              flat
              icon="close"
              v-close-popup
            >
              <q-tooltip>{{ $t("close") }}</q-tooltip>
            </q-btn>
          </div>
        </div>
        <div>
          <q-card-section>
            <ContactFormComponent
              :isPopup="true"
              :originForm="originFormContact"
              :key="termsKey"
              @formcontact="emitcontactform"
            />
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue";

export default {
  name: "PopupContactFormComponent",
  components: {
    ContactFormComponent
  },

  props: {
    originFormParent: String,
    titlePopup: String
  },

  data() {
    return {
      model: true,
      originFormContact: this.originFormParent,
      termsKey: 1,
      show: false,
    };
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
.applyTitle {
  position: relative;
  @media (min-width: 400px) {
    top: 15px;
  }
  @media (max-width: 400px) {
    top: 25px;
  }
}
.closeBtn {
  position: relative;
  @media (min-width: 400px) {
    top: -25px;
    left: -10px;
  }
  @media (max-width: 400px) {
    top: -20px;
    left: -30px;
  }
}
</style>
