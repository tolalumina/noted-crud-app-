# 📝 Notes Application

## Project Overview
The **Notes Application** is a full-stack web app that allows users to **create, read, update, and delete (CRUD) notes**.  
It demonstrates **frontend development with Vue + TypeScript + Tailwind** and **backend development with ASP.NET Core Web API using Dapper and SQL Server**.  

Users can:
- Create notes with title and optional content
- View a list of notes with creation date
- Edit or delete their own notes
- Search and filter notes (basic functionality)
- Responsive design for desktop and mobile

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vue 3, TypeScript, Tailwind CSS, Axios |
| Backend | ASP.NET Core Web API, Dapper, C# |
| Database | SQL Server |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```
NotesApp/
├── frontend/                  # Vue 3 + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/        # Reusable components (NoteCard, NoteModal, etc.)
│   │   ├── views/             # Pages (NoteList, Dashboard)
│   │   ├── stores/            # Pinia stores (optional)
│   │   ├── services/          # Axios API service
│   │   ├── types/             # TypeScript interfaces
│   │   └── App.vue
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── backend/                   # ASP.NET Core Web API
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/          # Dapper repositories
│   ├── Services/
│   ├── Data/                  # SQL scripts or migrations
│   └── Program.cs
│
├── database/                  # SQL Server scripts (tables, seed data)
└── README.md
