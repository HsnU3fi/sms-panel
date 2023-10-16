<template>
  <ClientOnly>
    <el-dialog
      :model-value="state.isDialogOpen"
      :show-close="false"
      class="base-confirm-dialog"
      @close="closeDialog"
      align-center
    >
      <template #header>
        <h3 class="header">
          {{ state.title }}
          <span @click="cancelHandler"><Icon name="close" /></span>
        </h3>
      </template>
      <div class="content">
        {{ state.content }}
      </div>
      <div class="d-flex justify-content-center mt-5 g-20">
        <button
          type="button"
          :class="state.type"
          class="cancel w-50"
          @click="cancelHandler"
        >
          {{ state.cancelText }}
        </button>
        <button
          type="button"
          class="w-50"
          :class="state.type"
          @click="confirmHandler"
        >
          {{ state.confirmText }}
        </button>
      </div>
    </el-dialog></ClientOnly
  >
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

//props

const props = defineProps({
  state: {
    default: null,
    type: Object,
  },
});
const state = ref(props.state);

//emits

const emit = defineEmits("confirm", "cancel");

//methods

const confirmHandler = () => {
  emit("confirm");
};
const cancelHandler = () => {
  emit("cancel");
};
</script>

<style>
</style>