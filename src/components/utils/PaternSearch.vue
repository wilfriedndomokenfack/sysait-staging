<template>
  <div>
    <q-input clearable dense v-model="search_token" type="search" label="Job Code">
      <template v-slot:append>
        <q-icon color="primary" name="fa fa-search" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'PaternSearch',
  watch: {
    search_token: {
      immediate: true,
      handler() {
        this.emitData()
      }
    },
  },
  data () {
    return {
      search_token: ''
    }
  },
  methods: {
    emitData(){
      this.$emit('paternSearch', this.search_token )
    }
  }
}
</script>
