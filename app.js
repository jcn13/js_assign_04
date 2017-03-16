function add () {
    let item = document.getElementById('addTodoItem').value
    addTodoItem = JSON.parse(localStorage.getItem('list'))
    if (addTodoItem === null){
        addTodoItem = []
    }
    addTodoItem.push(item)    
    localStorage.setItem('list', JSON.stringify(addTodoItem)) 
    show() 
    return false
}
 
function remove () {
    let id = this.getAttribute('id') 
    addTodoItem = JSON.parse(localStorage.getItem('list'))   
    addTodoItem.splice(id, 1)
    localStorage.setItem('list', JSON.stringify(addTodoItem))
    show() 
    return false
}
 
function show () {    
    let list = JSON.parse(localStorage.getItem('list')) 
    if (list !== null){
        let html =''
        for(let i=0; i<list.length; i++) {
            html += '<li>' + list[i] + '<button class="delete" id="' + i + '"><span>Delete</span></button></li>'
        }
        document.getElementById('todoList').innerHTML = html 
        let buttons = document.getElementsByClassName('delete')
        for (let i=0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', remove)
        }
    }
    else {return false}     
}

let lists = document.querySelector('ol')
	lists.addEventListener('click', function(ev) {
  		if (ev.target.tagName === 'LI') {
    		ev.target.classList.toggle('checked')
  		}
	}, false)

document.getElementById('addTodo').addEventListener('click', add)
show()
