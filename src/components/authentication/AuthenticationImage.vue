<template>
  <div class="column justify-between">
    <div class="col-4 q-pa-xl text-center q-mb-none ">
        <div>{{ pageDescriptio }}</div>
        <div class="text-h5 q-pa-md ">{{ userQuestionProp }}</div>
        <q-btn class="" :to="pathToProp" :label="buttonProp" color="primary" size="md" rounded />
    </div>
    <img
      class="col-4 "
      alt="banner Ecran"
      src="~assets/sysait_ecran.png"
      style="width: 100%; height: 60%; border-bottom-left-radius: 25px"
    />
  </div>
</template>

<script>
export default {
  name: "AuthenticationImage",
  props: ["buttonProp", "pathToProp", "userQuestionProp"],
  data() {
    return {
      pageDescriptio: "We help you to create the future that you want, making your life simplier cheaper and easier.",
    };
  }
};
</script>
