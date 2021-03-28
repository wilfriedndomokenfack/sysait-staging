<template>
  <q-page padding>
    <div>
      <BannerPages
        :bannerUrl="bannerUrl"
        :pageName="pageName"
        :companyName="companyName"
      />
    </div>
    <div>
      ProductId:{{productId}}<br>
      {{product.description}}
      
       
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import { mapGetters } from "vuex";
export default {
  name: "Product",
  components: {
    BannerPages
  },
  data() {
    return {
      bannerUrl: null,
      pageName: null,
      companyName: null,
      productId: this.$route.params.product_id,
      products:null,
      product:null,


    };
  },
  computed: {
    ...mapGetters(["michael/products", "company"])
  },
  async mounted() {
    if (!this["michael/products"]) {
      this.$router.push({ name : "home" });
      
    }
    this.products = this["michael/products"];
    this.getProduct()
    this.bannerUrl = "ImageProducts.png";
    this.pageName = "Product";
    this.companyName = this.company.denomination;
    
    
  },
   methods: {
    getProduct() {
     
      
      this.product= this.products.filter(v => v.id === this.productId)[0];
      if(!this.product){
         this.$router.push({ name: "products" });

      }

    },
  },
};
</script>
