<template>
  <div class="div_contact constrain">
       <div class="row no-wrap">
          <div class="col-xs-4 col-sm-6 col-md-4 div_info">
                <p class=" title_contact_info text-center text-bold "><br>Contact Info 
                  <hr class="contact">
                </p> 
                <p class="text-center">
                  Email: sysaitechnology@gmail.com<br>
                  Adress: Ferrara, Italy<br>
                  Tel:3206328224

                </p>

           </div>
          <div class="col-xs-8 col-sm-6 col-md-8 div_form"><p class="">Send us a email</p>
              <q-form @submit="onSubmit">
    

                    <div class="row no-wrap justify-between">
                        <div class="col-xs-4 col-sm-6 col-md-6">
                        First name*<br>
                        <q-input
                              filled
                              v-model="firstname"                              
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />
                        </div>
                        <div class="col-xs-4 col-sm-6 col-md-6">              
                        Last name*<br>
                        <q-input
                              filled
                              v-model="lastname"                              
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />
                        </div>
          
                    </div>
                    <div class="row no-wrap ">
                      <div class="col-xs-4 col-sm-6 col-md-12">
                        Phone*<br>
                        <q-input
                              filled
                              v-model="phone"                              
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                      </div>

                    </div>

                     <div class="row no-wrap ">
                      <div class="col-xs-4 col-sm-6 col-md-4">
                        Address*<br>
                        <q-input
                              filled
                              v-model="address"                              
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                      </div>
                      <div class="col-xs-4 col-sm-6 col-md-4">
                        P.O Box<br>
                        <q-input
                              filled
                              v-model="pobox"                              
                        />
                      </div>
                      <div class="col-xs-4 col-sm-6 col-md-4">
                        City*<br>
                        <q-input
                              filled
                              v-model="city"                              
                              lazy-rules
                              :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                      </div>
                    </div>
                    <div class="row no-wrap ">
                      <div class="col-xs-4 col-sm-6 col-md-12">
                        Message*<br>
                        <textarea class="full-width"></textarea>
                      </div>

                    </div>
                    <div class="row no-wrap ">
                      <div class="col-xs-4 col-sm-6 col-md-12">
                        <q-btn label="Contact us" type="submit" color="primary"/><br>
                      </div>

                    </div>




              </q-form>
          
          </div>
    </div>
            
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
<style  lang="scss">

.div_contact {
  width: 80%;
  //background-color: $sysait_cerulean;
  //color: white;
}
.div_info{
  //width:300px;
  background-color: $sysait_gallery;
  margin-right: 5px;

}
.div_form{
  //width:647px;
  //background-color:$sysait_gallery;

}
.title_contact_info{
  color: $sysait_cerulean;
}
hr.contact {
  border-top: 1px solid $sysait_cerulean;
  width:100px;
}

</style>
