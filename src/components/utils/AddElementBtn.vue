<template>
  <div>
    <div v-if="isAdmin">
      <div class="row justify-end items-end">
        <div class="q-pa-md q-gutter-sm col-md-3 col-sm-6 col-xs-12">
          <PaternSearch @paternSearch="emitSearch"/>
        </div>
        <div class="q-pa-md q-gutter-sm col-md-3 col-sm-6 col-xs-12">
          <StatusFilter @statusFilter="emitData"/>
        </div>
        <div class="q-pa-md q-gutter-sm col-md-3 col-sm-12 col-xs-12" dense>
          <q-btn
            @click="redirect()"
            outline round dense
            color="primary"
            icon="fa fa-plus"
            padding="sm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSuperUser } from '@/models/user.js'
import StatusFilter from "@/components/utils/StatusFilter.vue"
import PaternSearch from "@/components/utils/PaternSearch.vue"
export default {
  name: 'AddElementBtn',
  components: {
    StatusFilter,
    PaternSearch
  },
  props: ['link', 'params'],
  data () {
    return {
      isAdmin: false,
    }
  },
  async mounted () {
     this.isAdmin = await isSuperUser()
  },
  methods: {
    redirect(){
      this.$router.push({ name: this.link, params: this.params })
    },
    emitData(model){
      this.$emit('statusFilter', model)
    },
     emitSearch(searchPatern){
      this.$emit('searchPatern', searchPatern)
    }
  }
}
</script>
