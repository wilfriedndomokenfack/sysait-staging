<template>
<div>
  <q-header elevated class="text-white ">
    <div
      class="row justify-between items-center  bg_sysait_black "
    >

      <div
        class=" row col-xs-9 col-sm-9 col-md-5 justify-start text-center  "

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
        class=" row col-xs-3 col-sm-3  col-md-4 items-center text-center   justify-start"

      >
        <div v-if="deviceMobile && !currentUser" class="col-xs-1 col-sm-1 col-md-5 q-gutter-sm">
          <q-btn

            class="color_sysait_cerulean"
            to="/signin"
            flat
            no-caps
            dense
            color="primary"
            :label="$t('singInLabel')"

          />
          <q-btn

            class="color_sysait_cerulean"
            to="/signup"
            flat
            no-caps
            dense
            color="primary"
            :label="$t('singUpLabel')"
          />

        </div>
        <div v-else-if="deviceMobile" class="col-xs-1 col-sm-1 col-md-5 q-gutter-sm">
          <div class="color_sysait_cerulean">
            {{ currentUser.fullname }}
          </div>
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
            v-show="deviceMobile && currentUser"
            class=" col-xs-2 col-sm-2 col-md-6"
            flat
            icon="fa fa-power-off"
            text-color="primary"
            @click="logout()"
          >
            <q-tooltip
                :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate"
            >
                {{ $t('captionLogOut') }}
        </q-tooltip>
       </q-btn>
        </div>
      </div>
    </div>

    <q-toolbar
      class="bg-white text-dark shadow-2 "

    >
      <!-- <img
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
      <q-btn v-show="!deviceMobile" flat @click="drawerRight = !drawerRight" round dense icon="menu" />

    </q-toolbar>

  </q-header>
  <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">

            <!-- <div  v-for="n in 50" :key="n">Drawer {{ n }} / 50</div> -->

            <q-list class="item-center">
              <q-btn flat @click="drawerRight = !drawerRight" round dense icon="fa fa-times" />

              <div v-if="currentUser">
                <q-item clickable class="text-center">
                  <q-item-section>
                    <q-item-label class="color_sysait_cerulean"> {{ currentUser.fullname.toUpperCase()  }} </q-item-label>
                  </q-item-section>
                </q-item>
              </div>

            <div
              v-for="(item, index) in menu"
              :key="index"
            >
              <q-item :to="item.link" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div
             v-show="!currentUser"
            >
              <q-item to="/signin" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>{{ $t('singInLabel') }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div
              v-show="!currentUser"
            >
              <q-item to="/signup" clickable v-close-popup>
                <q-item-section>
                  <q-item-label> {{ $t('singUpLabel') }} </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div
              v-show="currentUser"
            >
              <q-item  @click="logout()" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>{{ $t('captionLogOut') }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>

          </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/models/auth/Auth"

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
    ...mapGetters([
      "company",
      "langChanged",
      "currentUser"
    ]),
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
    },
    logout(){
      logout()
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
