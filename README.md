# ✅ To-Do List

A clean, responsive to-do list web app with a dark/light theme toggle and an animated video background. Tasks are saved in your browser, so they're still there when you come back.

<!-- Add a screenshot: put an image in the repo (e.g. screenshots/preview.png) and uncomment the line below -->
<!-- ![To-Do List preview](screenshots/preview.png) -->

## ✨ Features

- **Add tasks** with the Add button or by pressing **Enter**
- **Edit** and **delete** any task
- **Mark tasks as complete** (completed tasks are crossed out)
- **Live counters** for completed and uncompleted tasks
- **Dark / light mode** toggle with 🌙 / ☀️ emoji, and your choice is remembered
- **Saved automatically** using the browser's `localStorage`
- **Looping video background** behind the app
- **Responsive layout** that works on desktop and mobile

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, CSS variables-free, no frameworks)
- Vanilla JavaScript (no libraries)

## 📁 Project Structure

```
todo-list/
├── home.html      # Page structure
├── home.css       # Styling, navbar, toggle, light/dark themes
├── home.js        # Task logic, theme toggle, localStorage
├── fallback.jpg   # Poster image shown while the video loads
└── vid/
    └── coverfire.mp4   # Background video
```

## 🚀 Getting Started

No installation or build step is needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
2. **Open the folder**
   ```bash
   cd YOUR-REPO-NAME
   ```
3. **Open `home.html`** in your browser (double-click it, or use a local server such as XAMPP or the VS Code Live Server extension).

> **Note:** make sure the `vid/coverfire.mp4` file is included in the repo, otherwise the background video won't play. The app still works without it.

## 🧠 How It Works

- Tasks are stored as an array of `{ text, done }` objects in `localStorage` under the key `myTasks`.
- The theme is stored under the key `mode` and applied by toggling a `light` class on `<body>`.
- Task text is inserted with `textContent`, so anything typed into a task is treated as plain text and never run as HTML.

## 🔮 Possible Improvements

- Due dates and priorities
- Filter by all / active / completed
- Drag-and-drop reordering
- Clear all completed tasks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Destin**
Information Systems student and web developer
GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
