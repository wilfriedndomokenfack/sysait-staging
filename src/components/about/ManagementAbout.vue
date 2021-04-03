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
          <img alt="linkedin" style="width:80px; height:20px;" :src="`about_img/linkedin.png`" />
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
</template>

<script>
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
</style>
