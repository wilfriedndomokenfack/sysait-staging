<template>
 
<div class=" wpb_column vc_column_container vc_col-sm-12">
<div class="wpb_wrapper">
<div class="fw-section hb-fw-599b22a654ae9 without-border no-overlay light-style">
 
 <div class="bg_banner row justify-center">
   <div class="banner_content">
    <div class="v1 vc_col-sm-3 nbm">
      <div class="learning-automated-div">
        <span style="color:#FFFFFF;">We help you to create<br>the future that you want.
        <br>Making your lives simplier, cheaper and easier</span>
      </div>
      <div class="learning-mission row">
        <q-btn flat class="col-1" icon="fa fa-circle" color="white" />
          <span  class="col-10" style="color:#FFFFFF;">{{company.content_1}}</span>
        <q-btn flat class="col-1" icon="fa fa-circle" color="white" />
      </div>
      <div style="text-align: center;">
        <q-btn color="secondary" label="Read more" to="/about" />
      </div>

      <BannerChild />
    </div>
    </div>
  </div>

</div></div></div>
</template>

<script>
import BannerChild from '@/components/BannerChild.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Banner',
  
  components: {
    BannerChild
  },

  data () {
    return {
    }
  },

   methods: {
   
  },

  computed: {
    ...mapGetters(
      [
        'company',
        'langCange'
      ]),
  }
}
</script>

<style lang="scss" scoped>

  .bg_banner {
    background-color:#cccccc;
    background-image:url("~assets/HomePageImage.png");
    background-size:cover;
    padding-top:40px;
    padding-bottom:100px;
    background-repeat: no-repeat;
  }

  .learning-automated-div {
    text-align: center; font-size: 48px;
    line-height: 52px; padding: 100px 5px 10px 5px;
    font-weight: bold;
  }

  .v1 {
    border-right:  6px solid rgb(234, 237, 240);
    border-left:   6px solid  rgb(234, 237, 240);
    height: 300px;
  }

  .learning-mission {
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    padding: 0 5px 40px 5px;
  }

  .banner_content {
    text-align: center;
    width: 75%;
    padding: 0 5px 40px 5px;
  }

</style>
