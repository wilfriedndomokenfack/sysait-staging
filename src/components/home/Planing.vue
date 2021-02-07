<template>

  <q-page-container >
    <q-page class="text-center">  <!-- flex flex-center-->
      <!-- page content -->
       
      <div class="text-pink text-center text-italic text-subtitle1  col-md q-ma-md">Let's create a new Word with Technology!</div>
      <div class="  col-md q-ma-md">Ready to start a new project with us? That's great! Give us a call or send us an email and we will contact you as soon as possible!</div>
      
        <!--div class="">
                
            <div class="q-pa-md">
                <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                arrows
                height="300px"
                class="bg-grey-1  rounded-borders"
                >
                
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    
                    <q-img class="responsive rounded-borders col-3 full-height"  src="~assets/logo-sysait-BON.jpg"  />
                    <q-img class="responsive rounded-borders col-3 full-height" src="~assets/logo-sysait-BON.jpg" />
                    <q-img class="rounded-borders col-3 full-height" src="https://image.winudf.com/v2/image/Y29tLmtpbmdzaGlwLmxvZ29tYWtlcnByb2ZyZWVfc2NyZWVuXzEwXzE1MzI3MDg1MTVfMDI4/screen-10.jpg?fakeurl=1&type=.jpg" />
                    <q-img class="rounded-borders col-3 full-height" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-template-0e8ff2db52da3cd367b04572e8662852_screen.jpg?ts=1567181348" />
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-3 full-height" src="https://image.winudf.com/v2/image/Y29tLmtpbmdzaGlwLmxvZ29tYWtlcnByb2ZyZWVfc2NyZWVuXzEwXzE1MzI3MDg1MTVfMDI4/screen-10.jpg?fakeurl=1&type=.jpg" />
                    <q-img class="rounded-borders col-3 full-height" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-template-0e8ff2db52da3cd367b04572e8662852_screen.jpg?ts=1567181348" />
                    <q-img class="rounded-borders col-3 full-height" src="https://image.winudf.com/v2/image/Y29tLmtpbmdzaGlwLmxvZ29tYWtlcnByb2ZyZWVfc2NyZWVuXzEwXzE1MzI3MDg1MTVfMDI4/screen-10.jpg?fakeurl=1&type=.jpg" />
                    <q-img class="rounded-borders col-3 full-height" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-template-0e8ff2db52da3cd367b04572e8662852_screen.jpg?ts=1567181348" />
                    </div>
                </q-carousel-slide>
                
                
                </q-carousel >

            

            </div>

        </div>  

        <div class="q-pa-md">
                <q-carousel
                    v-model="slide"
                    v-for="item in logoImg"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    navigation
                    padding
                    arrows
                    height="300px"
                    class="bg-grey-1  rounded-borders"
                    >
                
                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" v-for="logo in logoImg">
                        
                        <q-img class="responsive rounded-borders  full-height"  :src="'{{ logoImg.src}}'"  />
                    
                        </div>
                    </q-carousel-slide>
                           
                </q-carousel >
           

        </div--> 

    
    </q-page>
  </q-page-container>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Tecnologies',

  data () {
    return {
      slide: 1,
      logoImg:[
        {
            id:1,
            src:"~assets/logo-sysait-BON.jpg"
        },
        {
            id:2,
            src: '~assets/logo_sysait_gris.png'
         },
      ]
    }
  },
  getImage: function (imageData) {
        return `assets/faces/${imageData.id}.jpg`
  },
    computed: {
    ...mapGetters(
      [
        'company',

      ]),
  },

}
</script>
