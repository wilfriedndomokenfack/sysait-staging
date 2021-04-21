<template>
  <q-page padding class="constrain">
    <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 600px; width:1000px"
      >
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-dark"
          >
            <q-tab name="users" label="Users" />
            <q-tab name="other1" label="other1" />
            <q-tab name="other2" label="other2" />
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

            <q-tab-panel name="other1" >
              <div class="text-h4 q-mb-md">other1</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="other2">
              <div class="text-h4 q-mb-md">other2</div>
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
  async mounted() {
    let val = await isSuperUser()
    if(!val) this.$router.push({ name: "home" });
  }
}
</script>
