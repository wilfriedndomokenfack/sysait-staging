<template>
  <div class="fullscreen bg-image text-white text-center flex flex-center">
    <div>
      <div style="font-size: 30vh">
        <img
            alt="logo sysait"
            style="width: 500px; height: auto"
            :ratio="1"
            basic
            spinner-color="white"
            class="rounded-borders"
            src="~assets/logoImg/logo_color.png"
          >
      </div>
      <div class="text-h2" style="opacity:.4">
        {{ $t("siteDown") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sitedown',
  mounted(){
    let laguages = ['en-us', 'fr', 'it']
    const laguagesCodes = laguages.map( v => v.substring(0, 2))
    console.log(navigator)
    let userLang = navigator.language || navigator.userLanguage;
    let code = userLang.substring(0, 2);

    if(laguagesCodes.indexOf(code) > -1){
      if(code === 'en') code = 'en-us'
      this.$i18n.locale = code;
    }
  }
}

</script>
<style>
  .bg-image {
   background-image: linear-gradient(135deg, #007db7 0%, #e140b9 100%);
  }
</style>
