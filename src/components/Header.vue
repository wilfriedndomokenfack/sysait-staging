<template>
  <q-header elevated class="text-white ">
    <div
      class="row justify-between items-center text-center bg_sysait_black padding_header"
    >
      <div
        class=" row col-xs-12 col-sm-12 col-md-4 justify-around text-center size_header "
      >
        <div class="col-xs-7 col-sm-8 col-md-7 ">
          <q-btn size="8px" flat dense icon="fas fa-envelope" color="primary" />
          {{ company.email }}
        </div>
        <div class="col-xs-5 col-sm-4 col-md-5 ">
          <q-btn size="8px" flat dense icon="fa fa-phone" color="primary" />

          {{ company.phone_number }}
        </div>
      </div>
      <div
        class=" row col-xs-12 col-sm-12  col-md-4 justify-around items-center text-center  "
      >
        <div class="col-xs-6 col-sm-8 col-md-3 ">
          <div class="color_sysait_cerulean"><b>Sign in</b></div>
        </div>

        <div class="col-xs-6 col-sm-4 col-md-4 ">
          <q-select
            v-model="lang"
            :options="langOptions"
            dense
            outlined
            emit-value
            map-options
            options-dense
            style="background: white"
          >
            <q-tooltip
              :offset="[10, 10]"
              transition-show="rotate"
              transition-hide="rotate"
            >
              {{ $t("langChange") }}
            </q-tooltip>
          </q-select>
        </div>
      </div>
    </div>

    <!--<div class=" row bg-white">
       <div class="col-xs-12 col-sm-12 col-md-3 justify-around  size_header ">
        <img :src="require('@/assets/logo.png')" height="50px" width="100px" />
      </div>
      <div
        class=" row col-xs-12 col-sm-12  col-md-9 justify-around items-center text-center text-dark "
      >
        <div
          v-for="(item, index) in menu"
          :key="index"
          class="row col-xs-6 col-sm-8 col-md-1 vertical_bar click_menu  "
        >
          <span :to="item.link">{{ item.label }}</span>
        </div>
      </div> 
     
    </div>-->
    <q-toolbar
      class="bg-white text-dark shadow-2 rounded-borders padding_header"
    >
      <img :src="require('@/assets/logo.png')" height="50px" width="100px" />

      <q-space />

      <q-btn to="/" class="size_header" flat>{{ $t("home") }}</q-btn>
      <q-separator color="dark" vertical inset />

      <q-btn v-show="drawerRight" to="/about" class="size_header" flat>{{
        $t("about")
      }}</q-btn>
      <q-separator color="dark" vertical inset />
      <q-btn v-show="drawerRight" to="/services" class="size_header" flat>{{
        $t("service")
      }}</q-btn>
      <q-separator color="dark" vertical inset />
      <q-btn-dropdown
        to="/products"
        class="size_header"
        flat
        :label="$t('products')"
      >
      </q-btn-dropdown>

      <q-separator color="dark" vertical inset />
      <q-btn
        v-show="drawerRight"
        flat
        class="size_header"
        :label="$t('clients')"
      />
      <q-separator color="dark" vertical inset />
      <q-btn
        v-show="drawerRight"
        to="/courses"
        class="size_header"
        flat
        :label="$t('courses')"
      />
      <q-separator color="dark" vertical inset />
      <q-btn
        v-show="drawerRight"
        to="/jobs"
        class="size_header"
        flat
        :label="$t('joins')"
      />

      <q-btn
        v-show="drawerRight"
        to="/contacts"
        class="bg_sysait_cerulean  text-white size_header"
        dense
        :label="$t('contacts')"
      />
      <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
    </q-toolbar>
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      :width="200"
      :breakpoint="500"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>
  </q-header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [],
      menu: [],
      drawerRight: false
    };
  },

  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.emitLang();
    },
    langCange: {
      immediate: true,
      handler() {
        this.updateValues();
      }
    }
  },
  computed: {
    ...mapGetters(["company", "langCange"])
  },
  mounted() {
    this.updateValues();
  },
  methods: {
    updateValues() {
      this.langOptions = [
        { value: "it", label: this.$t("italian"), icon: "" },
        { value: "en-us", label: this.$t("english"), icon: "" },
        { value: "fr", label: this.$t("french"), icon: "" }
      ];
      this.menu = [
        { label: this.$t("home"), link: "/" },
        { label: this.$t("about"), link: "/about" },
        { label: this.$t("services"), link: "/services" },
        { label: this.$t("products"), link: "/products" },
        { label: this.$t("clients"), link: "/customers" },
        { label: this.$t("courses"), link: "/courses" },
        { label: this.$t("joins"), link: "/jobs" }
      ];
    },

    // adde this in methods:
    emitLang() {
      this.$store.dispatch("setLang");
      //this.$emit("lang", this.lang);
    }
  }
};
</script>
<style lang="scss">
.menu_header {
  a:hover {
    background-color: $sysait_cerulean;
  }
}
.size_header {
  font-size: 10px;
}
.bg_sysait_black {
  background-color: $sysait_black;
}
.padding_header {
  padding-left: 80px;
  padding-right: 80px;
}
.vertical_bar {
  border-left: 1px solid $sysait_black;
  padding-left: 15px;

  height: 30px;
}

.click_menu:hover {
  background-color: white;
}
</style>
