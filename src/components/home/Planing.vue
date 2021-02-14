<template>

 
    <q-page class="text-center">  <!-- flex flex-center-->
      <!-- page content -->
         <div class="text-h2 text-bold q-mt-md">Our Partners</div>
             
        <div class="q-pa-md">
                <q-carousel
                    animated
                    v-model="slide"
                    control-color="primary"
                    arrows
                    navigation
                    infinite
                    class="col-3"
                    :visible-slides="3"
                    width="300px"
                >
                       
                  <q-carousel-slide v-for="slide in imageData":key="slide.id":name="slide.id" :img-src="slide.url" ></q-carousel-slide>
              </q-carousel>
           
        </div> 

      <div class="padding_header q-mb-lg">
        <div class="text-pink text-center text-italic text-subtitle1  col-md q-ma-md">Let's create a new Word with Technology!</div>
        <div class="  col-md q-ma-md">Ready to start a new project with us? That's great! Give us a call or send us an email and we will contact you as soon as possible!</div>
       </div>

   </q-page> 
  

</template>

<script>



import { mapGetters } from 'vuex'

export default {
  name: 'Planing',

  data () {
    return {
      slide: 1,
      imageData : [
        {
            id:1,
           //url:""
            url: require('assets/logo sysait BON BW.jpg')
        },
        {
            id:2,
           // url:"~assets/logo_sysait_gris.png" 
          url:require( 'src/assets/logo-sysait-BON.jpg')
         },
          {
            id:3,
           // url:"~assets/logo_sysait_gris.png" 
          url:require( 'src/assets/logosysaitBONBW.jpg')
         },
      ]
    }
  }, computed: {
    ...mapGetters(
      [
        'company',

      ]),
  },

}
</script>
