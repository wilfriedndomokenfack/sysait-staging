<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-grey-3">
      <template v-slot:avatar>
        <img
          src="~assets/sysait_ecran.png"
          style="width: 100px; height: 64px"
        >
      </template>

      Could not retrieve vision data.
      <template v-slot:action>
        <q-btn flat label="Retry" />
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">

</style>