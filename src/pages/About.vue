<template>
  <q-page padding>
    <div v-for="(hc, index) in humanComponents" :key="index">
      <h5>{{ hc.first_name }}</h5><br>
    </div>
  </q-page>
</template>

<script>
import { humanComponent } from '@/models/humanComponent'
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(
      [
        'humanComponents',
        'langCange'
      ]),
  },
  async mounted(){
    if(!this.humanComponents){
      try{
        const response = await humanComponent()
        this.$store.dispatch("setHumanHomponents", response?.data);
      }catch(err){
        console.log(err)
      }
    }

  }
}
</script>
