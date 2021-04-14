<template>
  <q-page padding>
    <BannerPages
      bannerUrl="ImageTraining.png"
      :pageName="$t('courses')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain">
      <PageDescription :descriptionProp="pageDescription" @description="updatePageDescription" :key="descriptionKey" category="trainnings"/>
      <div class="col-12">
        <SendUserFromTrainingsToContacts/>
      </div>
      <div>
        <AddElementBtn link="newTraining" @statusFilter="filterTrainings"/>
      </div>
      <div v-if="renderComponent">
        <TrainingsComponent  :propTrainings="filteredTrainings"  :key="myKey"/>
      </div>
      <div class="col-12">
        <SendUserFromTrainingsToContacts/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import TrainingsComponent from "@/components/training/TrainingsComponent.vue";
import PageDescription from "@/components/utils/PageDescription.vue"
import AddElementBtn from "@/components/utils/AddElementBtn.vue"
import SendUserFromTrainingsToContacts from "@/components/training/SendUserFromTrainingsToContacts.vue"

import { mapGetters } from "vuex";
import { table_description, sendToTableDescriptions } from "@/models/table_description.js"
import { trainings } from "@/models/training.js"
import { netWorkError } from "@/models/utils/netWorkError";

export default {
  name: 'TrainingsPage',
  components: {
    BannerPages,
    EmptyComponent,
    TrainingsComponent,
    PageDescription,
    AddElementBtn,
    SendUserFromTrainingsToContacts
  },
  watch: {
    currentUser: {
      immediate: true,
      handler() {
        this.myKey = !this.myKey;
      }
    },
    trainings: {
      immediate: true,
      handler() {
        this.trainingsChanged()
      }
    },
  },
  data() {
    return {
      bannerUrl: "ImageAbout.png",
      renderComponent: false,
      trainings: null,
      pageDescription: "",
      descriptionKey: 12,
      myKey: 0,
      editDescription: false,
      filteredTrainings: [],
      model: null

    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/trainings", "wilfried/trainingPageDescription", "currentUser"])
  },

  async mounted() {


    if(!this["wilfried/training"]){
      await this.getTrainings()
    }

    if(!this["wilfried/trainingPageDescription"]){
      await this.getPageDescription()
    }

    this.pageDescription = this["wilfried/trainingPageDescription"]
    this.trainings = this["wilfried/trainings"];
    this.filterTrainings([])
    this.renderComponent = true

  },
  methods: {
    trainingsChanged(){
      this.trainings = this["wilfried/trainings"];
      this.filterTrainings(this.model)
    },
    async updatePageDescription(description){
      const response = await sendToTableDescriptions(description)
      if(response){
        this.pageDescription = response
        this.descriptionKey ++
      }
    },


    async getTrainings(){
      this.$q.loading.show();
      try {
        const response = await trainings();
        // response.data = [];
        this.$store.dispatch("wilfried/setTrainings", response?.data);
        this.myKey = !this.myKey;
      } catch (e) {
        netWorkError(this.$t("netWorkErrorMSG") + " " + e);
        this.$router.push({ name: this.previousRoute });
      } finally {
        this.$q.loading.hide();
      }
    },


    async getPageDescription(){
      this.$q.loading.show();
      try{
        const response = await table_description("trainings");
        this.pageDescription = response?.data
        this.$store.dispatch("wilfried/setTrainingPageDescription", { ...response?.data } );
      }catch(e){
        this.pageDescription = null
      }finally {
        this.$q.loading.hide();
      }
    },

    redirect(link, params){
       this.$router.push({ name: link, params: params })
    },

    filterTrainings(model = []){
      this.model = model
      if(model?.length > 0){
        this.filteredTrainings = this.trainings?.filter(
          v => model.indexOf(parseInt(v.status)) > -1
        )
      }else{
        this.filteredTrainings = this.trainings
      }
      this.myKey = !this.myKey;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
