document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.classList.add('task-item');

        // Create buttons for completing and removing tasks
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(removeButton);
        li.appendChild(taskButtons);
        taskList.appendChild(li);
    }
});
