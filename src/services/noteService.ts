import axios from "axios";
import type { Note } from "../interfaces/notes";

// 1. Set the baseURL to the Controller level
const api = axios.create({
  baseURL: "http://localhost:3000/api/Notes",
  headers: {
    "Content-Type": "application/json",
  },
});

export const noteService = {
  async getNotes(): Promise<Note[]> {
    // 2. Remove "/notes". Using "" or "/" hits the baseURL directly (api/Notes)
    const response = await api.get<Note[]>("");
    return response.data;
  },

  async addNote(note: Omit<Note, "id">): Promise<Note> {
    // Hits POST api/Notes
    const response = await api.post<Note>("", note);
    return response.data;
  },

  async updateNote(note: Note): Promise<Note> {
    // Hits PUT api/Notes/{id}
    const response = await api.put<Note>(`/${note.id}`, note);
    return response.data;
  },

  async deleteNote(id: number): Promise<void> {
    // Hits DELETE api/Notes/{id}
    await api.delete(`/${id}`);
  },
};

export default api;
