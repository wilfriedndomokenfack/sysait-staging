<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="$t('productPage')"
        :companyName="companyName"
      />

      <ProductsComponent :propProducts="products" :key="myKey" />
    </div>
  </q-page>
</template>

<script>
import ProductsComponent from "@/components/ProductsComponent.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import BannerPages from "@/components/utils/BannerPages.vue";
import { netWorkError } from "@/models/utils/netWorkError";
import { products } from "@/models/product.js";
import { mapGetters } from "vuex";
export default {
  name: "Products",
  components: {
    ProductsComponent,
    EmptyComponent,
    BannerPages,
  },
  data() {
    return {
      products: null,
      bannerUrl: null,
      pageName: null,
      companyName: null,
      myKey: 0,
    };
  },
  computed: {
    ...mapGetters(["michael/products", "company", "previousRoute"]),
  },
  async mounted() {
    if (!this["michael/products"]) {
      await this.getProducts();
    }
    this.products = this["michael/products"];
    this.bannerUrl = "ImageProducts.png";
    this.companyName = this.company.denomination;
  },
  methods: {
    async getProducts() {
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try {
        const response = await products();
        // response.data = [];
        this.$store.dispatch("michael/setProducts", response?.data);
        this.myKey = !this.myKey;
        // notify("green", "Services uploaded successfull");
      } catch (e) {
        netWorkError(this.$t("netWorkErrorMSG") + " " + e);
        this.$router.push({ name: this.previousRoute });
      } finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    },
  },
};
</script>
