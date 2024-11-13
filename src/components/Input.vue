<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-accent',
  },
  color: {
    type: String,
    default: 'text-black',
  },
  id: String,
  name: String,
  title: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <div>
    <label :for="id" class="font-bold">{{ title }}</label>
    <label :for="id" :class="`inline-block px-5 py-2 w-full rounded-lg text-nowrap ${bg} ${color}`">
      <div class="flex items-center gap-2">
        <slot name="icon"></slot>
        <input
          :id="id"
          :name="name"
          :placeholder="placeholder"
          :type="type"
          class="bg-transparent outline-none placeholder:text-brand"
        />
      </div>
    </label>
  </div>
</template>
