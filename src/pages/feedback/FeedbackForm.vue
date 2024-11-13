<script setup lang="ts">
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import TextArea from '@/components/TextArea.vue'
</script>

<template>
  <form
    method="post"
    class="w-full max-w-lg mx-auto bg-accent/5 p-5 rounded-lg space-y-1 border-b-4 border-brand"
  >
    <Input
      type="text"
      id="full_name"
      name="full_name"
      title="Full Name"
      placeholder="Your full name"
    />
    <TextArea id="feedback" name="feedback" title="Feedback" placeholder="Write your feedback..." />
    <Button class="w-full !mt-5 font-bold">
      <template #text>Submit</template>
    </Button>
  </form>
</template>
