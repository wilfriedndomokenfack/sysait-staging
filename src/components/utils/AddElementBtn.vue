<template>
  <div>
    <q-toolbar v-if="isAdmin">
      <q-toolbar-title>
      </q-toolbar-title>
      <div class="q-pa-md q-gutter-sm col-md-3 col-sm-6 col-xs-8">
        <StatusFilter @statusFilter="emitData"/>
      </div>
      <div class="q-pa-md q-gutter-sm" dense>
        <q-btn
          @click="redirect()"
          outline round dense
          color="primary"
          icon="fa fa-plus"
          padding="sm"
        />
      </div>
    </q-toolbar>
  </div>
</template>

<script>
import { isSuperUser } from '@/models/user.js'
import StatusFilter from "@/components/utils/StatusFilter.vue"
export default {
  name: 'AddElementBtn',
  components: {
    StatusFilter
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
    }
  }
}
</script>
