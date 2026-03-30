import { defineStore } from 'pinia';
import type { Note } from '../interfaces/notes'

export const useNoteStore = defineStore('notes', {
  state: () => ({
    notes: [] as Note[]
  }),

  actions: {
    addNote(note: Omit<Note, 'id'>) {
      const newNote: Note = {
        ...note,
        id: Date.now()
      }
      this.notes.push(newNote)
    },

    updateNote(updated: Note) {
      const index = this.notes.findIndex(n => n.id === updated.id)
      if (index !== -1) {
        this.notes[index] = updated
      }
    },

    deleteNote(id: number) {
      this.notes = this.notes.filter(n => n.id !== id)
    }
  }
})