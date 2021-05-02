<template>

  <div class="">
    <br><p  class="color_sysait_cerulean text-bold text-center"> {{$t('contact_send_email')}} </p>
    <q-form @submit="onSubmit">
      <div class="row  no-wrap justify-between">
          <!-- <div class=""> -->
            <q-input
              class="col-xs-6 col-sm-6 col-md-6 q-pr-md"
              :label="$t('contact_firstname')"
              dense
              filled
              v-model="contact.first_name"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('contact_firstname_control')
              ]"
            />
          <!-- </div> 
          <div class="">-->
            <q-input
              class="col-xs-6 col-sm-6  col-md-6"
              :label="$t('contact_lastname')"
              dense
              filled
              v-model="contact.last_name"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('contact_lastname_control')
              ]"
            />
          <!-- </div> -->
        
      </div>
      <div class="">
        <q-input
          class="col-12"
          :label="$t('contact_email')"
          
          placeholder="yvanfotso3@gmail.com"
          dense
          filled
          v-model="contact.email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || $t('contact_email_control')]"
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
          :rules="[val => (val && val.length > 0) ||  $t('contact_phone_number_control')]"
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
              :rules="[val => (val && val.length > 0) ||  $t('contact_address_control')]"
          />
              
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <q-input
              dense
              :label="$t('contact_pobox')"
              filled
              v-model="contact.cap"
              lazy-rules
              :rules="[val => (val && val.length > 0)]"
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
            :rules="[val => (val && val.length > 0) || $t('contact_city_control')]"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6">
          <q-input
          
          dense
          :label="$t('contact_country')"
          filled
          v-model="contact.country"
          lazy-rules
          :rules="[val => (val && val.length > 0) || $t('contact_country_control')]"
        />
          
        </div>
        
      </div>
      <div class=" q-pb-md">
        <q-editor
          class="col-12 text-left"
          v-model="contact.message"
          min-height="10rem"
          :placeholder="$t('contact_message')"
        />
      </div>
      <div class="text-right">
        <q-btn :label="$t('send_form_contact')" type="submit" color="primary" /><br />
      </div>
    </q-form>
  </div>

</template>

<script>
export default {
  name: "ContactFormComponent",
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
        category: "From contact form"
      }
    };
  },
  methods: {
    onSubmit() {
      //control all input before call submit
      if (
        this.contact.first_name?.length < 1 ||
        this.contact.last_name?.length < 1 ||
        this.contact.phone_number?.length < 1 ||
        this.contact.city?.length < 1 ||
        this.contact.country?.length < 1 ||
        this.contact.email?.length < 1 ||
        this.contact.address?.length < 1 ||
        this.contact.cap?.length < 1 ||
        this.contact.message?.length < 1
      ) {
        this.$q.notify({
          message: "Check errors in the form!",
          color: "red-4",
          textColor: "white",
          icon: "cloud_done"
        });
      } else {
        //console.log(this.contact)
        this.$emit("formcontact", this.contact);
      }
    }
  }
};
</script>
<style scoped>
.title_msg_form{
  color: #4CAF50;

}
</style>
