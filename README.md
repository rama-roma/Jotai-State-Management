# Jotai State Management (Sync & Async)

This repository contains a **React** application built with **Vite** that demonstrates
state management using **Jotai (atoms)**.

The project focuses on:
- ✅ **Synchronous Todo state**
- 🔄 **Asynchronous Todo state**
- 🧩 Atomic state management with Jotai
- 📄 Page-based separation for sync and async logic

It is designed for learning **Jotai fundamentals** and comparing **sync vs async state handling**.

---

## 🚀 Tech Stack

- **React**
- **Jotai**
- **Vite**
- **JavaScript (ES6+)**
- **JSON Server (for async todos)**

---

## 📂 Project Structure

```text
src/
├── atoms/
│   ├── todo.js          # Single todo atom
│   └── todos.js         # Todos atoms (sync & async)
│
├── pages/
│   ├── Home.jsx         # Main page
│   ├── Info.jsx         # Info/About page
│   ├── InfoSync.jsx     # Sync info page
│   ├── Sync.jsx         # Sync todo example
│   └── Async.jsx        # Async todo example
│
├── Layout.jsx           # App layout
├── App.jsx
├── main.jsx
└── index.css


📝 Features
🔹 Sync Todo

Add and remove todos synchronously

Instant updates via atoms

No API calls

🔹 Async Todo

Fetch todos asynchronously

Async atoms for API calls

Uses db.json as a mock backend