<template>
  <div :class="$attrs.class">
    <label v-if="label" class="block text-base text-gray-500"
      >{{ label }}:</label
    >
    <input
      ref="input"
      v-bind="{ ...$attrs, class: null }"
      type="number"
      inputmode="numeric"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="block py-1.5 px-3 mt-2 w-full text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none placeholder-gray-400/70"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: String,
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
};
</script>
