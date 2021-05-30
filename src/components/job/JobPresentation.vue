<template>
  <div class="column">
    <div class=" col text-h6 text-bold job-denomination">
      {{ jobProp.denomination.toUpperCase() }}
      <span class="text-primary">REF-{{ jobProp.job_cod.toUpperCase() }}</span>
    </div>
    <div class="col text-right q-pb-xl">
      <q-btn
        padding="xs"
        :label="$t('candidacyJob')"
        @click="toggleComponent()"
        dense
        color="primary"
        icon="fa fa-paper-plane"
      />
    </div>
    <div class="col" v-if="jobProp.published_at">
      {{ $t("publishedOn") }}
      <span class="q-pt-md text-bold">{{ jobDate }}</span>
    </div>
    <div class="col" v-if="jobProp.targetCustomer">
      <ul>
        <li color="primary">{{ jobProp.targetCustomer }}</li>
        <li v-if="jobProp.profile">{{ jobProp.profile }}</li>
      </ul>
    </div>

    <div class="col" v-if="jobProp.targetCustomerDescription">
      <div class="text-bold">
        {{ $t("targetCustomer").toUpperCase() }}
      </div>
      <div v-html="jobProp.targetCustomerDescription"></div>
    </div>

    <div class="col q-pt-md" v-if="jobProp.description">
      <div class="text-bold">
        {{ $t("description").toUpperCase() }}
      </div>
      <div v-html="jobProp.description"></div>
    </div>

    <div class="col q-pt-md" v-if="jobProp.requirements">
      <div class="text-bold">
        {{ $t("skillsJob").toUpperCase() }}
      </div>
      <div v-html="jobProp.requirements"></div>
    </div>
    <div class="col q-pt-md" v-if="jobProp.offer">
      <div class="text-bold">
        {{ $t("offerJob").toUpperCase() }}
      </div>
      <div>
        {{ jobProp.offer }}
      </div>
    </div>
    <div class="col q-pt-md q-pb-xl job-note" v-if="jobProp.note">
      <div class="text-bold">
        {{ $t("noteJob").toUpperCase() }}
      </div>
      <div v-html="jobProp.note"></div>
    </div>
    <div class="col text-right q-pb-xl">
      <q-btn
        padding="xs"
        :label="$t('candidacyJob')"
        dense
        @click="toggleComponent()"
        color="primary"
        icon="fa fa-paper-plane"
      />
      <PopupContactFormComponent
        originFormParent="Job"
        titlePopup="apply"
        :key="termsKey"
        v-if="show"
        @formcontact="emitcontactform"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import PopupContactFormComponent from "@/components/job/PopupContactFormComponent.vue";

export default {
  name: "JobPresentation",
  components: {
    PopupContactFormComponent
  },
  props: ["jobProp"],
  data() {
    return {
      show: false,
      termsKey: 1
    };
  },
  computed: {
    jobDate() {
      moment.locale(this.$i18n.locale);
      return moment(this.jobProp.published_at).format("LL");
    }
  },
  mounted() {},
  methods: {
    toggleComponent() {
      this.termsKey++;
      this.show = true;
    },
    emitcontactform(contact) {
      this.$emit("formcontact", contact);
    }
  }
};
</script>

<style lang="scss">
.job-denomination,
.job-note {
  border-bottom: 2px solid $primary;
}
</style>
