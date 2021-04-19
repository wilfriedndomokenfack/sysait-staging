<template>
  <div>
     <q-dialog v-model="model" style="min-width: 100vh; max-height: 50vh">
        <q-card class="q-pr-md" >
          <q-card-section>
            <div class="text-h6">Add Role to {{ propUser.first_name.toUpperCase() }} {{ propUser.last_name.toUpperCase() }}</div>
          </q-card-section>

          <q-separator />

          <q-card-section style=" max-height: 50vh" class="scroll">
            <div class="q-gutter-md row items-start justify-between">
              <q-select
                dense
                class="col-lg-4 col-md-12 col-sm-12 col-xs-12"
                filled
                v-model="formRole"
                :options="roles"

                emit-value
                map-options
                hint="Select a role"

              />
              <!-- @input="updateSubcategories" @click="addSottoCategory()" -->

              <q-input hint="denomination" v-model="formRole" dense filled class="col-lg-7 col-md-12 col-sm-12 col-xs-12" >
                <template v-slot:before>
                  <q-icon round dense flat name="fa fa-plus" />
                </template>
                <template v-slot:after>
                  <q-btn
                    color="primary"
                    v-show="formRole"
                    @click="addRoleToUser()"
                    v-close-popup round dense flat
                    icon="fa fa-save"
                  >
                  <q-tooltip :offset="[10, 10]" transition-show="rotate"
                    transition-hide="rotate">
                    Save
                  </q-tooltip>
                </q-btn>
                </template>

              </q-input>

            </div><br>

          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat label="close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { getRoles, addRole } from '@/models/role.js'
import { mapGetters } from "vuex";
export default {
  name: 'AddRole',
  props: ['openDialog', 'propUser'],
  watch: {
    model: {
      handler() {
        console.log(this.model)
        if(!this.model) this.emitData()
      }
    },
  },
  data () {
    return {
      model: false,
      roles: [],
      formRole: "",
    }
  },
  async mounted(){
    this.model = this.openDialog

    if (this["wilfried/roles"].length < 1) {
      await getRoles();
    }
    this.roles = this["wilfried/roles"]
  },
   computed: {
    ...mapGetters(["wilfried/roles"])
  },
  methods: {
    emitData(){
       const roleData = {
        id: this.propUser.id,
        role: this.formRole
      }
      this.$emit("popopClosed", roleData)
    },
    addRoleToUser(){
      const roleData = {
        id: this.propUser.id,
        role: this.formRole
      }

      addRole(roleData)
      this.model = false
      
    }
  }
}
</script>
