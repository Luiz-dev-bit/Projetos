document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-task">Delete</button>
    `;

    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById('new-task').value = '';


    taskItem.querySelector('.delete-task').addEventListener('click', function() {
        taskItem.remove()
    });    
});