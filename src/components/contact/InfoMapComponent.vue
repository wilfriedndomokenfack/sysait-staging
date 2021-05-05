<template>
  <div class="row  justify-center">
    <ContactInfoComponent class="col-md-5 col-sm-12 col-xs-12 bg-grey-3" />
    <ContactFormComponent
      @formcontact="emitcontactform"
      class="col-md-6 col-sm-12 col-xs-12 q-pl-lg "
    />
  </div>
</template>

<script>
import ContactInfoComponent from "@/components/contact/ContactInfoComponent.vue";
import ContactFormComponent from "@/components/contact/ContactFormComponent.vue";
export default {
  name: "InfoMapComponent",
  components: {
    ContactInfoComponent,
    ContactFormComponent
  },
  data() {
    return {};
  },
  methods: {
    emitcontactform(contact) {
      //console.log("ifomap:",contact)
       this.$emit('formcontact',contact)
    }
  }
};
</script>
