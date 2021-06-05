<template>
  <div>
    <div v-for="(msg, index) in messages_contact" :key="index">
      {{ msg.message }} {{ msg.first_name }}
    </div>
    <!-- <q-splitter v-model="splitterModel" style="height: 600px; width:100%">
      <template v-slot:before>
        <q-tabs v-model="tab" class="text-dark">
          <q-tab
            v-for="(category, index) in categories"
            :key="index"
            :name="category"
            :label="category"
            no-caps
          />
        </q-tabs>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            v-for="(category, index) in categories"
            :key="index"
            :name="category"
          >
            hello world
            
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>-->
  </div>
</template>

<script>
import { getMessages } from "@/models/message.js";
import { mapGetters } from "vuex";
import { deepCopy } from "@/models/utils/common.js";
export default {
  name: "MessageManagement",
  data() {
    return {
      messages: [],
      messages_job: [],
      messages_training: [],
      messages_contact: [],
      categories: ["Contact", "Training", "Job"]
    };
  },
  async mounted() {
    if (this["rosine/messages"].length < 1) {
      await getMessages();
    }
    this.messages = deepCopy(this["rosine/messages"]);

    this.messages_job = this.messages?.filter(v => v.category == "Job");
    console.log(this.messages_job);

    this.messages_training = this.messages?.filter(v => v.category == "Training");

    this.messages_contact = this.messages?.filter(v => v.category == "Contact");
  },
  computed: {
    ...mapGetters(["rosine/messages"])
  }
};
</script>
