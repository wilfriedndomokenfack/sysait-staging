<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="$t('productPage')"
        :companyName="companyName"
      />

      <ProductsComponent
        :propProducts="products"
        :descriptionProp="pageDescription"
        :key="myKey"
      />
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
import { table_description } from "@/models/table_description.js";
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
      pageDescription: "",
      myKey: 0,
    };
  },
  computed: {
    ...mapGetters([
      "michael/products",
      "company",
      "previousRoute",
      "michael/productsPageDescription",
    ]),
  },
  async mounted() {
    if (!this["michael/products"]) {
      await this.getProducts();
    }

    if (!this["michael/productsPageDescription"]) {
      this.getPageDescription();
    }

    this.pageDescription = this["michael/productsPageDescription"]?.description ?? "";

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

    async getPageDescription() {
      this.$q.loading.show();
      try {
        const response = await table_description("products");
        this.pageDescription = response?.data.description;
        this.$store.dispatch("michael/setProductsPageDescription", {
          ...response?.data,
        });
      } catch (e) {
        this.pageDescription = "";
      } finally {
        this.myKey = !this.myKey;
        this.$q.loading.hide();
      }
    },
  },
};
</script>
