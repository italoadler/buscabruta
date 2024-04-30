let idNumber = 0;

function addTask(e) { 
    e.preventDefault();

    console.log('Adding task...');

    let content = document.querySelector('#task-input').value;  
    let task = document.createElement('li')
    task.id = `task-${idNumber}`;
    task.innerHTML = content; 
    task.appendChild(createRemoveButton(idNumber));
    let list = document.querySelector('#task-list');
    
    list.appendChild(task);

    idNumber++;
}

function clear() {
    let list = document.querySelector('#task-list');
    list.innerHTML = '';
}

function createRemoveButton(id) {
    let button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.onclick = function() {
        removeTask(id);
    };
    return button;
}

export default function removeTask(id) {
    let task = document.querySelector(`#task-${id}`);
    if (task) {
        task.parentNode.removeChild(task);
    } else {
        console.error(`Task with id ${id} not found.`);
    }
}