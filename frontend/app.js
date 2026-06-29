const API_URL = 'http://localhost:5500/todos';

window.onload = function () {
    loadTasks();
};

function loadTasks() {

    fetch(API_URL)
        .then(res => res.json())
        .then(tasks => {

            const list = document.getElementById('taskList');

            list.innerHTML = '';

            tasks.forEach(task => {

                const li = document.createElement('li');

                li.textContent = task.task;

                list.appendChild(li);

            });

        });

}

function addTask() {

    const input = document.getElementById('taskInput');

    const task = input.value.trim();

    if(task === ''){

        alert('Please enter a task.');

        return;

    }

    fetch(API_URL,{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({
            task:task
        })

    })

    .then(res=>res.json())

    .then(data=>{

        const list=document.getElementById('taskList');

        list.innerHTML='';

        data.forEach(task=>{

            const li=document.createElement('li');

            li.textContent=task.task;

            list.appendChild(li);

        });

        input.value='';

    });

}