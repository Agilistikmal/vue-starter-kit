<script setup lang="ts">
import Button from '@/components/Button.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="py-48 min-h-screen flex flex-col justify-between">
    <div>
      <h1 class="font-bold text-6xl">Vue<span class="text-brand">.js</span> Starter Kit</h1>
      <h2 class="text-2xl text-accent">Start your project faster.</h2>
      <div class="px-5 py-1 rounded-lg bg-brand w-max my-2" />
      <div class="flex items-center gap-2">
        <a href="/post">
          <Button class="mt-2">
            <template #icon><Icon icon="uim:corner-up-right" class="text-2xl" /></template>
            <template #text>Go to post page</template>
          </Button>
        </a>
        <a href="/feedback">
          <Button class="mt-2" bg="bg-brand/5" color="text-brand">
            <template #icon><Icon icon="uim:comment-alt-message" class="text-2xl" /></template>
            <template #text>Feedback</template>
          </Button>
        </a>
      </div>
    </div>
    <div>
      <a href="https://github.com/Agilistikmal/vue-starter-kit" target="_blank">
        <Button bg="bg-transparent" class="border border-accent/5">
          <template #icon><Icon icon="uim:github" class="text-3xl" /></template>
          <template #text>
            <p>
              GitHub
              <span class="text-accent hidden sm:inline">agilistikmal/vue-starter-kit</span>
            </p>
          </template>
        </Button>
      </a>
    </div>
  </div>
</template>
