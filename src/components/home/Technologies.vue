<template>

  <q-page-container >
    <q-page class="text-center">  <!-- flex flex-center-->
      <!-- page content -->
      <div class="text-h2 text-bold q-mt-md">At Your Service</div>

      <!--div class="row " style="">

          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="trending_up" />      
            </div>
            <div class="text-h5 text-bold">Futur</div>
            <div class="text-h6 ">Artificial inteligent,Maching learning,...</div>
          </div>
          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="account_tree" />      
            </div>
            <div class="text-h5 text-bold">Framework</div>
            <div class="text-h6 ">Ruby On Rails,Spring,Angular JS,Jquery,Bootstrap,...</div>
            
          </div>
          <div class="col-12 col-md  q-ma-md ">
             <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="code" />      
            </div>
            <div class="text-h5 text-bold">Coding</div>
            <div class="text-h6 ">Ruby,HTML,CSS,JAVA,C,...</div>
            
          </div>
          <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="database" />      
            </div>
            <div class="text-h5 text-bold">Database</div>
            <div class="text-h6 ">MySql,SQlite3,DB2,Oracle,SQL Server,...</div>
            
          </div>
    </div-->

    <!--div class="row  q-py-lg q-my-lg " >

       <div class="col-12 col-md  q-ma-md">
             <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="stay_current_portrait" />      
            </div>
            <div class="text-h6 ">Mobile appications</div>
       </div>

        <div class="col-12 col-md q-ma-md">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                    <q-icon name="personal_video" />      
            </div>
            <div class="text-h6 ">Web appications</div>
       </div>

         <div class="col-12 col-md  q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                    <q-icon name="groups" />      
            </div>
            <div class="text-h6 ">Projects management</div>
        </div>

         <div class="col-12 col-md q-ma-md ">
            <div class="text-info q-gutter-md" style="font-size: 4em">
                  <q-icon name="last_page" />      
            </div>
            <div class="text-h7 ">Customized software</div>

        </div>
       
    </div-->

    <div class="row q-my-lg">
        <div class="col-md-3 col-sm-6 col-xs-12 q-pb-lg" v-for= "tecnologie in tecnologies">
            
            <div class="color_sysait_cerulean" style="font-size: 2em">
                 <q-icon class="color_sysait_cerulean" :name="fasDatabase" />
                {{ tecnologie.icon}}
             </div>    
            <div class="text-h5 text-bold">{{ tecnologie.name}}</div>
            <div class="text-h6 ">{{ tecnologie.content}}</div>

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
						icon: "fasFont",
						content: 'Artificial inteligent,Maching learning,...'						
					},
					{
						id: 2,
						name: 'Framework',
						icon: "fab fa-whatsapp",
						content: 'Ruby On Rails,Spring,Angular JS,Jquery,Bootstrap,...'	
					},
					{
						id: 3,
						name: 'Coding',
						icon: "fab fa-whatsapp",
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
						icon: "fab fa-whatsapp",
						content: ''	
                    },
                     {
						id: 6,
						name: 'Web appications',
						icon: "fab fa-whatsapp",
						content: ''	
                    },
                      {
						id: 7,
						name: 'Projects management',
						icon: "fab fa-whatsapp",
						content: ''	
                    },
                     {
						id: 8,
						name: 'Customized software',
						icon: "fab fa-whatsapp",
						content: ''	
					}
				]
    }
  },
  created () {
       this.fasFont = fasFont
  },
  methods: {
    getImage: function (imageData) {
        return `statics/faces/${imageData.id}.jpg`
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
