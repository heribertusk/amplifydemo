<template>
  <div :class="$attrs.class">
    <label v-if="label" class="block text-base text-gray-500">{{ label }}:</label>
    <textarea
      ref="input" 
      v-bind="{ ...$attrs, class: null }"
      :value="modelValue" 
      @input="$emit('update:modelValue')"
      class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    label: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
}
</script>
