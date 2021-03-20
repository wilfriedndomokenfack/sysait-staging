<template>
  <div class="about_body">
    <br />
    <div>
      <span class="title_about">{{$t('vision')}}</span> <br /><br />
      <p>{{ vision }}</p>
      <hr class="separator" />
    </div>
    <div>
      <br /><span class="title_about">{{$t('mission')}}</span> <br /><br />
      <p>{{ mission }}</p>
      <hr class="separator" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyAbout",
  props: {
    vision: String,
    mission: String
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
.about_body {

  width: 70%;
  margin: auto;
}

.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
p {
  text-align: justify;
}
hr.separator {
  border: 1px solid $sysait_cerulean;
}
</style>
