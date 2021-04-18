<template>
  <q-page padding class="constrain">
    <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 450px; width:1000px"
      >
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-dark"
          >
            <q-tab name="users" icon="fa fa-users" label="Users" />
            <q-tab name="alarms" icon="alarm" label="Alarms" />
            <q-tab name="movies" icon="movie" label="Movies" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="users">
              <UsersManagement/>
            </q-tab-panel>

            <q-tab-panel name="alarms" >
              <div class="text-h4 q-mb-md">Alarms</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import { isSuperUser } from '@/models/user.js'

import UsersManagement from "@/components/users/UsersManagement.vue"
export default {
  name: 'AdminPanel',
  components: {
    UsersManagement
  },
  data () {
    return {
      splitterModel: 20,
      tab: 'users'
    }
  },
  mounted() {
    if(!isSuperUser()) this.$router.push({ name: "home" });
  }
}
</script>
