<template>
  <q-page padding>
      <BannerPages
        bannerUrl="ImageProducts.png"
        :pageName="$t('productPage')"
        :companyName="companyName"
      />
    <div class="constrain q-pt-md">
      <PageDescription 
      class="q-pb-md" 
        :descriptionProp="pageDescription" 
        @description="updatePageDescription" 
        :key="descriptionKey" 
        category="products"
      /><q-separator />

      <ProductsComponent
        class="constrain"
        :propProducts="products"
        :descriptionProp="pageDescription"
        :key="myKey"
      />
    </div>
  </q-page>
</template>

<script>
import ProductsComponent from "@/components/product/ProductsComponent.vue";
import EmptyComponent from "@/components/utils/EmptyComponent.vue";
import BannerPages from "@/components/utils/BannerPages.vue";
import PageDescription from "@/components/utils/PageDescription.vue"
import { netWorkError } from "@/models/utils/netWorkError";
import { products } from "@/models/product.js";
import { mapGetters } from "vuex";
import { table_description, sendToTableDescriptions } from "@/models/table_description.js"
export default {
  name: "Products",
  components: {
    ProductsComponent,
    EmptyComponent,
    BannerPages,
    PageDescription,
  },
   watch: {
    currentUser: {
      immediate: true,
      handler() {
        this.myKey = !this.myKey;
      }
    },
  },
  data() {
    return {
      products: null,
      bannerUrl: null,
      pageName: null,
      companyName: null,
      pageDescription: null,
      descriptionKey: 12,
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

    this.pageDescription = this["michael/productsPageDescription"];

    this.products = this["michael/products"];
    this.bannerUrl = "ImageProducts.png";
    this.companyName = this.company.denomination;
  },
  methods: {    
    async updatePageDescription(description){
      const response = await sendToTableDescriptions(description)
      if(response){
        this.pageDescription = response
        this.descriptionKey ++
      }
    },

    async getProducts() {
      this.$q.loading.show();
      this.$q.loadingBar.start();
      try {
        const response = await products();
        // response.data = [];
        this.$store.dispatch("michael/setProducts", response?.data);
        this.myKey = !this.myKey;
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
        console.log("Response", response.data)
        this.pageDescription = response?.data;
        this.$store.dispatch("michael/setProductsPageDescription", {
          ...response?.data,
        });
      } catch (e) {
        this.pageDescription = null;
      } finally {
        this.$q.loading.hide();
      }
    },
  },
};
</script>
