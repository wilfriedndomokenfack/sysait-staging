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
            <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit
            voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at
            omnis vel numquam exercitationem aut, natus minima, porro labore.
          </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "TermsOfAgreementComponent",
  data() {
    return { model: true };
  },
};
</script>

<style lang="scss" scoped>
.diagPassword {
  border: 4px solid $primary;
  width: 100%;
}
</style>
