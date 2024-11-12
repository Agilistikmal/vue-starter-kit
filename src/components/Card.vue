<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-white/5',
  },
  color: {
    type: String,
    default: 'text-white',
  },
})
</script>

<template>
  <div
    :class="`px-5 py-2 rounded-lg max-w-xl aspect-video flex flex-col justify-between ${bg} ${color}`"
  >
    <div>
      <h1 class="text-2xl font-bold">
        <slot name="title"></slot>
      </h1>
      <slot name="content"></slot>
    </div>
    <div>
      <div class="px-5 py-1 rounded-lg bg-brand w-max my-2" />
      <div>
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
