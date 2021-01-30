<template>
  <q-header elevated class="text-white">
    <!--elevated class="bg-dark text-white"> -->
    <div class="row justify-center" style="background:#1d1d1d;height: 45px;">
      <div class="col-1"></div>
      <div class="col-1" style="padding-top:10px;">
        <i class="far fa-envelope color_sysait_cerulean"></i>
        sysait.com
      </div>
      <div class="col-1" style="padding-top:10px;">
        <i class="fas fa-phone-square-alt color_sysait_cerulean"></i>
        3206328224
      </div>
      <div class="col-6"></div>
      <div class="col-1" style="padding-top:5px;">
        <!-- <q-btn-dropdown stretch flat label="EN">
          <q-list>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar size="20px">
                  <img :src="require('@/assets/fr.svg')" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>FR</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar size="20px">
                  <img :src="require('@/assets/it.svg')"
                /></q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>IT</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->

        <q-select
          v-model="lang"
          :options="langOptions"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="min-width: 100px; background: white"
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
      <div class="col-1" style="padding-top:5px;">
        <q-btn stretch flat label="Sign in" />
      </div>
      <div class="col-1"></div>
    </div>

    <q-toolbar
      class="bg-white text-dark shadow-2 rounded-borders"
      style="padding-left:95px;"
    >
      <!-- <q-img src="logo.jpg" style="width:100px;height:50px;"></q-img> -->
      <img
        :src="require('@/assets/logo_sysait_gris.png')"
        height="50px"
        width="100px"
      />
      <!--  <img
                      style="width: 170px; height:"
                      :ratio="1"
                      basic
                      spinner-color="white"
                      class="rounded-borders"
                      src="~assets/logo_sysait_gris.png"
                    >
 -->
      <q-space />
      <q-btn to="/" stretch flat label="Home" />
      <q-separator vertical inset />

      <q-btn to="/about" stretch flat label="About" />
      <q-separator vertical inset />
      <q-btn to="/services" stretch flat label="Services" />
      <q-separator vertical inset />
      <q-btn-dropdown to="/products" stretch flat label="Products">
        <q-list>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <q-item-label>App mobiles</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <q-item-label>Web applications</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-separator vertical inset />
      <q-btn stretch flat label="Clients" />
      <q-separator vertical inset />
      <q-btn to="/courses" stretch flat label="Courses" />
      <q-separator vertical inset />
      <q-btn to="/jobs" stretch flat label="Join us" />
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
      langOptions: []
    };
  },

  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      //this.emitLang();
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
        { value: "it", label: this.$t("italian") },
        { value: "en-us", label: this.$t("english") },
        { value: "fr", label: this.$t("french") }
      ];
    }
    // adde this in methods:
    //emitLang() {
    //this.$store.dispatch("setLang");
    //this.$emit("lang", this.lang);
    //}
  }
};
</script>
<style lang="scss">
.menu_header {
  a:hover {
    background-color: $sysait_cerulean;
  }
}
</style>
