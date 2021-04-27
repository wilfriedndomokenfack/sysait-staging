<template>
  <div class="q-pa-md">

    <q-markup-table flat bordered>
      <thead class="">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center justify-between">
              <div class="col-10 row items-center">
                <q-icon name="fa fa-users" class="q-pa-md" color="primary" style="font-size: 2rem;"/>
                <div class="text-h5 q-ml-md text-dark">
                  Manage users
                </div>
              </div>
              <div class="col-2">
                <q-btn
                outline
                color="primary"
                round dense
                icon="fa fa-plus"
                padding="sm"
              />
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">User Action</th>
          <th class="text-center">Name/Email</th>
          <th class="text-center">Roles</th>
          <th class="text-center">Trainings</th>
          <th class="text-right">Status</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3" :key="tableKey">
        <tr v-for="(user, index) in users" :key="index">
          <td class="text-left">
            <div class="q-gutter-xs row items-start justify-between">
              <q-btn
                outline
                color="primary"
                round dense
                icon="fa fa-pen"
                padding="sm"
              />

              <q-btn
                outline
                color="primary"
                round dense
                icon="fa fa-trash"
                padding="sm"
              />
            </div>
          </td>
          <td class="text-center">
            <div>
              {{user.first_name}} {{user.last_name}}
            </div>
            <div class="text-primary">
              {{user.email}}
            </div>
          </td>
          <td class="text-center">
            <q-btn icon="fa fa-plus" size="7px" class="text-green" @click="addRoleToUser(user)">
                Add role
              </q-btn>
            <ul v-if="user.roles.length > 0">
              <li v-for="(role, index2) in user.roles" :key="index2" class="row justify-between ">
              <div>
                 -  {{ role.name }}
              </div>
              <q-btn v-if="role.id"  icon="fa fa-times" size="7px" class="text-red" @click="removeRoleToUser(role.name, user.id)">
                remove
              </q-btn>
              </li>
            </ul>

          </td>
          <td class="text-center">
            <div>
              {{ user.courses.length }}
            </div>
            <div>
              <q-btn  size="7px" class="text-primary" @click="manageTrainings(user)">
                Manage
              </q-btn>
            </div>
          </td>
          <td class="text-right">
            <q-btn
              :label="label(user.status)"
              outline
              flat
              dense
              :color="color(user.status)"
              padding="sm"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <AddRole v-if="openRoles" :propUser="propUser" :openDialog="openRoles" @popopClosed="poposclosed" :key="addRoleKey"/>
    <UserTrainings v-if="openTrainings" :propUser="propUser" :openDialog="openTrainings" @popopClosed="trainingPopopclosed" :key="trainingsKey"/>

  </div>
</template>

<script>
import AddRole from "@/components/users/AddRole.vue"
import UserTrainings from "@/components/users/UserTrainings.vue"
import { mapGetters } from "vuex";
import { getUsers } from "@/models/user.js"
import { Constants } from '@/models/utils/common.js'
import { removeRole } from '@/models/role.js'
import { deepCopy } from '@/models/utils/common.js'
export default {
  name: 'UsersManagement',
  components: {
    AddRole,
    UserTrainings
  },
  data () {
    return {
      tableKey: 323,
      propUser: null,
      addRoleKey: 22,
      trainingsKey: 3,
      openRoles: false,
      openTrainings: false,
      users: []
    }
  },
  async mounted(){

    if (this["wilfried/users"].length < 1) {
      await getUsers();
    }
    this.users = deepCopy(this["wilfried/users"])

  },
  computed: {
    ...mapGetters(["wilfried/users"])
  },

  methods: {
    manageTrainings(user){
      this.propUser = user
      this.openTrainings = true
      this.trainingsKey++
    },
    trainingPopopclosed(trainingData){
      if(trainingData){
        let user = this.users.find(v => v.id === trainingData.id)
        user.courses.push(trainingData.training)
        console.log(user.courses)
        this.tableKey++
      }

      this.openTrainings = false
    },
    label(status){
      return Constants.STATUS.find(v => v.value == status)?.label
    },
    color(status){
      return Constants.STATUS.find(v => v.value == status)?.color
    },
    addRoleToUser(user){
      this.openRoles = true
      this.propUser = user
      this.addRoleKey++
    },

    removeRoleToUser(role, user_id){
      const roleDatas = {
        user_id: user_id,
        role: role
      }
      let user = this.users.find(v => v.id === user_id)

      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove ${role.toUpperCase() } role to ${user.first_name.toUpperCase() } ${user.last_name.toUpperCase()}?`,
        cancel: true,
        persistent: true,
        color: "red",
        ok: "delete"
      }).onOk( async () => {

        let r = user.roles.find(v => v.name === role)
        const index = user.roles.indexOf(r)
        user.roles.splice(index, 1);
        await removeRole(roleDatas)
        getUsers();
        this.tableKey++
      })


    },
    poposclosed(roleData){
      if(roleData.role.length > 0){
        let user = this.users.find(v => v.id === roleData.id)
        user.roles.push({name: roleData.role})
        this.tableKey++
      }

      this.openRoles = false
    }

  }
}
</script>
