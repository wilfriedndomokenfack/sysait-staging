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
        <TrainingsComponent :propTrainings="trainings"/>
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
      trainings: null
    };
  },
  computed: {
    ...mapGetters(["company", "wilfried/trainings", "currentUser"])
  },

  async mounted() {
    this.trainings = this["wilfried/trainings"];
    this.renderComponent = true

  },
  methods: {
    renderAll(){
      return (this.trainings && this.trainings?.length > 0)
    },
    redirect(link, params){
       this.$router.push({ name: link, params: params })
    }
  }
}
</script>
