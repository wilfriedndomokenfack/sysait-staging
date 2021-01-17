<template>
 <div class="q-pa-md q-gutter-md" style="max-width: 350px">
    
    <div>
      SANDRINE'S componnent 
    </div>

    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>

      <q-item clickable v-ripple active-class="text-orange">
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active, Active class</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>

      <q-item clickable v-ripple active-class="bg-teal-1 text-grey-8">
        <q-item-section avatar>
          <q-icon name="signal_wifi_off" />
        </q-item-section>
        <q-item-section>Active, Active class</q-item-section>
        <q-item-section side>Side</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
