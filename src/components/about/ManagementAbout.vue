<template>
  <div class="div_center">
    <div>
      <br /><span class="title_about">Management</span> <br /><br />
    </div>
   
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        v-for="(hc, index) in listHumanComponent"
        :key="index"
        class="my-card"
        flat
        bordered
      >
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

        <q-card-section>
          <div class="text-overline text-orange-9">
            {{ hc.first_name }} {{ hc.last_name }}
          </div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ hc.position }}</div>
          <div class="text-caption text-grey">
            {{ hc.description }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagementAbout",
  props: {
    listHumanComponent: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
}
.dim_img {
  width: 100px;
  height: 100px;
}
.my-card {
  width: 235px;
  //height: 250px;
  // max-width: 350px
}
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
</style>
