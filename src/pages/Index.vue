<template>
  <q-page-container >
    <q-page class="text-center">  <!-- flex flex-center-->
      <!-- page content -->
      <div class="text-h2 text-bold">At Your Service</div>

      <div class="row " style="">

          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="trending_up" />      
            </div>
            <div class="text-h5 text-bold">Futur</div>
            <div class="text-h6 ">Artificial inteligent,Maching learning,...</div>
          </div>
          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="account_tree" />      
            </div>
            <div class="text-h5 text-bold">Framework</div>
            <div class="text-h6 ">Ruby On Rails,Spring,Angular JS,Jquery,Bootstrap,...</div>
            
          </div>
          <div class="col-12 col-md  q-ma-md ">
             <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="code" />      
            </div>
            <div class="text-h5 text-bold">Coding</div>
            <div class="text-h6 ">Ruby,HTML,CSS,JAVA,C,...</div>
            
          </div>
          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="database" />      
            </div>
            <div class="text-h5 text-bold">Database</div>
            <div class="text-h6 ">MySql,SQlite3,DB2,Oracle,SQL Server,...</div>
            
          </div>
    </div>
    <div class="row  q-py-lg q-my-lg " style="max-width:1200px;margin:auto;">
       <div class="col-12 col-md  q-ma-md">
         <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="stay_current_portrait" />      
            </div>
         <div class="text-h6 ">Mobile appications</div>
       </div>
        <div class="col-12 col-md q-ma-md">
        <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="personal_video" />      
            </div>
         <div class="text-h6 ">Web appications</div>
       </div>
         <div class="col-12 col-md  q-ma-md ">
         <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="groups" />      
            </div>
         <div class="text-h6 ">Projects management</div>
       </div>
         <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="last_page" />      
            </div>
         <div class="text-h6 ">Customized software</div>
       </div>
       

    </div>
      <div class="text-pink text-center text-italic text-subtitle1  col-md q-ma-md">Let's create a new Word with Technology!</div>
      <div class="text-h5  col-md q-ma-md">Ready to start a new project with us? That's great! Give us a call or send us an email and we will contact you as soon as possible!</div>
      
      <div class="">
        
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
          <q-img class="rounded-borders col-3 full-height"  src="logosysait/logo sysait favico.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-template-0e8ff2db52da3cd367b04572e8662852_screen.jpg?ts=1567181348" />
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
      
      
    </q-carousel>
  </div>

      </div>
  

      </div>
      
    
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
