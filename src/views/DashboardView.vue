<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="header">
      <h1>Notes Dashboard</h1>
      <button @click="openModal()">+ New Note</button>
    </div>

    <!-- Search -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search notes..."
      class="search"
    />

    <!-- Refresh Button -->
    <button @click="loadNotes">Refresh Notes</button>

    <!-- Notes List -->
    <NoteList :notes="filteredNotes" @edit="editNote" @delete="handleDeteledNote" />

    <!-- Modal for Create/Edit -->
    <NoteModal
      :show="showModal"
      :note="selectedNote"
      @save="saveNote"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Note } from "../interfaces/notes";
import NoteList from "../components/notes/NoteList.vue";
import NoteModal from "../components/notes/NoteModal.vue";
import { noteService } from "../services/noteService";

// Reactive notes array
const notes = ref<Note[]>([]);

// Modal & selected note
const showModal = ref(false);
const selectedNote = ref<Note | null>(null);

// Search query
const searchQuery = ref("");

// ✅ Computed filtered notes
const filteredNotes = computed(() =>
  notes.value.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
);

// ✅ Load all notes from backend
async function loadNotes() {
  try {
    notes.value = await noteService.getNotes();
  } catch (err: unknown) {
    console.error("Failed to load notes:", err);
  }
}

// Delete each card list of note

async function handleDeteledNote(id: number) {
  try {
    await noteService.deleteNote(id);
    notes.value = notes.value.filter((n) => n.id !== id);
    console.log(notes.value);
  } catch (err) {
    console.error("Delete faild : ", err);
  }
}
// Load notes on mount
onMounted(() => {
  loadNotes();
});

// Open modal for new note
function openModal() {
  selectedNote.value = null;
  showModal.value = true;
}

// Edit existing note
function editNote(note: Note) {
  selectedNote.value = note;
  showModal.value = true;
}

// Save note (create or update)
async function saveNote(noteData: Omit<Note, "id">) {
  try {
    if (selectedNote.value) {
      // Update note
      await noteService.updateNote({
        ...noteData,
        id: selectedNote.value.id,
      });
    } else {
      // Add new note
      await noteService.addNote(noteData);
    }
    await loadNotes(); // refresh notes after save
    closeModal();
  } catch (err: unknown) {
    console.error("Failed to save note:", err);
  }
}

// Delete note
async function deleteNote(id: number) {
  try {
    await noteService.deleteNote(id);
    await loadNotes(); // refresh notes after delete
  } catch (err: unknown) {
    console.error("Failed to delete note:", err);
  }
}

// Close modal
function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
.dashboard {
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.search {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
