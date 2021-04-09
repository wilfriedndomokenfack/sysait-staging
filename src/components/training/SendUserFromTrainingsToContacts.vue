<template>
  <div>
    <p class="q-pt-lg text-center">
      {{ $t('trainingContact') }} <q-btn no-caps flat dense to="/contact" class="text-primary text-bold">{{ $t('contacts') }}</q-btn>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SendUserFromTrainingToConntacts',
  data () {
    return {}
  }
}
</script>
