<template>
  <div>
    <div class="constrain q-pa-lg">
      <q-form
        v-if="form"
        @submit="onSubmit"
        class="q-gutter-md row justify-center"
      >
        <div class="q-pa-md q-gutter-sm col-12 text-center">
          <q-btn
            type="submit"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-save"
          >
            <q-tooltip
              :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate">
                Save
            </q-tooltip>
          </q-btn>
          <q-btn
            @click="resetForm()"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-ban"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              Reset form
            </q-tooltip>
          </q-btn>
          <q-btn
            to="/training"
            outline
            padding="sm"
            round
            dense
            color="primary"
            icon="fa fa-chevron-left"
          >
            <q-tooltip :offset="[10, 10]" transition-show="rotate"
              transition-hide="rotate">
              Back to trainings
            </q-tooltip>
          </q-btn>
        </div>
      <q-input
        hint="Denomination"
        class=" col-md-6 col-sm-12 col-xs-12"
          v-model="form.denomination"
          dense filled
          lazy-rules
          :rules="[
            val => val && val.length > 0 || 'Denomination canot be blank']"
        />
        <q-select
          filled
            v-model="form.status"
            :options="statusOptions"
            dense
            emit-value
            map-options
            options-dense
            class=" col-xs-8 col-sm-6 col-md-2 "

          >
            <q-tooltip
              :offset="[10, 10]"
              transition-show="rotate"
              transition-hide="rotate"
            >
              Change status
            </q-tooltip>
          </q-select>
       <q-input
        class=" col-md-4 col-sm-12 col-xs-12"
        hint="Training link"
        v-model="form.link_course"
        dense filled
        />

        <q-input
          class=" col-md-4 col-sm-12 col-xs-12"
          hint="Image Name"
          v-model="form.image_path"
          dense filled


        />
      <q-editor
        class=" col-12"
        v-model="form.description"
        min-height="20rem"
        placeholder="Description"
      />
    </q-form>
  </div>
  </div>
</template>

<script>
import  moment  from 'moment'
import { mapGetters } from 'vuex'
import { Constants } from '@/models/utils/common.js'
export default {
  name: 'trainingForm',
  props: ['trainingProp'],
  components: {

  },
  data () {
    return {
      form: null,
      statusOptions: [],
    }
  },
  computed: {
    ...mapGetters(
      [
        'currentRoute',
        'currentUser',
        'previousRoute',
      ]),
  },
  async mounted(){
    this.resetForm()
    this.statusOptions = [...Constants.STATUS]
  },
  methods: {
    resetForm(){
      let form = {
        denomination: null,
        description: "",
        link_course: null,
        image_path: null,
        status: '1'

      }
      this.form = this.trainingProp ? {...this.trainingProp} : form
      this.form.status = this.form.status ? parseInt(this.form.status) : 1
    },
    onSubmit(){
      if( this.form.denomination?.length < 1 ||
          this.form.description?.length < 1
      ){
        this.$q.notify({
          message: 'Check errors in the form!',
          color: 'red-4',
          textColor: 'white',
          icon: 'cloud_done'
        })
      }else{
        this.$emit('form', this.form)
      }
    }
  }
}
</script>
