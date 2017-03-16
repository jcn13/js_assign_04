function add () {
    let item = {name: document.getElementById('addTodoItem').value, value:0}
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
            if(list[i].value === 1 ){
            html += '<li class="checked" id="' + i + '">' + list[i].name + '<button class="delete" id="' + i + '"><span>Delete</span></button></li>'
        }
        else{
            html += '<li id="' + i + '">' + list[i].name + '<button class="delete" id="' + i + '"><span>Delete</span></button></li>' 
        }
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
            let id = ev.target.getAttribute('id')            
            if (ev.target.getAttribute('class') === 'checked'){
                let list = JSON.parse(localStorage.getItem('list')) 
                list[id].value = 1
                localStorage.setItem('list', JSON.stringify(list))
            }
            else{
                let list = JSON.parse(localStorage.getItem('list'))
                list[id].value = 0 
                localStorage.setItem('list', JSON.stringify(list))
            }
  		}
	}, false)

document.getElementById('addTodo').addEventListener('click', add)
show()
