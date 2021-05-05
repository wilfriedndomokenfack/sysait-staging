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
}

</script>
<style>
  .bg-image {
   background-image: linear-gradient(135deg, #007db7 0%, #e140b9 100%);
  }
</style>
