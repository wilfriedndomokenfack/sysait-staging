<template>
  <div>
    {{ $t('welcome_msg_contact') }}
  </div>

</template>

<script>
export default {
   name: 'MessageContactComponent',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.headerContact {
  width: 80%;
  background-color: $sysait_cerulean;
  color: white;
  margin-top:2%;
  padding-top:1%;
  margin-bottom:2%;
}
</style>
