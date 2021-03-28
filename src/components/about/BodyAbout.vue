<template>
  <div class="q-pa-md">
    <div class=" flex flex-center q-pa-md q-col-gutter-md row">
      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <p id="denomination" face="Time new roman" class="sysait_black  flex flex-left title_about">
          <strong>{{ $t('vision') }}</strong>
        </p>
        <p face="Time new roman" class="sysait_black">{{ vision }}</p>
      </div>

      <div class="col-md-9 col-sm-10 col-xs-12 self-start">
        <p id="denomination" face="Time new roman" class="sysait_black  flex flex-left title_about">
          <strong>{{ $t('mission') }}</strong>
        </p>
        <p face="Time new roman" class="sysait_black">{{ mission }}</p>
      </div>

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
