<template>
  <div class="">
    <div class="colomn items-center">
      <div class="q-pa-md">
        <p v-html="propProduct.description"  class="sysait_black">
        </p>
      </div>

      <div v-if="propProduct.image_path" class="">
        <div class="text-center">
          <img
            class="product_img"
            alt="product image"
            :src="`products_img/${propProduct.image_path}`"
          />
        </div>
        <div v-if="propProduct.denomination" class="name_site text-center">
          <div> {{ propProduct.denomination}}</div>
        </div>
      </div>

      <div v-if="propProduct.isAddressedTo"  class="q-pa-md colomn items-center">
        <p class="text-center text-dark text-bold" >
          {{ $t("whom").toUpperCase() }}
        </p>
        <p v-html="propProduct.isAddressedTo" >
        </p>
      </div>

      <div v-if="propProduct.howToAcquire" class="q-pa-md colomn items-center bg-primary text-white">
        <p class="text-center text-bold">
          {{ $t("acquire") }}
        </p>
        <p v-html="propProduct.howToAcquire">
        </p>
      </div>

      <div v-if="propProduct.collaborators.length !=0" class="col-md-9 col-sm-10 col-xs-12 self-start">
        <div style="text-center">
          <br/>
          <div class="flex inline shadow-box flex-center shadow-3 q-pa-md">{{$t('use')}}</div>

        </div>
        <div>
          <transition-group
            tag="div"
            class="row q-my-lg items-center justify-center"
            name="partLists"
            enter-active-class="animated flipInY delay-10s"
          >
            <div
              class="col-md-3 col-sm-6 col-xs-12 q-pb-lg text-center"
              v-for="colab in propProduct.collaborators"
              :key="colab.id"

            >
              <div class="text-info " style="font-size: 2em">
                <q-img
                  clickable
                  @click="collaboratorLink(colab.link)"
                  class="partner rounded-borders col-6 full-height"
                  :src="`collaborators/${colab.image_path}`"
                  style=""
                >
                  <q-tooltip
                    :offset="[10, 10]"
                    transition-show="rotate"
                    transition-hide="rotate"
                    content-class="tooltip"
                  >
                     <strong>{{colab.denomination }}</strong>
                  </q-tooltip>
                </q-img>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ["propProduct"],
  data() {
    return {};
  },
  methods: {
    collaboratorLink(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="scss">
.partners::before {
  min-width: 250px;
  content: "\a0\a0\a0\a0\a0\a0\a0\a0\a0\a0";
  display: block;
  position: absolute;
  text-decoration: underline;
  width: 70px;
  overflow: hidden;
  padding-top: 15px;
}

.partner:hover {
  cursor: pointer;
}
.partner {
  width: 30%;
}

.tooltip {
  background-color: $primary;
}

.animated.flipInY {
  --animate-duration: 14s;
}
.product_detail {
  width: 60%;
  margin: auto;
}
.collaborator {
  width: 30%;
}
.name_site {
  position: relative;
  //width: 100%;
  bottom: 20px;
  background: $sysait_cerulean;
  color: white;
  padding-top: 1%;
  padding-bottom:1% ;
  margin-left: 25%;
  width: 25%;
  //
  @media (min-width: 2000px){
  //  width: 25%;
  //  margin-left: 25%;
  }
  @media (max-width: 499px){
    margin-left: 10%;
    width: 50%;
  }
  // @media (min-width: 1000px){
  //   width: 25%;
  //   margin-left: 25%;
  // }
  // @media (min-width: 700px){
  //   width: 20%;
  // }
  // @media (min-width: 700px){
  //   width: 30%;
  // }

  // @media (min-width: 450px){
  //   width: 50%;
  // }

}
.product_img {
  height: auto;

  @media (min-width: 500px){
    width: 50%;
  }
  @media (max-width: 499px){
    width: 80%;
  }
  // @media (min-width: 1000px){
  //   width: 50%;
  // }
  // @media (min-width: 700px){
  //   width: 30%;
  // }
  // @media (min-width: 700px){
  //   width: 50%;
  // }
  // @media (min-width: 450px){
  //   width: 50%;
  // }
  // @media (min-width: 400px){
  //   width: 60%;
  // }

  // @media (min-width: 300px){
  //   width: 70%;
  // }
}
.accurate_product {
  // height: 20%;
  // width:100%;
  background: $sysait_cerulean;
  color: white;
  // margin-left: -30%;
  // margin-right: -30%;
}
.accurate_content {
  width: 60%;
  margin: auto;
  padding: 0.1%;
}
</style>
