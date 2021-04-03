<template>
  <div>
    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md col-md-6 col-sm-12 col-xs-12"
      >
        <div class="q-gutter-sm flex flex-center">
          <q-btn
            type="submit"
            outline
            color="primary"
            round
            dense
            padding="sm"
            icon="fa fa-save"
          >
            <q-tooltip
              :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate">
                Save
            </q-tooltip>
          </q-btn>
        </div>
      <q-input  hint="Denomination"
                v-model="form.denomination"
                dense filled
                bg-color="primary"
                lazy-rules
                :rules="[
                  val => val && val.length > 0 || 'Denomination canot be blank']"
        />
       <q-input  hint="Training link"
                v-model="form.link_course"
                dense filled
                bg-color="primary"
                class="" />
        <q-input  hint="Image Name"
                v-model="form.image_path"
                dense filled
                bg-color="primary"
                class=""
        />
      <q-editor
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
export default {
  name: 'trainingForm',
  props: ['trainingProp'],
  components: {

  },
  data () {
    return {
      form: {
        denomination: null,
        description: "",
        link_course: null,
        image_path: null
      }

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
    if(this.trainingProp) this.form = {...this.trainingProp}
  },
  methods: {
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
