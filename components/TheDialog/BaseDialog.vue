<template>
  <ClientOnly>
    <el-dialog
      :model-value="props.isDialogOpen"
      :show-close="false"
      class="base-dialog"
      :class="props.class"
      @close="closeDialog"
      align-center
    >
      <template #header="{ close }">
        <h3 class="header">
          {{ props.title }}
          <span @click="close(), closeDialog()"><Icon name="close" /></span>
        </h3>
      </template>
      <slot />
      <template #footer v-if="okText || cancelText">
        <div class="footer">
          <button
            type="button"
            class="cancel-btn"
            v-if="cancelText"
            @click="emit('cancelClicked')"
          >
            {{ cancelText }}
          </button>
          <button
            type="button"
            class="ok-btn"
            v-if="okText"
            @click="emit('okClicked')"
          >
            {{ okText }}
          </button>
        </div>
      </template>
    </el-dialog></ClientOnly
  >
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isDialogOpen: {
    default: false,
  },
  class: {
    type: String,
  },
  okText: {
    type: String,
    default: "",
  },
  cancelText: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["close", "okClicked", "cancelClicked"]);
const closeDialog = () => {
  emit("close");
};
</script>

<style>
</style>