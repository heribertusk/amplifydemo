<template>
  <div :class="$attrs.class">
    <label v-if="label" class="block text-base text-gray-500" :for="id"
      >{{ label }}:</label
    >
    <textarea
      :id="id"
      ref="input"
      v-bind="{ ...$attrs, class: null }"
      class="block py-1.5 px-3 mt-2 w-full text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none placeholder-gray-400/70"
      :class="{ error: error }"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `textarea-input-${self.crypto.randomUUID()}`;
      },
    },
    error: String,
    label: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>
