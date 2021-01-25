<template>
  <q-footer class="bg_sysait_gallery">
          <div class="footer_container" style="min-height: 10vh;">
          <q-tabs no-caps class="text-dark flex-break fit row justify-center items-center content-center q-pa-md">
            <div class="column items-center col-xs-12 col-sm-6 col-md-2">
              <div class="column items-center">
                <div class="column items-center">
                  <q-item clickable>
                    <img
                      style="width: 170px; height:"
                      :ratio="1"
                      basic
                      spinner-color="white"
                      class="rounded-borders"
                      src="~assets/logo_sysait_gris.png"
                    >
                  </q-item>
                  <q-item>
                    <div class="color_sysait_cerulean content-center flex-break fit">
                      <p v-ripple>
                            <b>{{ company.denomination }}</b>
                      </p>
                    </div>
                  </q-item>
                </div>
              </div>
            </div>
            <div class="column items-center row col-xs-12 col-sm-6 col-md-2">
              <div class="column items-center">
                <div class="column items-center">
                  <div class="column items-center"><font face="Time new roman" class="color_sysait_cerulean"  size="4"><b>{{ $t('office') }}</b></font></div>
                  <div>
                    <div class="q-pa-md q-gutter-md" style="max-width: 350px">
                      <div class="">
                        <q-item>
                          <q-item-section avatar>
                            <q-icon class="color_sysait_cerulean" :name="address.icon" />
                          </q-item-section>
                          <q-item-section color="dark"><b>{{ company.address }}</b></q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section avatar>
                            <q-icon class="color_sysait_cerulean" :name="contact.icon" />
                          </q-item-section>
                          <q-item-section color="dark"><b>{{ company.phone_number }}</b></q-item-section>
                        </q-item>
                        <q-item >
                          <q-item-section avatar>
                            <q-icon class="color_sysait_cerulean" :name="email.icon" />
                          </q-item-section>
                          <q-item-section color="dark"><b>{{ company.email }}</b></q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column items-center col-xs-12 col-sm-6 col-md-2">
              <div class="column items-center">
                <div class="column items-center">
                  <div><font face="Time new roman" class="color_sysait_cerulean" size="4"><b>{{ $t('links') }}</b></font></div>
                    <div class="q-pa-md q-gutter-md" style="max-width: 350px">
                      <q-list>
                        <q-item v-for="(service, index) in services" :key="index" v-ripple clickable>
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
            <div class="column items-center col-xs-12 col-sm-6 col-md-2">
              <div class="column items-center">
                <div class="column items-center">
                  <div><font face="Time new roman" class="color_sysait_cerulean" size="4"><b>{{ $t('follow') }}</b></font></div>
                  <div>
                    <div class="q-pa-md q-gutter-md" style="max-width: 350px">
                      <div>
                        <q-item v-for="(social, index) in socialMedia" :key="index" v-ripple clickable>
                          <q-item-section avatar>
                            <q-icon class="color_sysait_cerulean" :name="social.icon"/>
                          </q-item-section>
                          <q-item-section color="dark"><b>{{ social.label }}</b></q-item-section>
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
export default {
  name: 'Footer',
  data () {
    return {
      copyright: "2021 sysait.com all rights reserved.",
      names: ['System', 'Afrik', 'Information', 'Technology'],
      
      address:{icon:'fas fa-map-marker-alt', label:'Via Antonio F. Oroboni 80, 44122 Ferrara(FE)'},

      services: null,

      socialMedia: [
        {icon: "fab fa-whatsapp", label: "Whatsapp"},
        {icon: "fab fa-linkedin-in",label: "Linkedin"},
        {icon: "fab fa-facebook", label: "Facebook"}
      ],
      contact: {icon: "phone", label: "+39 3463791469"},
      email:  {icon: "mail", label: "sysait@gmail.com"}
    }
  },
  
  computed: {
    ...mapGetters(
      [
        'company',
      ]),
  },

   mounted(){
     this.updateValues()
  },

  methods: {
     updateValues() {
      this.services= [
        {icon:'fab fa-servicestack', label: this.$t('services')},
        {icon:'fab fa-product-hunt', label: this.$t('products')},
        {icon:'fas fa-user-tie', label: this.$t('aboutUs')},
        {icon:'fas fa-id-card', label: this.$t('contacts')}
      ]
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
</style>