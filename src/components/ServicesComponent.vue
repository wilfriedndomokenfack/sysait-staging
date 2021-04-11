<template>
  <div>
    <div class="">
      <div
        v-for="(service, index) in propServices"
        :class="{ bg_grey: index % 2 }"
        class="services q-pa-md q-col-gutter-md row justify-between items-center"
      >
        <div class="col-md-9 col-sm-6 col-xs-12 self-start">
          <p id="denomination" class="sysait_black flex flex-left">
            <strong>{{ service.denomination }}</strong>
          </p>
          <p  class="sysait_black">{{ service.description }} </p>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 text-center">
          <img :src="`services_img/${service.image_path}`" style="width: 85%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesComponent",
  props: ["propServices"],
  data() {
    return {};
  },
};
</script>
<
<style scoped lang="scss">
.bg_grey {
  background-color: $sysait_gallery;
}
.services {
  margin: 0 auto;
}
</style>
