<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h2>{{ note ? 'Edit Note' : 'New Note' }}</h2>

      <form @submit.prevent="submit">
        <input
          v-model="form.title"
          type="text"
          placeholder="Title"
          required
        />
        <textarea
          v-model="form.content"
          placeholder="Write your note..."
          required
        ></textarea>

        <div class="actions">
          <button type="submit">{{ note ? 'Update' : 'Save' }}</button>
          <button type="button" @click="$emit('close')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Note } from '../../interfaces/notes'

// Props: show modal + note to edit
const props = defineProps<{
  show: boolean
  note: Note | null
}>()

// Emit save/close events
const emit = defineEmits<{
  (e: 'save', note: Omit<Note, 'id'>): void
  (e: 'close'): void
  (e: 'delete'): void
}>()

// Reactive form
const form = reactive({
  title: '',
  content: ''
})

// Watch for note prop changes (edit mode)
watch(
  () => props.note,
  (newNote) => {
    if (newNote) {
      form.title = newNote.title
      form.content = newNote.content
    } else {
      form.title = ''
      form.content = ''
    }
  },
  { immediate: true }
)

// Submit form
function submit() {
  emit('save', { ...form, createdAt: new Date() })
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal {
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 400px;
  max-width: 90%;
}

.modal input,
.modal textarea {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>