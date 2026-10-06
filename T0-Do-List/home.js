// light & dark mode toggle
const toggle = document.getElementById("modeToggle");

function setMode(isLight) {
  document.body.classList.toggle("light", isLight);
  toggle.checked = isLight;
  localStorage.setItem("mode", isLight ? "light" : "dark");
}

setMode(localStorage.getItem("mode") === "light");
toggle.addEventListener("change", () => setMode(toggle.checked));

// tasks
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("AddListBtn");
const container = document.getElementById("taskContainer");
const emptyMsg = document.getElementById("emptyMsg");
const stats = document.getElementById("stats");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function save() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function render() {
  container.innerHTML = "";
  if (tasks.length === 0) {
    emptyMsg.style.display = "block";
    stats.style.display = "none";
    return;
  }
  emptyMsg.style.display = "none";
  stats.style.display = "block";

  tasks.forEach((t, index) => {
    const div = document.createElement("div");
    div.className = "task-item";
    div.innerHTML = `
      <div class="task-left">
        <input type="checkbox" ${t.done ? "checked" : ""}>
        <span class="${t.done ? "completed-text" : ""}"></span>
      </div>
      <div>
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
      </div>
    `;
    // textContent keeps typed HTML from being run as code
    div.querySelector("span").textContent = t.text;

    div.querySelector("input").addEventListener("change", () => {
      tasks[index].done = !tasks[index].done;
      save();
      render();
    });
    div.querySelector(".delete").addEventListener("click", () => {
      tasks.splice(index, 1);
      save();
      render();
    });
    div.querySelector(".edit").addEventListener("click", () => {
      const newText = prompt("Edit task:", t.text);
      if (newText && newText.trim()) {
        tasks[index].text = newText.trim();
        save();
        render();
      }
    });
    container.appendChild(div);
  });

  const done = tasks.filter((t) => t.done).length;
  document.getElementById("completed").textContent = done;
  document.getElementById("uncompleted").textContent = tasks.length - done;
}

function addTask() {
  if (input.value.trim() === "") return;
  tasks.push({ text: input.value.trim(), done: false });
  input.value = "";
  save();
  render();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

render();
