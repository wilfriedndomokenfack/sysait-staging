<template>
  <div class="q-pa-md">
    <div class=" flex flex-center q-pa-md q-col-gutter-md row">
      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <br />
        <p face="Time new roman" class="sysait_black">
          {{ propProduct.description }}
        </p>
      </div>

      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <img
          :src="`products_img/Product_SysaitWebsite.png`"
          style="width:100%;height:50%;"
        />
        <div class="name_site">
          <center> {{ propProduct.denomination}}</center>
        </div>
      </div>

      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <p style="text-align: center; color:dark;font-weight: bold;">
          {{ $t("whom") }}
        </p>
        <p>
          {{ propProduct.isAddressedTo}}
          
        </p>
      </div>

      <div class="accurate_product">
        <div class=" flex flex-center q-pa-md q-col-gutter-md row">
          <div class="col-md-9 col-sm-10 col-xs-12 self-start">
              <p style="text-align: center;font-weight: bold;">
              {{ $t("acquire") }}
            </p>
            <p>
              {{ propProduct.howToAcquire}}
            </p>
            
          </div>
        </div>
      </div>

      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <div style="text-align: center;">
          <br /><q-btn
            color="white"
            text-color="black"
            :label="$t('use')"
          />
        </div>
        <div>
          <transition-group
            tag="div"
            class="row q-my-lg items-center justify-center"
            name="partLists"
            enter-active-class="animated flipInY delay-5s"
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
  width: 40%;
  bottom: 20px;
  background: $sysait_cerulean;
  color: white;
  padding-top: 1%;
  padding-bottom:1% ;
  
}
.accurate_product {
  height: 20%;
  width:100%;
  background: $sysait_cerulean;
  color: white;
  margin-left: -30%;
  margin-right: -30%;
}
.accurate_content {
  width: 60%;
  margin: auto;
  padding: 0.1%;
}
</style>
