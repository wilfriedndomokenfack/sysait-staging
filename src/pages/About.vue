<template>
  <q-page padding>
    <banner-pages
      v-if="renderComponent && company"
      :bannerUrl="bannerUrl"
      :pageName="pageName"
      :companyName="company.denomination"
      :key="myKey"
    />
    <!-- <div v-for="(hc, index) in humanComponents" :key="index">
      <h5>{{ hc.first_name }}</h5>
      <br />
    </div> -->

    <!-- <div v-for="(cp, index1) in compagnies" :key="index1">
      <h5>{{ cp.vision }}</h5>
      <h4>{{cp.mission}}</h4>
    </div> width: 90px;
    <div>
      <img class="image_paddingless" style="width:1200px; height: auto;" src="~assets/ImageAbout.png" />
    </div>
    -->

    <!-- <div class="container">
      <img src="~assets/ImageAbout.png" style="width:100%;" />
      <div class="centered ">
        {{ company.denomination }}<br />
        ABOUT
      </div>
    </div>

    <div class="div_center">
      <div>
        <span class="title_about">Vision</span> <br /><br />
        <p>{{ company.vision }}</p>
        <hr class="separator" />
      </div>
      <div>
        <br /><span class="title_about">Mission</span> <br /><br />
        <p>{{ company.mission }}</p>
        <hr class="separator" />
      </div>
      <div>
        <br /><span class="title_about">Management</span> <br /><br />
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img
              style="width:120px;height:120px;"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor <br />sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor <br />
              incididunt ut labore et<br />
              dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { humanComponent } from "@/models/humanComponent.js";
import { company } from "@/models/company.js";
import { mapGetters } from "vuex";
import BannerPages from "@/components/utils/BannerPages.vue";

export default {
  name: "About",
  components: {
    BannerPages
  },

  data() {
    return {
      bannerUrl: "~assets/ImageAbout.png",
      pageName: "About",
      renderComponent: false,
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["humanComponents", "langCange", "company"])
  },

  async mounted() {
    if (!this.humanComponents) {
      try {
        const response = await humanComponent();
        this.$store.dispatch("rosine/setHumanComponents", response?.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (!this.company) {
      this.$q.loading.show({ message: "Pleace Wait, getting data ..." });
      this.$q.loadingBar.start();
      try {
        const response1 = await company();
        this.$store.dispatch("setCompany", { ...response1?.data[0] });
        this.renderComponent = true;
        this.myKey = !this.myKey;
      } catch (err1) {
        console.log(err1);
        this.$router.push({ path: "/" });
      } finally {
        this.$q.loading.hide();
        this.$q.loadingBar.stop();
      }
    }
  }
};
</script>
<style lang="scss">
.div_center {
  padding-left: 210px;
  padding-right: 210px;
}
.image_paddingless {
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -20px;
}
.container {
  position: relative;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 25px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -20px;
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title_about {
  font-weight: bold;
  color: $sysait_cerulean;
  font-size: 30px;
}
p {
  text-align: justify;
}
hr.separator {
  border: 1px solid $sysait_cerulean;
}
</style>
