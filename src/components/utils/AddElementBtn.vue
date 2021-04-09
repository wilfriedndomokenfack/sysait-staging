<template>
  <div>
    <q-toolbar v-if="isSuperUser()">
      <q-toolbar-title>
      </q-toolbar-title>
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
export default {
  name: 'AddElementBtn',
  props: ['link', 'params'],
  data () {
    return {}
  },
  methods: {
    isSuperUser,
    redirect(){
      this.$router.push({ name: this.link, params: this.params })
    }
  }
}
</script>
