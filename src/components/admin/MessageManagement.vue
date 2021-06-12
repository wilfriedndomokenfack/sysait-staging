<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="contacts" label="Contact" />
          <q-tab name="jobs" label="Job" />
          <q-tab name="trainings" label="Training" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="contacts">
            <div class="text-h6">Contacts</div>
            <q-markup-table flat bordered wrap-cells>
              <thead class="">
                <tr>
                  <th class="text-left">User Action</th>
                  <th class="text-center">First name</th>
                  <th class="text-center">Last name</th>
                  <th class="text-center">Email</th>
                  <th class="text-right">Display</th>
                </tr>
              </thead>
              <tbody class="bg-grey-3" :key="tableKey">
                <tr v-for="(msg, index) in messages_contact" :key="index">
                  <td class="text-left">
                    <div class="q-gutter-xs row items-start justify-between">
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-trash"
                        padding="sm"
                        @click="deleteMsg(msg, msg.id)"
                      />
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.first_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.last_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="text-primary">
                      {{ msg.email }}
                    </div>
                  </td>
                  <td class="text-left">
                    <div>
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-eye"
                        padding="sm"
                        @click="displaymessage(msg)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>

          <q-tab-panel name="jobs">
            <div class="text-h6">Jobs</div>
            <q-markup-table flat bordered>
              <thead class="">
                <tr>
                  <th class="text-left">User Action</th>
                  <th class="text-center">First name</th>
                  <th class="text-center">Last name</th>
                  <th class="text-center">Email</th>
                  <th class="text-right">Display</th>
                </tr>
              </thead>
              <tbody class="bg-grey-3" :key="tableKey">
                <tr v-for="(msg, index) in messages_job" :key="index">
                  <td class="text-left">
                    <div class="q-gutter-xs row items-start justify-between">
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-trash"
                        padding="sm"
                        @click="deleteMsg(msg, msg.id)"
                      />
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.first_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.last_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="text-primary">
                      {{ msg.email }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="text-primary">
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-eye"
                        padding="sm"
                        @click="displaymessage(msg)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>

          <q-tab-panel name="trainings">
            <div class="text-h6">Training</div>
            <q-markup-table flat bordered>
              <thead class="">
                <tr>
                  <th class="text-left">User Action</th>
                  <th class="text-center">First name</th>
                  <th class="text-center">Last name</th>
                  <th class="text-center">Email</th>
                  <th class="text-right">Display</th>
                </tr>
              </thead>
              <tbody class="bg-grey-3" :key="tableKey">
                <tr v-for="(msg, index) in messages_training" :key="index">
                  <td class="text-left">
                    <div class="q-gutter-xs row items-start justify-between">
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-trash"
                        padding="sm"
                        @click="deleteMsg(msg, msg.id)"
                      />
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.first_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      {{ msg.last_name }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="text-primary">
                      {{ msg.email }}
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="text-primary">
                      <q-btn
                        outline
                        color="primary"
                        round
                        dense
                        icon="fa fa-eye"
                        padding="sm"
                        @click="displaymessage(msg)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <ContactDetail v-if="show" :propMsg="propMsg" :key="msgKey" />
  </div>
</template>

<script>
import ContactDetail from "@/components/users/ContactDetail.vue";
import { getMessages } from "@/models/message.js";
import { mapGetters } from "vuex";
import { deepCopy } from "@/models/utils/common.js";
import { deleteMessage } from "@/models/message.js";
export default {
  name: "MessageManagement",
  components: {
    ContactDetail
  },
  data() {
    return {
      tab: "contacts",
      show: false,
      propMsg: null,
      msgKey: 22,
      tableKey: 323,
      messages: [],
      messages_job: [],
      messages_training: [],
      messages_contact: [],
      categories: ["Contact", "Job", "Training"]
    };
  },
  async mounted() {
    if (this["rosine/messages"].length < 1) {
      await getMessages();
    }
    this.messages = deepCopy(this["rosine/messages"]);
    this.messages_job = this.messages?.filter(v => v.category == "Job");
    this.messages_training = this.messages?.filter(
      v => v.category == "Training"
    );
    this.messages_contact = this.messages?.filter(v => v.category == "Contact");
  },
  computed: {
    ...mapGetters(["rosine/messages"])
  },
  methods: {
    displaymessage(msg) {
      this.propMsg = msg;
      console.log(msg);
      this.msgKey++;
      this.show = true;
    },
    deleteMsg(message, msg_id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: `Are you sure you want to delete  this message?`,
          cancel: true,
          persistent: true,
          color: "red",
          ok: "delete"
        })
        .onOk(async () => {
          console.log(message, msg_id);
          deleteMessage(msg_id);
          this.$store.dispatch("rosine/deleteMessage", message);
          this.tableKey++;
        });
    }
  }
};
</script>
