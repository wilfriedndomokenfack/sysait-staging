<template>
  <div>
    <div :class="{ w_products: !this.$q.screen.lt.md }" class="text-center q-pa-md"></div>
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
            <!-- <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center moved2"></div> -->
          </div>
        </div>
        <div class="products flex flex-center q-pa-md q-col-gutter-md row" v-else>
          <!-- <div class="col-md-4 col-sm-6 col-xs-12 flex-center moved1"></div> -->
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
          <!-- <q-separator /> -->
        </div>
      </div>
    </div>
    <q-separator />
    <div class="trust flex fex-center">
      <h5>{{ this.$t("trustUs") }}</h5>
    </div>

    <ClientProductsComponent class="q-pa-md" />
  </div>
</template>

<script>
import ClientProductsComponent from "@/components/ClientProductsComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductsComponent",
  components: {
    ClientProductsComponent,
  },
  props: ["propProducts"],
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["products", "michael/productsPageDescription"]),
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
/*.moved2 {
  transform: translate(-140px, -170px);
  background-color: #273c53;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin: 120px;
}
.static2 {
  transform: translate(20px, 0px);
}
.moved1 {
  transform: translate(400px, 140px);
  background-color: $sysait_cerulean;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin: -60px;
}
.static1 {
  transform: translate(-20px, -10px);
}
*/
.trust {
  width: 15%;
  margin: auto;
}
</style>
