<script setup lang="ts">
import NoteCard from './NoteCard.vue'
import type { Note } from '../../interfaces/notes'

defineProps<{ notes: Note[] }>()

const emit = defineEmits<{
  (e: 'edit', note: Note): void
  (e: 'delete', id: number): void
}>()

function handleEdit(note: Note) {
  emit('edit', note)
}

function handleDelete(id: number) {
  emit('delete', id)
}
</script>

<template>
  <div class="grid">
    <NoteCard
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>


<style scoped>


.empty-state {
  text-align: center;
  color: #6b7280; /* gray text */
  font-style: italic;
  margin-top: 2rem;
}
</style>