<template>
  <div>
    Banner Pages
    {{ bannerUrl }}<br>
    {{ pageName }}<br>
    {{ companyName}}
  </div>
</template>

<script>
export default {
  name: "BannerPages",
  props: {
    bannerUrl: String,
    pageName: String,
    companyName: String
  },
  data() {
    return {};
  }
};
</script>
