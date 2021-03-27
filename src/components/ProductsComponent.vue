<template>
  <div>
    <div :class="{ w_products: !this.$q.screen.lt.md }" class="text-center q-pa-md">
      Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della
      stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo
      secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò
      per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato.
      Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri
      trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
      recentemente da software di impaginazione come Aldus PageMaker, che includeva
      versioni del Lorem Ipsum.
    </div>
    <q-separator />
    <div class="q-pa-md">
      <div v-for="(product, index) in propProducts">
        <div
          class="products flex flex-center q-pa-md q-col-gutter-md row"
          v-if="index % 2"
        >
          <div class="col-md-4 col-sm-6 col-xs-12 self-start">
            <p
              id="denomination"
              face="Time new roman"
              class="sysait_black flex flex-center"
            >
              <strong>
                <a :href="product.link">{{ product.denomination }}</a>
              </strong>
            </p>
            <p face="Time new roman" class="sysait_black">{{ product.description }}</p>
            <div class="q-pa-md btn-1" style="text-align: center">
              <q-btn
                color="blue"
                text-color="black"
                :label="$t('readMore')"
                @click="sendProductId(product.id)"
              />
            </div>
          </div>

          <div class="static2 col-md-4 col-sm-6 col-xs-12">
            <img :src="`products_img/${product.image_path}`" style="width: 100%" />
            <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center moved2"></div>
          </div>
        </div>
        <div class="products flex flex-center q-pa-md q-col-gutter-md row" v-else>
          <div class="col-md-4 col-sm-6 col-xs-12 flex-center moved1"></div>
          <div class="static1 col-md-4 col-sm-6 col-xs-12">
            <img :src="`products_img/${product.image_path}`" style="width: 100%" />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 self-start">
            <p
              id="denomination"
              face="Time new roman"
              class="sysait_black flex flex-center"
              text-color="red"
            >
              <strong>
                <a :href="product.link">{{ product.denomination }}</a>
              </strong>
            </p>
            <p face="Time new roman" class="sysait_black">{{ product.description }}</p>
            <div class="q-pa-md btn-1" style="text-align: center">
              <q-btn
                color="blue"
                text-color="black"
                :label="$t('readMore')"
                @click="sendProductId(product.id)"
              />
            </div>
          </div>
          <q-separator class="q-pa-md" />
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

  methods: {
    sendProductId(product_id) {
      this.$router.push({ name: "product", params: { product_id } });
    },
  },
};
</script>
<style scoped lang="scss">
.w_products {
  width: 50%;
  margin: auto;
}
#denomination {
  color: $sysait_cerulean;
  max-height: 20px;
}
.moved2 {
  transform: translate(-120px, -120px);
  background-color: $sysait_cerulean;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin: 120px;
}
.static2 {
  transform: translate(100px, 180px);
}
.moved1 {
  transform: translate(280px, 150px);
  background-color: $sysait_cerulean;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin: -60px;
}
.static1 {
  transform: translate(-140px, 4px);
}
</style>
