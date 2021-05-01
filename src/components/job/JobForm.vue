<template>
  <div>
    <div class="constrain">
      <q-form
        :key="formKey"
        v-if="form"
        @submit="onSubmit"
        class="q-gutter-md column justify-center"
      >
        <div class="q-pa-md q-gutter-sm col text-center">
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
            to="/jobs"
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
        <div class="col row justify-center q-gutter-md">
          <q-input
            label="Denomination*"
            class=" col-md-5 col-sm-11 col-xs-11"
            v-model="form.denomination"
            dense filled
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Denomination canot be blank']"
          />

          <q-input
            label="Profile*"
            class="text.center col-md-5 col-sm-11 col-xs-11"
            v-model="form.profile"
            dense filled
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Profile canot be blank']"
          />
        </div>

        <div class="col row justify-center q-gutter-md items-center">
          <q-input
            label="Offer"
            class=" col-md-5 col-sm-11 col-xs-11"
            v-model="form.offer"
            dense filled
            lazy-rules
          />
          <q-input
            disable
            label="Job code(Auto generated)"
            class=" col-md-5 col-sm-11 col-xs-11"
            v-model="form.job_cod"
            dense filled
            lazy-rules
          />
        </div>
        <div class="col row justify-center q-gutter-md items-center">
          <q-input
            label="TargetCustomer"
            class=" col-md-5 col-sm-11 col-xs-11"
            v-model="form.targetCustomer"
            dense filled
            lazy-rules
          />
          <q-select
            label="Status"
            filled
            v-model="form.status"
            :options="statusOptions"
            dense
            emit-value
            map-options
            options-dense
            class=" col-xs-11 col-sm-11 col-md-5 "
          >
            <q-tooltip
              :offset="[10, 10]"
              transition-show="rotate"
              transition-hide="rotate"
            >
              Change status
            </q-tooltip>
          </q-select>
        </div>
        <div v-for="(formRichKey, index) in formRichKeys" :key="index" class="col row justify-center q-gutter-md items-center">
          <RichText
            @modelData="modelUpdate"
            :propModel="form[formRichKey]"
            :propModelName="formRichKey"
            :label="`Job ${formRichKey}`"
            class="col-md-11 col-sm-11 col-xs-11 RichTextJob"
          />
        </div>

      </q-form>
    </div>
  </div>
</template>

<script>
import  moment  from 'moment'
import { mapGetters } from 'vuex'
import { Constants, uniqCode } from '@/models/utils/common.js'
import RichText from "@/components/utils/RichText.vue"
export default {
  name: 'jobForm',
  props: ['jobProp'],
  components: {
    RichText
  },
  data () {
    return {
      formKey: 43,
      form: null,
      statusOptions: [],
      formRichKeys: ["description", "requirements","note","targetCustomerDescription"]
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
    modelUpdate(modelData){
      this.form[modelData.modelKey] = modelData.model
    },
    resetForm(){
      let form = {
        denomination: null, // string ok
        description: "", // text ok
        targetCustomer: null, // string ok
        profile: null, // string ok
        targetCustomerDescription: "", // text
        requirements: "", // text ok
        offer: null, // string ok
        note: "", // text ok
        status: '1', // ok
        job_cod: uniqCode(6)

      }
      this.form = this.jobProp ? {...this.jobProp} : form
      this.form.status = this.form.status ? parseInt(this.form.status) : 1
      this.formKey++
    },
    onSubmit(){
      if( this.form.denomination?.length < 1 ||
          this.form.description?.length < 1 ||
          this.form.profile?.length < 1 ||
          this.form.requirements?.length < 1
      ){
        this.$q.notify({
          message: 'denomination, description, profile and requirements are required!',
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
<style lang="scss">
.RichTextJob {
  min-width: 350px;
}

</style>
