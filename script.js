const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const Todo = {
  addUnCheckCount:function(){
    let countNum = Number(uncheckedCountSpan.textContent)
    countNum++
    uncheckedCountSpan.textContent = countNum
  },
  removeUnCheckCount:function(){
    let countNum = Number(uncheckedCountSpan.textContent)
    countNum--
    uncheckedCountSpan.textContent = countNum
  },
  addItemCount:function(){
    let countNum = Number(itemCountSpan.textContent)
    countNum++
    itemCountSpan.textContent = countNum
  },
  removeItemCount:function(){
    let countNum = Number(itemCountSpan.textContent)
    countNum--
    itemCountSpan.textContent = countNum
  },
  createTodolist:function(text){
    let item = document.createElement('li')
    item.setAttribute('class',classNames.TODO_ITEM)
    let checkbox = document.createElement('input')
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("class",classNames.TODO_CHECKBOX)
    checkbox.addEventListener("click",this.checkClickEvent)
    let button = document.createElement('button')
    button.setAttribute("type",'button')
    button.setAttribute("class",classNames.TODO_DELETE)
    button.addEventListener("click",this.deleteClickEvent)
    button.append('x')
    item.append(checkbox)
    item.append(text)
    item.append(button)
    list.append(item)
    this.addItemCount()
    this.addUnCheckCount()
  },
  checkClickEvent:function(){
    if(this.checked){
      Todo.removeUnCheckCount()
    }
    else{
      Todo.addUnCheckCount()
    }
  },
  deleteClickEvent:function(){
    let todoItem = this.parentNode
    let todolist = todoItem.parentNode
    let checkbox = todoItem.firstChild
    if (!checkbox.checked){
      Todo.removeUnCheckCount()
    }
    Todo.removeItemCount()
    todolist.removeChild(todoItem)
  },

}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let todolists = document.getElementsByClassName(classNames.TODO_CHECKBOX)

function newTodo() {
  let todotext = prompt("Please enter todo")

  if(todotext.trim()!=""){
    Todo.createTodolist(todotext)
  }
}






