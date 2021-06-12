<template>
  <div class="q-pa-md constrain">
    <div class=" q-pa-md q-col-gutter-md ">
      <div class=" self-start">
        <p id="denomination"  class="sysait_black  flex flex-left title_about">
          <strong>{{ $t('vision') }}</strong>
        </p>
        <p  class="sysait_black">{{ vision }}</p>
      </div>
      <div class=" self-start">
        <p id="denomination" class="sysait_black  flex flex-left title_about">
          <strong>{{ $t('mission') }}</strong>
        </p>
        <p  class="sysait_black">{{ mission }}</p>
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
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
p {
  text-align: justify;
}

</style>
