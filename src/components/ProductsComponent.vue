<template>
  <div>
    <div :class="{ w_products: !this.$q.screen.lt.md }" class="text-center q-pa-md">
      {{ descriptionProp }}
    </div>
    <q-separator />
    <div class="q-pa-md">
      <div
        class="products q-pa-md q-col-gutter-md row justfy-between"
        :class="{ bg_grey: index % 2 }"
        v-for="(product, index) in propProducts"
      >
        <div class="static1 col-md-3 col-sm-6 col-xs-12">
          <img :src="`products_img/${product.image_path}`" style="width: 85%" />
        </div>
        <div class="col-md-9 col-sm-6 col-xs-12 self-start">
          <p
            id="denomination"
            face="Time new roman"
            class="sysait_black text-center"
            text-color="red"
          >
            <strong>
              <a :href="product.link">{{ product.denomination }}</a>
              <q-tooltip
                :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate"
                content-class="tooltip"
              >
                <strong>{{ $t("clickMeProducts") }}</strong>
              </q-tooltip>
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
      </div>
    </div>
    <q-separator />
    <div class="trust col-md-4 col-sm-6 col-xs-12">
      <h5>{{ $t("trustUs") }}</h5>
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
  props: ["propProducts", "descriptionProp"],
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
.trust {
  width: 70%;
  padding: 2px;
  margin: auto;
  text-align: center;
}
.bg_grey {
  background-color: $sysait_gallery;
}
</style>
