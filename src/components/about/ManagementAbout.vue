<template>
  <div class="div_center">
    <div>
      <br /><span class="title_about">Management</span> <br /><br />
    </div>
    <!-- <div class="card_profil">
       <img class="img_profil"  src="~assets/foto_cv.jpg" /><br>
       <span class="title_profil" >kenfack Tsamo </span><br>
       <span>President and coordinator</span>
       
       <span>
         <br><q-btn size="8px" flat dense icon="fab fa-linkedin-in" color="primary" />
        </span>
       <span><p><br>njdsdnjsd dsjhsd dhfghdfgbhdf dhfbhdfewhf dhfdfd dhfdhfhdf dhfhdfeikdhf fdjjdjf
         jfjfjfj fjdfdkjkfdkf djfjdkfdf djfhdjf kgofjkfvkv jdhvjdhfied jdfhjdhfdj</p></span>

    </div> -->
    
   
    <div  class="q-pa-md row items-start q-gutter-md flex flex-center">
      <q-card
        v-for="(hc, index) in listHumanComponent"
        :key="index"
        class="my-card"
        flat
        
      >
          
        
        <q-img class="dim_img" :src="`about_img/brice.png`" /> 
        <!-- <q-img class="dim_img" :src="`about_img/${hc.profil_path}`" /> -->
        <div class="title_profil"> {{ hc.first_name }} {{ hc.last_name }}</div>
        <div class="">{{ hc.profile_path }}</div>
        <div>
            <q-btn size="8px" flat dense icon="fab fa-linkedin-in" color="primary" /><br>
           <!--  <q-item clickable :to="hc.linkedin">
                <q-btn size="8px" flat dense icon="fab fa-linkedin-in" color="primary" />
            </q-item>
            <q-btn @click="hc.linkedin"> </q-btn> -->

        </div>
        <div class="text-caption text-grey">
            {{ hc.description }}
            hhdshds hsdshdsd shdshdhsd shdsdsd shdshdsdsdghs sxhdgshd shdsgdsjdhskb
          </div>

        <!-- <q-card-section>
          <div >
            {{ hc.first_name }} {{ hc.last_name }}
          </div>
          <div class="">{{ hc.position }}</div>
          <div>
            <q-btn size="8px" flat dense icon="fab fa-linkedin-in" color="primary" />
          </div>
          <div class="text-caption text-grey">
            {{ hc.description }}hhdshds hsdshdsd shdshdhsd shdsdsd shdshdsdsdghs sxhdgshd shdsgdsjdhskb
          </div>
        </q-card-section> -->
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagementAbout",
  props: {
    listHumanComponent: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
}
.dim_img {
  width:70%;
  border-radius: 50%;
  padding-left: 10px;
}
.my-card {
  width: 235px;
  
}
.title_position{

}
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
.title_profil {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 15px;
  padding-left: -20px;
}
.card_profil{
  width:235px;
}
.img_profil{
  //align:center;
  //padding-left:25px;
  //padding-right:25px;
  border-radius: 50%;
  width: 90px; 
  height: auto;
}
</style>
