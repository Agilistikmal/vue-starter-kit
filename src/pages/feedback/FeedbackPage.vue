<script setup lang="ts">
import Button from '@/components/Button.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import FeedbackForm from '@/pages/feedback/FeedbackForm.vue'
</script>

<template>
  <div class="pt-48 min-h-screen grid grid-cols-1 md:grid-cols-2">
    <div>
      <h1 class="font-bold text-6xl">Feedback</h1>
      <h2 class="text-2xl text-accent">Give a feedback about this template</h2>
      <div class="px-5 py-1 rounded-lg bg-brand w-max my-2" />
      <a href="/">
        <Button class="mt-2" bg="bg-brand/5" color="text-brand">
          <template #icon><Icon icon="uim:corner-up-left" class="text-2xl" /></template>
          <template #text>Back to home</template>
        </Button>
      </a>
    </div>
    <div>
      <FeedbackForm />
    </div>
  </div>
</template>
