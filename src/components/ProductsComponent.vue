<template>
  <div>
    <div
      class="w-products col-md-4 col-sm-6 col-xs-12 self-start flex flex-center q-pa-md q-col-gutter-md row"
    >
      <p>
        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della
        stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo
        secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
        per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli,
        ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente
        inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di
        caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
        recentemente da software di impaginazione come Aldus PageMaker, che includeva
        versioni del Lorem Ipsum.
      </p>
    </div>
    <q-separator />
    <div class="q-pa-md">
      <div v-for="(product, index) in propProducts">
        <div
          class="products flex flex-center q-pa-md q-col-gutter-md row"
          v-if="index % 2"
        >
          <q-separator />
          <div class="col-md-4 col-sm-6 col-xs-12 self-start">
            <p
              id="denomination"
              face="Time new roman"
              class="sysait_black flex flex-center"
            >
              <strong>{{ product.denomination }}</strong>
            </p>
            <p face="Time new roman" class="sysait_black">{{ product.description }}</p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <img :src="`products_img/${product.image_path}`" style="width: 100%" />
          </div>
        </div>
        <div class="products flex flex-center q-pa-md q-col-gutter-md row" v-else>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <img :src="`products_img/${product.image_path}`" style="width: 100%" />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 self-start">
            <p
              id="denomination"
              face="Time new roman"
              class="sysait_black flex flex-center"
              text-color="red"
            >
              <strong>{{ product.denomination }}</strong>
            </p>
            <p face="Time new roman" class="sysait_black">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductsComponent",
  props: ["propProducts"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>
<style scoped lang="scss">
.bg_grey {
  background-color: $sysait_gallery;
}
.w-products {
  width: -100px;
}
#denomination {
  color: $sysait_cerulean;
  max-height: 20px;
}
</style>
