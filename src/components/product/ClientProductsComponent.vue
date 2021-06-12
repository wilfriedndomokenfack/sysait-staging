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
      <q-carousel-slide
        v-for="(clients, index) in clientsImages"
        :key="index"
        :name="index + 1"
        class="column no-wrap"
      >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img
            class="rounded-borders col-6 full-height"
            :src="`clients_img/${clients.img1}`"
          />
          <q-img
            class="rounded-borders col-6 full-height"
            :src="`clients_img/${clients.img2}`"
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
    return { slide: 1, clientsImages: [] };
  },

  mounted() {
    this.clientsImages = [
      { img1: "cat.jpg", img2: "dongmo.jpg" },
      { img1: "donuts.png", img2: "linux-avatar.png" },
      { img1: "material.png", img2: "michael.jpg" },
      { img1: "momo.jpg", img2: "mountains.jpg" },
    ];
  },
};
</script>
