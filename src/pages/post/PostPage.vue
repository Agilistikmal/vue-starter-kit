<script setup lang="ts">
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, ref } from 'vue'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const posts = ref<Post[]>()

onMounted(async () => {
  const res: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts/').then((r) =>
    r.json(),
  )
  posts.value = res.slice(0, 6)
})
</script>

<template>
  <div class="pt-8 pb-48 min-h-screen">
    <div>
      <h1 class="font-bold text-3xl">Post</h1>
      <h2 class="text-xl">Example fetching data</h2>
      <p>
        from
        <a href="https://jsonplaceholder.typicode.com" target="_blank" class="text-accent"
          >jsonplaceholder.typicode.com</a
        >
      </p>
      <div class="px-5 py-1 rounded-lg bg-brand w-max my-2" />
      <a href="/">
        <Button class="mt-2">
          <template #icon><Icon icon="uim:corner-up-left" class="text-2xl" /></template>
          <template #text>Back to home</template>
        </Button>
      </a>
    </div>
    <div class="mt-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="post in posts" :key="post.id">
          <Card>
            <template #title>{{ post.title }}</template>
            <template #content>{{ post.body }}</template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
