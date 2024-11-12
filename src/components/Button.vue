<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-brand',
  },
  color: {
    type: String,
    default: 'text-white',
  },
})
</script>

<template>
  <button :class="`px-5 py-2 rounded-lg text-nowrap ${bg} ${color}`">
    <div class="flex items-center gap-2">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </button>
</template>
