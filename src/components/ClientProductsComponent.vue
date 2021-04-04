<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="clients_img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="clients_img/dongmo.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="clients_img/donuts.png" />
          <q-img
            class="rounded-borders col-6 full-height"
            src="clients_img/linux-avatar.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img
            class="rounded-borders col-6 full-height"
            src="clients_img/material.png"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            src="clients_img/michael.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="clients_img/momo.jpg" />
          <q-img
            class="rounded-borders col-6 full-height"
            src="clients_img/mountains.jpg"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "ClientProductsComponent",
  data() {
    return { slide: 1 };
  },
};
</script>
