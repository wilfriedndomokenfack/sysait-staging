<template>
  <div>
    <q-btn
      @click="saveTerms()"
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
    <q-splitter
        v-model="splitterModel"
        style="height: 600px; width:100%"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            class="text-dark"
          >
            <q-tab v-for="(formsKey, index) in formsKeys" :key="index" :name="formsKey" :label="formsKey" no-caps/>
          </q-tabs>
           <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel v-for="(formsKey, index) in formsKeys" :key="index"  :name="formsKey">
             <RichText
              v-if="localCompanies"
              @modelData="modelUpdate"
              :propModel="localCompanies[formsKey].terms"
              :propModelName="formsKey"
              :label="`Terms ${formsKey}`"
            />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
  </div>
</template>

<script>
import RichText from "@/components/utils/RichText.vue"
import { mapGetters } from 'vuex'
import { deepCopy } from '@/models/utils/common.js'
export default {
  name: 'TermsManagement',
  props: ["companiesProp"],
  components: {
    RichText
  },
  data () {
    return {
      localCompanies: null,
      tab: null,
      splitterModel: 100,
      formsKeys: ["en", "fr", "it"],
      terms: {},
      lang: this.$i18n.locale,
    }
  },
  async created (){
    this.localCompanies = await deepCopy(this.companiesProp)
    this.tab = this.formsKeys[0]
  },
  computed: {
    ...mapGetters(
      [
        'company'
      ]
    ),
  },
  methods: {
    modelUpdate(modelData){
      this.localCompanies[modelData.modelKey].terms = modelData.model
    },
    saveTerms(){
      if(this.localCompanies) this.$emit("saveCompanies", this.localCompanies)
    }
  }
}
</script>
