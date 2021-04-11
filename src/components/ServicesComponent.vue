<template>
  <div>
    <div class="q-pa-md">
      <div
        v-for="(service, index) in propServices"
        :class="{ bg_grey: index % 2 }"
        class="services flex flex-center q-pa-md q-col-gutter-md row"
      >
        <div class="col-md-4 col-sm-6 col-xs-12 self-start">
          <p id="denomination" class="sysait_black flex flex-left">
            <strong>{{ service.denomination }}</strong>
          </p>
          <p  class="sysait_black">{{ service.description }}</p>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <img :src="`services_img/${service.image_path}`" style="width: 100%" />
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
<style scoped lang="scss">
.bg_grey {
  background-color: $sysait_gallery;
}
.services {
  margin: 0 auto;
}
</style>
