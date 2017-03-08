function get_todos() {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    let addTodoItem = document.getElementById('addTodoItem').value;
 
    let todos = get_todos();
    todos.push(addTodoItem);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    let todos = get_todos();
 
    let html =''
    for(let i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="delete" id="' + i  + '"><span>Delete</span></button></li>';
    };
    
 
    document.getElementById('todoList').innerHTML = html;
 
    let buttons = document.getElementsByClassName('delete');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}

let list = document.querySelector('ol');
	list.addEventListener('click', function(ev) {
  		if (ev.target.tagName === 'LI') {
    		ev.target.classList.toggle('checked');
  		}
	}, false);


document.getElementById('addTodo').addEventListener('click', add);
show();