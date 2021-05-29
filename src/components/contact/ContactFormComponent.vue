<template>
  <div class="q-pt-md">
    <p class="color_sysait_cerulean text-bold text-center">
      {{ $t("contact_send_email") }}
    </p>
    <div  class="row  justify-center q-gutter-md">
      <q-form
        @submit="onSubmit"
        :class="{ 'col-12': !isPopup, 'col-5': isPopup && !deviceMobile }"
      >
        <div class="row  no-wrap justify-between">
          <q-input
            class="col-xs-6 col-sm-6 col-md-6 q-pr-md"
            :label="$t('contact_firstname')"
            dense
            filled
            v-model="contact.first_name"
            lazy-rules
            :rules="[
              val =>
                (val && valFirstName(val)) || $t('contact_firstname_control')
            ]"
          />

          <q-input
            class="col-xs-6 col-sm-6  col-md-6"
            :label="$t('contact_lastname')"
            dense
            filled
            v-model="contact.last_name"
            lazy-rules
            :rules="[
              val => (val && valLastName(val)) || $t('contact_lastname_control')
            ]"
          />
        </div>
        <div :class="{ 'q-pt-md': !isErrorFirstName || !isErrorLastName }">
          <q-input
            class="col-12"
            :label="$t('contact_email')"
            placeholder="yvanfotso3@gmail.com"
            dense
            filled
            v-model="contact.email"
            lazy-rules
            :rules="[
              val => (val && validateEmail(val)) || $t('contact_email_control')
            ]"
          />
        </div>
        <div class="">
          <q-input
            class="col-12"
            :label="$t('contact_phone_number')"
            placeholder="+237 698765432"
            dense
            filled
            v-model="contact.phone_number"
            lazy-rules
            :rules="[
              val =>
                (val && validatePhone(val)) ||
                $t('contact_phone_number_control')
            ]"
          />
        </div>

        <div class="row no-wrap justify-between">
          <div class="col-xs-6 col-sm-6 col-md-6 q-pr-md">
            <q-input
              dense
              :label="$t('contact_address')"
              filled
              v-model="contact.address"
              lazy-rules
              :rules="[
                val =>
                  (val && validatetextarea(val)) ||
                  $t('contact_address_control')
              ]"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <q-input
              dense
              :label="$t('contact_pobox')"
              filled
              v-model="contact.cap"
            />
          </div>
        </div>
        <div class="row no-wrap justify-between">
          <div class="col-xs-6 col-sm-6 col-md-6 q-pr-md">
            <q-input
              dense
              :label="$t('contact_city')"
              filled
              v-model="contact.city"
              lazy-rules
              :rules="[
                val => (val && valCity(val)) || $t('contact_city_control')
              ]"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <q-input
              dense
              :label="$t('contact_country')"
              filled
              v-model="contact.country"
              lazy-rules
              :rules="[
                val => (val && valCountry(val)) || $t('contact_country_control')
              ]"
            />
          </div>
        </div>

        <div
          :class="{ 'q-pt-md': !isErrorCity || !isErrorCountry }"
          v-if="!isPopup || (isPopup && deviceMobile)"
        >
          <q-input
            filled
            v-model="contact.message"
            type="textarea"
            min-height="10rem"
            :placeholder="$t('contact_message')"
            :rules="[
              val => (val && valTextarea(val)) || $t('contact_message_control')
            ]"
          />
        </div>
        <div
          v-if="!isPopup || (isPopup && deviceMobile)"
          class="column "
          :class="{ 'q-pt-md': !isErrorTextarea }"
          style="position: relative; top: -10px;"
        >
          <div class="row items-center justify-center col">
            <q-checkbox v-model="contact.accept" />
            {{ $t("readTerms") }}
            <q-btn
              no-caps
              flat
              dense
              @click="toggleComponent()"
              class="text-primary text-bold"
              >{{ $t("read") }}
            </q-btn>

            <TermsOfAgreementComponent :key="termsKey" v-if="show" />
          </div>
          <div class="col row justify-center">
            <q-btn
              :label="$t('send_form_contact')"
              dense
              rounded
              style="width:100px"
              type="submit"
              color="primary"
            />
          </div>
        </div>
      </q-form>
      <q-form class="col-5" @submit="onSubmit" v-if="isPopup && !deviceMobile">
        <div :class="{ 'q-pt-md': !isErrorCity || !isErrorCountry }">
          <q-input
            filled
            
            v-model="contact.message"
            type="textarea"
            min-height="10rem"
            :placeholder="$t('contact_message')"
            :rules="[
              val => (val && valTextarea(val)) || $t('contact_message_control')
            ]"
          />
        </div>
        <div
          class="column "
          :class="{ 'q-pt-md': !isErrorTextarea }"
          style="position: relative; top: -10px;"
        >
          <div class="row items-center justify-center col">
            <q-checkbox v-model="contact.accept" />
            {{ $t("readTerms") }}
            <q-btn
              no-caps
              flat
              dense
              @click="toggleComponent()"
              class="text-primary text-bold"
              >{{ $t("read") }}
            </q-btn>

            <TermsOfAgreementComponent :key="termsKey" v-if="show" />
          </div>
          <div class="col row justify-center">
            <q-btn
              :label="$t('send_form_contact')"
              dense
              rounded
              style="width:100px"
              type="submit"
              color="primary"
            />
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import {
  validateEmail,
  validatePhone,
  validateName,
  validatetextarea
} from "src/models/utils/validations.js";
import TermsOfAgreementComponent from "@/components/authentication/TermsOfAgreementComponent.vue";
export default {
  name: "ContactFormComponent",
  components: { TermsOfAgreementComponent },
  props: {
    originForm: String,
    isPopup: Boolean
  },
  data() {
    return {
      contact: {
        first_name: null,
        last_name: null,
        phone_number: null,
        city: null,
        country: null,
        email: null,
        cap: null,
        address: null,
        message: "",
        category: this.originForm,
        accept: false
      },
      computed: {},
      show: false,
      termsKey: 1,
      isErrorTextarea: true,
      isErrorFirstName: true,
      isErrorLastName: true,
      isErrorCity: true,
      isErrorCountry: true
    };
  },
  computed: {
    deviceMobile: function() {
      // `this` points to the vm instance
      return (
        this.$q.screen.lt.sm || this.$q.screen.lt.xs || this.$q.screen.lt.md
      );
    }
  },
  methods: {
    validateEmail,
    validatePhone,
    validateName,
    validatetextarea,

    valTextarea(val) {
      this.isErrorTextarea = validatetextarea(val);
      return this.isErrorTextarea;
    },
    valFirstName(val) {
      this.isErrorFirstName = validateName(val);
      return this.isErrorFirstName;
    },
    valLastName(val) {
      this.isErrorLastName = validateName(val);
      return this.isErrorLastName;
    },
    valCity(val) {
      this.isErrorCity = validateName(val);
      return this.isErrorCity;
    },
    valCountry(val) {
      this.isErrorCountry = validateName(val);
      return this.isErrorCountry;
    },
    toggleComponent() {
      this.termsKey++;
      this.show = true;
    },
    onSubmit() {
      //control all input before call submit
      if (this.contact.accept == false) {
        this.$q.notify({
          message: this.$t("check"),
          color: "red-4",
          textColor: "white",
          icon: "cloud_done"
        });
      } else {
        this.contact.accept == true;
        this.$emit("formcontact", this.contact);
      }
    }
  }
};
</script>
