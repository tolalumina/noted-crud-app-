<template>
  <form @submit.prevent="submit">
    <input v-model="form.title" placeholder="Title" />
    <textarea v-model="form.content"></textarea>

    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import type { Note } from "@/interfaces/notes";
import { reactive } from "vue";

const props = defineProps<{
  note?: Note | null;
}>();

const emit = defineEmits<{
  (e: 'save', note: Omit<Note, 'id'>): void
}>()


const form = reactive({
  title: props.note?.title || '',
  content: props.note?.content || '',
  createdAt: new Date()
})

function submit() {
  emit('save', { ...form })
}
</script>
