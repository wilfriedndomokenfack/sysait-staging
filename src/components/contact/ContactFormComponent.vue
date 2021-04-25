<template>
  <div class="">
    <q-form @submit="onSubmit">
      <div class=" no-wrap justify-between q-gutter-xs q-pb-md">
        <q-input
          class="col-12"
          hint="First name*"
          dense
          filled
          v-model="contact.firstname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          class="col-12"
          hint="Last name*"
          dense
          filled
          v-model="contact.lastname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class=" q-pb-md">
        <q-input
          class="col-12"
          hint="Email*"
          placeholder="yvanfotso3@gmail.com"
          dense
          filled
          v-model="contact.email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class=" q-pb-md">
        <q-input
          class="col-12"
          hint="Phone number*"
          placeholder="+237 698765432"
          dense
          filled
          v-model="contact.phone"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class=" no-wrap justify-between q-gutter-xs q-pb-md">
        <q-input
          class="col-12"
          dense
          hint=" Address*"
          filled
          v-model="contact.address"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          class="col-12"
          dense
          hint="P.O Box*"
          filled
          v-model="contact.pobox"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class=" no-wrap justify-between q-gutter-xs q-pb-md">
        <q-input
          class="col-12"
          dense
          hint="City*"
          filled
          v-model="contact.city"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          class="col-12"
          dense
          hint="Country*"
          filled
          v-model="contact.country"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class=" q-pb-md">
        <q-editor
          class="col-12 text-left"
          v-model="contact.message"
          min-height="10rem"
          placeholder="Message"
        />
      </div>
      <div class="text-left">
        <q-btn label="Send" type="submit" color="primary" /><br />
      </div>
    </q-form>
  </div>
</template>

<script>
 import { sendcontactform } from '@/models/contact/FormContact.js';
export default {
  name: 'ContactFormComponent',
  data () {
    return {
      contact:{
      firstname: "",
      lastname: "",
      phone: "",
      city: "",
      country: "",
      city:"",
      email: "",
      pobox: "",
      address: ""
      }

    }
  },
  methods:{
    onSubmit(){
      contactform(this.contact)

      console.log(this.contact.firstname)
      console.log(this.contact.lastname)

    }
  }
}
</script>
