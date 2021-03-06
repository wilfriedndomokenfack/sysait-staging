<template>
  <div class="div_center">
    <div>
      <span class="title_about">Vision</span> <br /><br />
      <p>{{ vision }}</p>
      <hr class="separator" />
    </div>
    <div>
      <br /><span class="title_about">Mission</span> <br /><br />
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
    return {};
  }
};
</script>
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
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
