<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="model" persistent >
      <q-layout view="Lhh lpR fff" container class="bg-white ">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Terms of Agreement</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container class="diagPassword">
          <q-page padding>
            <div v-if="company.terms" v-html="company.terms"></div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "TermsOfAgreementComponent",
  data() {
    return { model: true };
  },
   computed: {
    ...mapGetters(
      [
        'company'
      ]),
  },
};
</script>

<style lang="scss" scoped>
.diagPassword {
  border: 4px solid $primary;
  width: 100%;
}
</style>
