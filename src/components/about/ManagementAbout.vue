<template>
  <div   :class="{management_body_xs: $q.screen.lt.xs, management_body_xl: !$q.screen.lt.xs }">
    <div><br /><span class="title_about">Management</span> <br /><br /></div>
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

    <div class="q-pa-md row items-start q-gutter-md ">
      <q-card
        v-for="(hc, index) in listHumanComponent"
        :key="index"
        class="my-card"
        flat
        style="padding-right:20px;padding-bottom:30px"
      >
        <q-img type="a" class="dim_img" :src="`about_img/${hc.profile_path}`" />
        <div class="title_profil">{{ hc.first_name }} {{ hc.last_name }}</div>
        <div class="">{{ hc.position }}
        
        </div>
        <div>
          <a :href="hc.linkedin" target="_blank">
            <img style="width:80px; height:20px;" :src="`about_img/linkedin.png`" />
        </a>
  
        </div>
        <br />
        <div class="text-caption text-grey text-justify">
          {{ hc.description }}
        </div>

      </q-card>
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
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
.management_body_xl {
  width: 70%;
  margin: auto;
}
.management_body_xs {
  //width: 70%;
  margin: auto;
}
.dim_img {
  width: 70%;
  border-radius: 50%;
  padding-left: 10px;
}
.my-card {
  width: 240px;
  //margin: auto;
}
.title_position {
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
.card_profil {
  width: 235px;
}
.img_profil {
  //align:center;
  //padding-left:25px;
  //padding-right:25px;
  border-radius: 50%;
  width: 90px;
  height: auto;
}
</style>
