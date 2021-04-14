<template>
  <div>
    <q-input v-if="editDescription && localDescription"  hint="Page description" type="textarea" v-model="localDescription.description" dense filled class="col-lg-7 col-md-12 col-sm-12 col-xs-12" >
        <template v-slot:after >
          <div class="column items-center">
          <q-btn
            @click="emitDescription()"
            color="primary"
            v-close-popup round dense flat
            icon="fa fa-save"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              save
            </q-tooltip>
          </q-btn>
          <q-btn
            @click="editDescription = false"
            color="primary"
            v-close-popup round dense flat
            icon="fa fa-ban"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              Cancel
            </q-tooltip>
          </q-btn>
          </div>
        </template>
      </q-input>

      <div v-else class="col-12">
        <q-toolbar v-if="isSuperUser()">
          <q-toolbar-title>
          </q-toolbar-title>
          <div class="q-pa-md q-gutter-sm" dense>
            <q-btn
              @click="updateDescription()"
              outline
              color="primary"
              round dense
              icon="fa fa-pen"
              padding="sm"
            />
          </div>
        </q-toolbar>
        <p :class="{description: $q.platform.is.desktop}" >
          {{ descriptionProp.description }}
        </p>
      </div>
  </div>
</template>

<script>
import { isSuperUser } from '@/models/user.js'
import { deepCopy } from '@/models/utils/common.js'
export default {
  name: 'PageDescription',
  props: ['descriptionProp'],
  data () {
    return {
      localDescription: null,
      editDescription: false
    }
  },
  mounted(){

  },
  methods: {
    isSuperUser,
    emitDescription(){
      if(this.localDescription.description.length > 3 ) this.$emit('description', this.localDescription)
    },
    updateDescription(){

      this.localDescription = deepCopy(this.descriptionProp)
      this.localDescription.category = "trainings"
      this.editDescription = true
    }
  }
}
</script>

<style lang="scss" scoped>
p.description{
  width: 80%;
  margin: auto;
}
</style>
