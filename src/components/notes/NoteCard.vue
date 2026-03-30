<template>
  <div class="note-card">
    <h3 class="note-title">{{ note.title }}</h3>
    <p class="note-content">{{ note.content }}</p>

    <div class="note-actions">
      <button class="edit-btn" @click="emitEdit">Edit</button>
      <button class="delete-btn" @click="emitDelete">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Note } from '../../interfaces/notes'

// Props
const props = defineProps<{ note: Note }>()

// Emits
const emit = defineEmits<{
  (e: 'edit', note: Note): void
  (e: 'delete', id: number): void
}>()

// Handlers
function emitEdit() {
  emit('edit', props.note)
}

function emitDelete() {
  emit('delete', props.note.id)
  console.log(props.note.id);
}
</script>

<style scoped>
.note-card {
  background-color: #f9fafb; /* light gray */
  border: 1px solid #e5e7eb; /* soft border */
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.note-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.note-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.note-content {
  flex-grow: 1;
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.note-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.edit-btn,
.delete-btn {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.edit-btn {
  background-color: #3b82f6; /* blue */
  color: white;
}

.edit-btn:hover {
  background-color: #2563eb;
}

.delete-btn {
  background-color: #ef4444; /* red */
  color: white;
}

.delete-btn:hover {
  background-color: #b91c1c;
}
</style>