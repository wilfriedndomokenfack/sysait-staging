<template>
  <div>
    <div class="flex flex-center col-md-4 col-sm-6 col-xs-12 self-start">
      <div
        id="denomination"
        style="margin: auto; padding-top: 60px;"
        class="text-primary text-center"
      >
        <strong >{{ $t(defaultMessage) }}</strong>
      </div>
    </div>
    <div class="empty col-md-4 col-sm-6 col-xs-12 flex flex-center">
      <img alt="banner ecran" src="~assets/sysait_ecran.png" style="width: 100%; position: relative" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyComponent",
  props: ['message'],
  data() {
    return {
      defaultMessage: 'noService',
      defaultColor: 'red'
    };
  },
  mounted(){
    if(this.message) this.defaultMessage = this.message
  }
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
