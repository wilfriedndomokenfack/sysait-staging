<template>
  <q-header elevated class="text-white ">
    <div
      class="row justify-between items-center  bg_sysait_black "
    >
      <div
        class=" row col-xs-9 col-sm-9 col-md-5 justify-between text-center  "
        
      >
        <div
          clickable
          class="col-xs-7 col-sm-6 col-md-7 cursor "
          @click="mailTo(company.email)"

        >
          <q-btn size="8px" flat dense icon="fas fa-envelope" color="primary" />
          {{ company.email }}
        </div>

        <div
          clickable
          class="col-xs-5 col-sm-6 col-md-5 cursor"
          @click="mailTo(company.phone_number)"
          style=";"
        >
          <q-btn size="8px" flat dense icon="fa fa-phone-alt" color="primary" />

          {{ company.phone_number }}
        </div>
      </div>
      <div
        class=" row col-xs-3 col-sm-3  col-md-5 items-center text-center   justify-between"

      >
        <div class="col-xs-1 col-sm-1 col-md-5 q-gutter-sm">
          <q-btn
          v-show="deviceMobile"
            class="color_sysait_cerulean"
            to="/signin"
            flat
            no-caps
            dense
            color="primary"
            label="Sign in"
          />
          <q-btn
          v-show="deviceMobile"
            class="color_sysait_cerulean"
            to="/signin"
            flat
            no-caps
            dense
            color="primary"
            label="Sign up"
          />

        </div>

        <div class=" row col-xs-12 col-sm-12 col-md-5 justify-between">
          <q-select

            v-model="lang"
            :options="langOptions"
            dense
            borderless
            emit-value
            map-options
            options-dense
            class="pippo col-xs-8 col-sm-6 col-md-6 text-center"
            style=""
          >
            <q-tooltip
              :offset="[10, 10]"
              transition-show="rotate"
              transition-hide="rotate"
            >
              {{ $t("langChange") }}
            </q-tooltip>
          </q-select>

          <q-btn
          v-show="deviceMobile"
          class=" col-xs-2 col-sm-2 col-md-6"
            flat
              icon="fa fa-power-off"



              text-color="primary"
            >
              <q-tooltip
                :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate"
              >
                {{ $t('logOut') }}
        </q-tooltip>
       </q-btn>
        </div>
      </div>
    </div>

    <q-toolbar
      class="bg-white text-dark shadow-2 "
      :class="{ padding_header: !$q.screen.lt.sm }"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;<!-- <img
        :src="require('@/assets/logo.png')"
        height="50px"
      /> -->
      <q-item clickable to="/">
        <img style="width: 100px; height: auto; " src="~assets/logoImg/logo_color.png" />
      </q-item>

      <!-- <q-img clickable to:="/" :src="require('@/assets/logo.png')"  style="width: 10%;
      height: auto;" /> -->

      <q-space />
      <div v-for="(item, index) in menu" :key="index">
        <q-btn
          v-show="deviceMobile"
          :to="item.link"
          class="size_header"
          flat
          no-caps
          :label="item.label"
        />

        <q-icon
          v-if="index !== menu.length - 1"
          v-show="deviceMobile"
          size="3px"
          name="fa fa-circle"
        />
      </div>

      <q-btn
        v-show="deviceMobile"
        to="/contact"
        class="bg_sysait_cerulean  text-white size_header padding_contact"
        dense
        no-caps
        :label="$t('contacts')"
      />

      <div class="q-pa-md">
        <q-btn-dropdown
          split
          label="menu"
          class="glossy color_sysait_cerulean"
          dropdown-icon="menu"
          v-show="!deviceMobile"
          @click="drawerRight = !drawerRight"
        >
          <q-list class="item-center">
            <div
              v-for="(item, index) in menu"
              :key="index"
              style="width:100px;"
            >
              <q-item :to="item.link" clickable dense v-close-popup>
                <q-item-section>
                  <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <div
              style="width:100px;"
            >
              <q-item to="/" clickable dense v-close-popup>
                <q-item-section>
                  <q-item-label>Sign in</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div
              style="width:100px;"
            >
              <q-item to="/" clickable dense v-close-popup>
                <q-item-section>
                  <q-item-label>Sign Up</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div
              style="width:100px;"
            >
              <q-item to="/" clickable dense v-close-popup>
                <q-item-section>
                  <q-item-label>Log Out</q-item-label>
                </q-item-section>
              </q-item>
            </div>

          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
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
    langChanged: {
      immediate: true,
      handler() {
        this.updateValues();
      }
    }
  },
  computed: {
    ...mapGetters(["company", "langChanged"]),
    deviceMobile: function() {
      // `this` points to the vm instance
      return !(
        this.$q.screen.lt.sm ||
        this.$q.screen.lt.xs ||
        this.$q.screen.lt.md
      );
    }
  },
  mounted() {
    this.updateValues();
  },
  methods: {
    updateValues() {
      this.langOptions = [
        { value: "en-us", label: this.$t("english"), icon: "" },
        { value: "fr", label: this.$t("french"), icon: "" },
        { value: "it", label: this.$t("italian"), icon: "" },
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
    mailTo(telMail) {
      let link = null;
      if (telMail.includes("@")) {
        link = `mailto:${telMail}`;
      } else {
        link = `tel:${telMail}`;
      }
      window.open(link, "_blank");
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
  font-size: 12px;
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
.bg_sysait_gallery {
  background-color: $sysait_gallery;
}
.padding_contact {
  padding-left: 0px;
}
.q-field__marginal {
  color: white;
  height: 36px;
}
.cursor {
  cursor: pointer;
}
.fa-sign-out {
 color: white;
}
// we will move this code in the global css e make this css scoped
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input{

  color: white;
}
</style>
