<template>
  <div>
    <div class="q-pa-md">
      <div
        v-for="(product, index) in propProducts"
        :class="{ bg_grey: index % 2 }"
        class="products flex flex-center q-pa-md q-col-gutter-md row"
      >
        <div class="col-md-4 col-sm-6 col-xs-12 self-start">
          <p id="denomination" face="Time new roman" class="sysait_black flex flex-left">
            <strong>{{ product.denomination }}</strong>
          </p>
          <p face="Time new roman" class="sysait_black">{{ product.description }}</p>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <img :src="`products_img/${product.image_path}`" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsComponent",
  props: ["propProducts"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.bg_grey {
  background-color: $sysait_gallery;
}
.products {
  margin: 0 auto;
}
</style>
