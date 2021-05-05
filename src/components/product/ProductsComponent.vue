<template>
  <div>
    <p :class="{ w_products: !this.$q.screen.lt.md }" class="q-pa-md">
      {{ descriptionProp }}
    </p>
    <q-separator />
    <div class="q-pa-md">
      <div
        class="products q-pa-md q-col-gutter-md row justfy-between items-center"
        :class="{ bg_grey: index % 2 }"
        v-for="(product, index) in propProducts"
      >
        <div class="static1 col-md-3 col-sm-6 col-xs-12 text-center">
          <img :src="`products_img/${product.image_path}`" style="width: 85%" />
        </div>
        <div class="col-md-9 col-sm-6 col-xs-12 self-start">
          <div
            class="sysait_black text-center"
          >
            <q-item  class="">
              <q-item-section>
                <q-item-label clickable @click="redirectTo(product.link)" id="product_denomination" class="color_sysait_cerulean text-bold text-h6">
                  {{ product.denomination  }}
                </q-item-label>
              </q-item-section>
              <q-tooltip
                :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate"
                content-class="tooltip"
              >
                {{ $t("clickMeProducts") }}
              </q-tooltip>
            </q-item>
          </div>
          <p class="sysait_black q-pt-md">{{ product.description }}</p>
          <div class="q-pa-md btn-1" style="text-align: center">
            <q-btn
              class="bg_sysait_cerulean text-white "
              no-caps
              dense
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
import ClientProductsComponent from "@/components/product/ClientProductsComponent.vue";
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
    redirectTo(link){
      window.open(link);
    },
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

#product_denomination{
  cursor: pointer;
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
