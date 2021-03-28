<template>
  <div class="q-pa-md row justify-around">

  <div class=" col-md-9 col-sm-10 col-xs-12 self-start row justify-around q-col-gutter-x-md">
    <p class="col-12"><span class="title_about">{{ $t('management') }}</span></p>
    <q-card
      v-for="(hc, index) in listHumanComponent"
      :key="index"
      class=" col-md-4 col-sm-6 col-xs-12 "
      flat
    >
      <q-img type="a" class="dim_img" :src="`about_img/${hc.profile_path}`" />
      <div class="title_profil">
        {{ hc.first_name }} {{ hc.last_name }}
      </div>
      <div class="">
        {{ hc.position }}
      </div>
      <div>
          <a :href="hc.linkedin" target="_blank">
            <img style="width:80px; height:20px;" :src="`about_img/linkedin.png`" />
        </a>
      </div>
        <br />
        <p class="text-caption text-dark text-justify">
          {{ hc.description }}
        </p>
      </q-card>
      </div>
    </div>
  </div>
  </div>
  <!-- <div   :class="{management_body_xs: $q.screen.lt.xs, management_body_xl: !$q.screen.lt.xs }">
    <div><br /><span class="title_about">{{ $t('management') }}</span> <br /><br /></div>

    <div class="q-pa-md row items-start q-gutter-md ">
      <q-card
        v-for="(hc, index) in listHumanComponent"
        :key="index"
        class="my-card"
        flat

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
        <div class="text-caption text-dark text-justify">
          {{ hc.description }}

        </div>

      </q-card>
    </div>
  </div> -->
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "ManagementAbout",
  props: {
    listHumanComponent: Array
  },
  data() {
    return {
      lang: this.$i18n.locale,
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.emitLang();
    }
  },
  methods:{
    emitLang() {
      this.$store.dispatch("setLang");
    }
  }

};
</script>
<style lang="scss">

.dim_img {
  width: 70%;
  border-radius: 50%;
  padding-left: 35px;
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
