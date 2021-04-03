<template>
  <div>
    <div class="flex flex-center col-md-4 col-sm-6 col-xs-12 self-start">
      <p
        id="denomination"
        
        style="margin: auto; color: red; padding-top: 60px"
      >
        <strong>{{ $t("noService") }}</strong>
      </p>
    </div>
    <div class="empty col-md-4 col-sm-6 col-xs-12 flex flex-center">
      <img src="~assets/sysait_ecran.png" style="width: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyComponent",
  data() {
    return {};
  },
};
</script>
<style scoped style lang="scss">
.empty {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0;
  padding-right: 0px;
  margin-top: 0px;
  margin-bottom: -15px;
}
#denomination {
  font-size: 4vw;
}
</style>
