<template>
  <div class="row items-center">
    <div class="col-12  q-pa-xl">
      <div class="q-pb-sm text-primary">
        {{ $t("contact_info") }}
      </div>
      <div class="row text-left text-weight-regular infoContact q-pl-xs">
        <div class="col-12">
          <span class="text-bold">Email: </span> {{ company.email }}
        </div>
        <div class="col-12">
          <span class="text-bold">Address: </span> {{ company.address }}
        </div>
        <div class="col-12">
          <span class="text-bold">Tel:</span> {{ company.phone_number }}
        </div>
        <div class="col-12"></div>
      </div>

      <div class="row justify-center q-pt-sm text-primary">
        <div clickable @click="open_link(company.whatsApp)">
          <q-btn flat icon="fab fa-whatsapp" />
        </div>

        <div clickable @click="open_link(company.linkedin)">
          <q-btn flat icon="fab fa-linkedin-in" />
        </div>

        <div clickable @click="open_link(company.facebook)">
          <q-btn flat icon="fab fa-facebook" />
        </div>
      </div>
    </div>
    <div
      v-show="$q.screen.gt.sm"
      id="myMap"
      class="col-12 self-end"
      style="height: 50%;width: 100%;"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContactInfoComponent",

  data() {
    return {};
  },
  mounted() {
    if (this.$q.screen.gt.sm) this.initMap();
  },
  computed: {
    ...mapGetters(["company"])
  },
  methods: {
    open_link(linkapp) {
      
      window.open(linkapp, "_blank");
    },

    initMap() {
      this.mapData = new google.maps.Map(document.getElementById("myMap"), {
        center: { lat: 44.837151, lng: 11.5996273 },
        zoom: 10
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.infoContact {
  border-bottom: 2px solid $primary;
  border-top: 2px solid $primary;
}
</style>
