<template>
  <div class="container">
    <img :src="`bannerPages/${bannerUrl}`" style="width:100%;" />
    <div class="centered ">
      <div>{{ companyName }}</div>

      <div class="page_name">{{ pageName }}</div>
    </div>
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
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
}
.image_paddingless {
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -20px;
}
.container {
  position: relative;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 25px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -20px;
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Time New Roman";
  font-size:1vw;
}
.page_name {
  //font-size: 40px;
  font-size:2vw;
}
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
  font-family: "Time New Roman";
}

p {
  text-align: justify;
}
hr.separator {
  border: 1px solid $sysait_cerulean;
}
</style>
