<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="$t('pageName')"
        :companyName="companyName"
      />
    </div>

    <ProductComponent :propProduct="product" v-if="product" :key="myKey" />
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import ProductComponent from "@/components/ProductComponent/ProductComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "Product",
  components: {
    BannerPages,
    ProductComponent
  },
  data() {
    return {
      bannerUrl: null,
      pageName: null,
      companyName: null,
      productId: this.$route.params.product_id,
      products: null,
      product: null,
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["michael/products", "company"])
  },
  async mounted() {
    if (!this["michael/products"]) {
      this.$router.push({ name: "home" });
    }
    this.products = this["michael/products"];
    this.getProduct();
    this.bannerUrl = "ImageProducts.png";
    this.pageName = "Product";
    this.companyName = this.company.denomination;
  },
  methods: {
    getProduct() {
      this.product = this.products.filter(v => v.id === this.productId)[0];
      if (!this.product) {
        this.$router.push({ name: "products" });
      }
      else{
        this.myKey = !this.myKey;
      }
    }
  }
};
</script>
