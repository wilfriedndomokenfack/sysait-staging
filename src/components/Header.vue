<template>
  <q-header elevated class="text-white">
    <!--elevated class="bg-dark text-white"> -->
    <div class="row justify-center" style="background:#1d1d1d;height:35px;">
      <div class="col-1"></div>
      <div class="col-2" style="padding-top:5px;">
        <i class="far fa-envelope color_sysait_cerulean"></i>
        {{ company.email }}
      </div>
      <div class="col-2" style="padding-top:5px;">
        <i class="fas fa-phone-square-alt color_sysait_cerulean"></i>
        {{ company.phone_number }}
      </div>
      <div class="col-4"></div>
      <div class="col-1" style="padding-top:2px;">
        <!-- style="padding-top:10px;"<q-btn-dropdown stretch flat label="EN">
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
          style="min-width: 70px; height:25px; background: white"
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
      <div class="col-1" style="padding-top:1px;">
        <q-btn stretch flat label="Sign in" />
      </div>
      <div class="col-1"></div>
    </div>

    <q-toolbar
      class="bg-white text-dark shadow-2 rounded-borders"
      style="padding-left:95px;"
    >
      <img :src="require('@/assets/logo.png')" height="50px" width="100px" />

      <q-space />
      <q-btn to="/" stretch flat>{{ $t("home") }}</q-btn>
      <q-separator vertical inset />

      <q-btn to="/about" stretch flat>{{ $t("about") }}</q-btn>
      <q-separator vertical inset />
      <q-btn to="/services" stretch flat>{{ $t("service") }}</q-btn>
      <q-separator vertical inset />
      <q-btn-dropdown to="/products" stretch flat :label="$t('product')">
        <!-- <q-list>
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
        </q-list> -->
      </q-btn-dropdown>

      <q-separator vertical inset />
      <q-btn stretch flat :label="$t('client')" />
      <q-separator vertical inset />
      <q-btn to="/courses" stretch flat :label="$t('courses')" />
      <q-separator vertical inset />
      <q-btn to="/jobs" stretch flat :label="$t('join')" />
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
        /* {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course'
        }, */

        { value: "it", label: this.$t("italian"), icon: "mail" },
        { value: "en-us", label: this.$t("english"), icon: "mail" },
        { value: "fr", label: this.$t("french"), icon: "mail" }
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
</style>
