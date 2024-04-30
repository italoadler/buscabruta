document.addEventListener('DOMContentLoaded', function() {
    
    let addBtn = document.getElementById('addBtn');
    let clearBtn = document.getElementById('clearBtn');
    let input = document.getElementById('task-box');
    let ul  = document.getElementById('task-list');

    addBtn.addEventListener('click', addTask);
    clearBtn.addEventListener('click', clearTask);
    
    function addTask() { 
        if(input.value === '') { 
            input.placeholder = 'Não há tarefa para adicionar!';
            input.style.border = '5px solid red';
            input.placeholder.style.color = 'red';
        } else { 
            let task = input.value;
            let item = document.createElement('li');
            let containerBtn = document.createElement('div');

            item.innerText = task;
            containerBtn.appendChild(createRemoveButton());
            containerBtn.appendChild(createEditButton())
            item.appendChild(containerBtn);
            ul.appendChild(item);
            input.value = '';
            input.style.border = '3px solid black';
        }
      
    }

    function clearTask() {
        ul.innerHTML = '';
    }
    function createRemoveButton() {
        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remover';
        removeBtn.addEventListener('click', removeTask);
        return removeBtn;
    }
    function createEditButton() {
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Editar';
        editBtn.addEventListener('click', editTask);
        return editBtn;
    }
   // tá quebrada, consertar!! 
    function editTask() { 
        let item = this.parentNode.parentNode;
        let task = item.firstChild;
        let newTask = document.createElement('input');
       
        newTask.type = 'text';
        newTask.value = task.toString();
  
        item.insertBefore(newTask, task);
        //item.removeChild(task);   
    }
    function removeTask() {
        let item = this.parentNode.parentNode;
        ul.removeChild(item);
    }
});