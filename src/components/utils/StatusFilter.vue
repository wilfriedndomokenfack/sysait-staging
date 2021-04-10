<template>
  <div>
    <q-select
      v-model="model"
      :options="options"
      label="Status filter"
      multiple
      emit-value
      map-options
      dense
    >
      <template v-slot:option="scope" >
        <q-item
          v-bind="scope.itemProps"
          v-on="scope.itemEvents"
        >
          <q-item-section >
            <q-item-label v-html="scope.opt.label" ></q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="model" :val="scope.opt.value" />
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { Constants } from '@/models/utils/common.js'
export default {
  name: 'StatusFilter',
  watch: {
    model: {
      immediate: true,
      handler() {
        this.emitData()
      }
    },
  },
  data () {
    return {
      model: [],
      options: null,
    }
  },
  mounted(){
    this.model = []
    this.options = Constants.STATUS
  },
  methods: {
    emitData(){
      this.$emit('statusFilter', this.model)
    }
  }
}
</script>
