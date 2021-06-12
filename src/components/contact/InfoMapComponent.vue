<template>
  <div class="row  justify-center">
    <ContactInfoComponent class="col-md-5 col-sm-12 col-xs-12 bg-grey-3" />
    <ContactFormComponent
      originForm="Contact"
      @formcontact="emitcontactform"
      :class="{ 'q-pl-lg': $q.screen.gt.xs }"
      class="col-md-6 col-sm-12 col-xs-12"
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
      this.$emit("formcontact", contact);
    }
  }
};
</script>
