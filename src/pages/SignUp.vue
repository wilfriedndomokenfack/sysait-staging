<template>
  <div class="bg-image q-pt-xl q-pb-xl flex flex-center">
    <UsersComponent />
  </div>
</template>

<script>
import UsersComponent from "@/components/users/UsersComponent.vue";
import { login } from "@/models/auth/Auth";
export default {
  components: {
    UsersComponent,
  },
  data() {
    return {
      user: {
        fullname: "Pratik",
        password: "12345",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      login(this.user);
    },
  },
};
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url("/users/ImageBgLoginRegisster.png");
}
</style>
