document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task');
  const addTaskBtn = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');
  const progressBar = document.getElementById('progressBar');
  const themeToggle = document.getElementById('themeToggle');
  const badgeArea = document.getElementById('badgeArea');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const updateProgressBar = () => {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    const progress = total ? (completed / total) * 100 : 0;
    progressBar.style.width = progress + '%';

    updateBadge(completed);
  };

  const updateBadge = (completed) => {
    badgeArea.style.visibility = 'hidden';

    if (completed >= 20) badgeArea.textContent = '🏵️ God of Stories';
    else if (completed >= 15) badgeArea.textContent = '🎖️ Master of the Timeline';
    else if (completed >= 10) badgeArea.textContent = '🌟 Time Keeper';
    else if (completed >= 5) badgeArea.textContent = '⭐ Temporal Aura Maintainer';
    else return;

    badgeArea.style.visibility = 'visible';
  };

  const addTaskToDOM = (task) => {
    const taskItem = document.createElement('li');
    taskItem.className = `task ${task.completed ? 'completed' : ''}`;
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">✖</button>
    `;
    taskList.appendChild(taskItem);

    taskItem.querySelector('.completeBtn').addEventListener('click', () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    taskItem.querySelector('.deleteBtn').addEventListener('click', () => {
      tasks = tasks.filter(t => t !== task);
      saveTasks();
      renderTasks();
    });
  };

  const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach(addTaskToDOM);
    updateProgressBar();
  };

  addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (!text) return alert('Task cannot be empty!');

    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();

    taskInput.value = '';
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';
  });

  renderTasks();
});
