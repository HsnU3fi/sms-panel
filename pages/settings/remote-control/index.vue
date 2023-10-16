<template>
  <BaseLayout class="dashboard">
    <!-- alerts -->
    <div class="col-12 mt-0">
      <form>
        <section class="test-send form-item pt-0">
          <h4 class="label">Send single message</h4>
          <p
            class="label"
            v-for="(item, index) in sendSingleState"
            :key="index"
          >
            {{ item }}
          </p>
        </section>
        <section class="test-send form-item">
          <h4 class="label">View credit amount</h4>
          <p
            class="label"
            v-for="(item, index) in viewCreditCountState"
            :key="index"
          >
            {{ item }}
          </p>
        </section>
        <section class="test-send form-item">
          <h4 class="label">Recieve messages</h4>
          <p
            class="label"
            v-for="(item, index) in recieveMessagesState"
            :key="index"
          >
            {{ item }}
          </p>
        </section>
        <section class="test-send form-item">
          <h4 class="label">Send messages</h4>
          <p
            class="label"
            v-for="(item, index) in sendMessagesState"
            :key="index"
          >
            {{ item }}
          </p>
        </section>
      </form>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import ClockBlue from "@/components/TheIcon/single-icons/ClockBlue.vue";
import { ref } from "vue";

//state

const sendSingleState = ref([
  "To send a single SMS, send the following code from your mobile phone to the dedicated line of your system:",
  "@ Send @ Text @ Number Example :",
  " Example : @1XXXxxxxxx@Send@Text...",
]);
const viewCreditCountState = ref([
  "To view the validity of your panel, send the following code from your mobile phone to your dedicated line:",
  "@ Credit @",
]);
const recieveMessagesState = ref([
  "To view the status summary of received SMS, send the following code from your mobile phone to your dedicated line:",
  "@ Inbox @",
]);
const sendMessagesState = ref([
  "Copy To see the number of SMS sent, send the following code from your mobile phone to your dedicated line:",
  "@ Outbox @",
]);

//methods
</script>
    