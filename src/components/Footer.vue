<template>
  <q-footer class="bg_sysait_gallery">
          <div class="footer_container" style="min-height: 10vh;">
          <q-tabs no-caps class="text-dark  fit row justify-center items-center content-center q-pa-md">
            <div class="row self-start items-center col-xs-12 col-sm-6 col-md-3">
              <div class="column items-center">
                <div class="column items-center">
                  <q-item clickable to="/">
                    <img
                      alt="logo sysait"
                      style="width: 170px; height:"
                      :ratio="1"
                      basic
                      spinner-color="white"
                      class="rounded-borders"
                      src="~assets/logo_sysait_gris.png"
                    >
                  </q-item>
                  <q-item>
                    <div class="color_sysait_cerulean content-center column items-center compagny_name">
                      <p v-ripple>
                            <b>{{ company.denomination }}</b>
                      </p>
                    </div>
                  </q-item>
                </div>
              </div>
            </div>
            <div class="column items-center self-start col-xs-12 col-sm-6 col-md-3">
              <div class="column items-center">
                <div class="column items-center">
                  <div>
                    <div class="" style="max-width: 350px">
                      <div class="column items-center">
                        <font face="Time new roman" class="color_sysait_cerulean"  size="4">
                          <b>{{ $t('office') }}</b>
                        </font>
                      </div>
                      <div class="column">
                        <div class="flex-break">
                          <q-item>
                            <q-item-section avatar>
                              <q-icon class="color_sysait_cerulean" :name="positionIcon" />
                            </q-item-section>
                            <q-item-section color="dark"><b>{{ company.address }}</b></q-item-section>
                          </q-item>
                        </div>

                        <div class="flex-break">
                          <q-item>
                            <q-item-section avatar>
                              <q-icon class="color_sysait_cerulean" :name="phoneIcon" />
                            </q-item-section>
                            <q-item-section color="dark"><b>{{ company.phone_number }}</b></q-item-section>
                          </q-item>
                        </div>

                        <div class="flex-break">
                          <q-item >
                            <q-item-section avatar>
                              <q-icon class="color_sysait_cerulean" :name="emailIcon" />
                            </q-item-section>
                            <q-item-section color="dark"><b>{{ company.email }}</b></q-item-section>
                          </q-item>
                        </div>

                        <div class="flex-break">
                          <q-item >
                            <q-item-section avatar>
                              <q-icon class="" />
                            </q-item-section>
                            <q-item-section color="dark"></q-item-section>
                          </q-item>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column self-start items-center col-xs-12 col-sm-6 col-md-3">
              <div class="column items-center">
                <div class="column items-center">
                  <div>
                    <font face="Time new roman" class="color_sysait_cerulean" size="4">
                      <b>{{ $t('links') }}</b>
                    </font>
                  </div>
                  <div class="q-pa-md q-gutter-md" style="max-width: 350px">
                    <q-list>
                        <q-item :to="service.path" class="cursor" v-for="(service, index) in services" :key="index" clickable>
                          <q-item-section avatar>
                            <q-icon class="color_sysait_cerulean" :name="service.icon" />
                          </q-item-section>
                          <q-item-section color="dark"><b>{{ service.label }}</b></q-item-section>
                        </q-item>
                    </q-list>
                  </div>
                </div>
              </div>
            </div>
            <div class="column self-start items-center col-xs-12 col-sm-6 col-md-2">
              <div class="column items-center">
                <div class="column items-center">
                  <div><font face="Time new roman" class="color_sysait_cerulean" size="4"><b>{{ $t('follow') }}</b></font></div>
                  <div>
                    <div class="q-pa-md q-gutter-md" style="max-width: 350px">
                      <div>

                          <q-item class="cursor" v-for="(social, index) in socialMedia" :key="index" clickable @click="socialLink(social.link)">
                            <q-item-section avatar >
                              <q-icon class="color_sysait_cerulean" :name="social.icon" />
                            </q-item-section>
                            <q-item-section color="dark" ><b>{{ social.label }}</b></q-item-section>
                          </q-item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tabs>
        </div>
      <div class="footer_container bg_sysait_black q-pa-md" style="min-height: 4vh;">
          <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-white">
          <q-space />
            &copy; {{ copyright }}
          <q-space />
        </q-tabs>
      </div>
    </q-footer>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'Footer',
  data () {
    return {
      copyright: "",
      phoneIcon: "fas fa-phone-alt",
      emailIcon: "fas fa-envelope",
      positionIcon: "fas fa-map-marker-alt",
      services: null,
      socialMedia: [],
      year: ""
    }
  },

  watch: {
    langCange: {
      immediate: true,
      handler() {
        this.updateValues()
      }
    },
  },

  computed: {
    ...mapGetters(
      [
        'company',
        'langCange'
      ]),
  },

   mounted(){
     this.year = moment().format('YYYY')

     this.updateValues()
     this.socialMedia= [
        {icon: "fab fa-whatsapp", label: "Whatsapp", link: this.company?.whatsapp},
        {icon: "fab fa-linkedin-in",label: "Linkedin", link: this.company?.linkedin},
        {icon: "fab fa-facebook", label: "Facebook", link: this.company?.facebook},
      ]
  },

  methods: {
     updateValues() {
      this.copyright = `${this.year} ${this.company?.email} ${this.$t('allRights')}.`
      this.services= [
        {icon:'fab fa-servicestack', label: this.$t('services'), path: "services"},
        {icon:'fab fa-product-hunt', label: this.$t('products'), path: "products"},
        {icon:'fas fa-user-tie', label: this.$t('about'), path: "about"},
        {icon:'fas fa-id-card', label: this.$t('contacts'), path: "contact"}
      ]
    },
    socialLink(link){
          window.open(link, '_blank');
    },
  }
}
</script>

<style scoped lang="scss">

  .bg_sysait_gallery {
    background: $sysait_gallery;
  }

.bg_sysait_black {
    background: $sysait_black
}

.compagny_name {
  font-size: 15px;
}

</style>
