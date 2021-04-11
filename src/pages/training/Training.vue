<template>
  <q-page padding>
    <div>
      <BannerPages
        bannerUrl="ImageTraining.png"
        :pageName="$t('courses')"
        :companyName="company.denomination"
      />
      <q-toolbar v-if="currentUser">
      <q-toolbar-title>
      </q-toolbar-title>
        <div class="q-pa-md q-gutter-sm" dense>
          <q-btn
            @click="redirect('newTraining')"
            outline round dense
            color="primary"
            icon="fa fa-plus"
            padding="sm"
          />
        </div>
    </q-toolbar>
      <div v-if="renderAll() && renderComponent">
        <TrainingsComponent :propTrainings="trainings" :descriptionProp="pageDescription" :key="myKey"/>
      </div>
      <EmptyComponent v-else-if="renderComponent" />
    </div>
  </q-page>
</template>

<script>
import BannerPages from "@/components/utils/BannerPages.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import TrainingsComponent from "@/components/training/TrainingsComponent.vue";
import { mapGetters } from "vuex";
import { table_description } from "@/models/table_description.js"
export default {
  name: 'TrainingsPage',
  components: {
    BannerPages,
    EmptyComponent,
    TrainingsComponent
  },
  data() {
    return {
      bannerUrl: "ImageAbout.png",
      renderComponent: false,
      trainings: null,
      pageDescription: "",
      myKey: 0
    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/trainings", "wilfried/trainingPageDescription", "currentUser"])
  },

  async mounted() {
    this.trainings = this["wilfried/trainings"];

    if(!this["wilfried/trainingPageDescription"]){
      this.getPageDescription()
    }

    this.pageDescription = this["wilfried/trainingPageDescription"]?.description ?? ""

    this.renderComponent = true

  },
  methods: {
    async getPageDescription(){
      this.$q.loading.show();
      try{
        const response = await table_description("trainings");
        this.pageDescription = response?.data.description
        this.$store.dispatch("wilfried/setTrainingPageDescription", { ...response?.data } );
      }catch(e){
        this.pageDescription = ""
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
