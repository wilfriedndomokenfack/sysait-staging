<template>
  <q-page padding>
    <BannerPages
      bannerUrl="ImageTraining.png"
      :pageName="$t('courses')"
      :companyName="company.denomination"
      class="q-mb-md"
    />
    <div class="constrain">
      <PageDescription :descriptionProp="pageDescription" @description="updatePageDescription" :key="descriptionKey" />
      <div class="col-12">
        <SendUserFromTrainingsToContacts/>
      </div>

      <div>
        <AddElementBtn link="newTraining"/>
        <div v-if="renderAll() && renderComponent">
          <TrainingsComponent  :propTrainings="trainings" :key="myKey"/>
          <div class="col-12">
            <SendUserFromTrainingsToContacts/>
          </div>
        </div>
        <EmptyComponent v-else-if="renderComponent" />
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
  data() {
    return {
      bannerUrl: "ImageAbout.png",
      renderComponent: false,
      trainings: null,
      pageDescription: "",
      descriptionKey: 12,
      myKey: 0,
      editDescription: false

    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/trainings", "wilfried/trainingPageDescription", "currentUser"])
  },

  async mounted() {
    this.trainings = this["wilfried/trainings"];

    if(!this["wilfried/trainingPageDescription"]){
      await this.getPageDescription()
    }

    this.pageDescription = this["wilfried/trainingPageDescription"]

    this.renderComponent = true

  },
  methods: {
    async updatePageDescription(description){
      const response = await sendToTableDescriptions(description)
      if(response){
        this.pageDescription = response
        this.descriptionKey ++
      }
    },
    async getPageDescription(){
      this.$q.loading.show();
      try{
        const response = await table_description("trainings");
        console.log(response)
        this.pageDescription = response?.data
        this.$store.dispatch("wilfried/setTrainingPageDescription", { ...response?.data } );
      }catch(e){
        this.pageDescription = null
      }finally {
        this.myKey = !this.myKey;
        this.$q.loading.hide();
      }
    },
    renderAll(){
      return (this.trainings && this.trainings?.length > 0)
    },
    redirect(link, params){
       this.$router.push({ name: link, params: params })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
