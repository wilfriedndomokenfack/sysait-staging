<template>

  <q-page-container >
    <q-page class="text-center padding_header">  <!-- flex flex-center-->
      <!-- page content -->
      <div class="text-h2 text-bold q-mt-md">At Your Service</div>

       <div class="row q-my-lg">
        <div class="col-md-3 col-sm-6 col-xs-12 q-pb-lg" v-for= "tecnologie in tecnologies">
            <div class="text-info " style="font-size: 2em">
             <q-icon :name= tecnologie.icon class="color_sysait_cerulean" />
            </div>
             <div class="text-h7 text-bold">{{ tecnologie.name}}</div>
            <div>{{ tecnologie.content}}</div>

        </div>
       
    </div>
        
  

        
    
    </q-page>
  </q-page-container>

</template>

<script>

import { mapGetters } from 'vuex'
import { fasDatabase } from '@quasar/extras/fontawesome-v5'

export default {
  name: 'Tecnologies',

  data () {
    return {
      slide: 1,
      tecnologies: [
					{
						id: 1,
						name: 'Futur',
						icon: "fa fa-arrow-up",
						content: 'Artificial inteligent,Maching learning,...'						
					},
					{
						id: 2,
						name: 'Framework',
						icon: "fa fa-retweet",
						content: 'Ruby On Rails,Spring,Angular JS,Jquery,Bootstrap,...'	
					},
					{
						id: 3,
						name: 'Coding',
						icon: "fa fa-code",
						content: 'Ruby,HTML,CSS,JAVA,C,...'	
                    },
                    {
						id: 4,
						name: 'Database',
						icon: "fa fa-database",
						content: 'MySql,SQlite3,DB2,Oracle,SQL Server,...'	
                    },
                     {
						id: 5,
						name: 'Mobile appications',
						icon: "fa fa-mobile",
						content: ''	
             },
            {
						id: 6,
						name: 'Web appications',
						icon: "fa fa-desktop",
						content: ''	
           },
            {
						id: 7,
						name: 'Projects management',
						icon: "groups",
						content: ''	
          },
           {
						id: 8,
						name: 'Customized software',
						icon: "last_page",
						content: ''	
					}
				]
    }
  },
  computed: {
    ...mapGetters(
      [
        'company',

      ]),
  },

}
</script>
