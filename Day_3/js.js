let input = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")
let completedList = document.getElementById("CompletedList")

addBtn.onclick = function () {
  let text = input.value.trim()

  if (text === "") return

  let li = document.createElement("li")
  li.innerText = text

  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "X"

  deleteBtn.onclick = function () {
    li.remove()
  }

  let doneBtn = document.createElement("button")
  doneBtn.innerText = "Done"

  doneBtn.onclick = function () {
    completedList.appendChild(li)
    li.appendChild(undoneBtn)
    doneBtn.remove()
  }

  let undoneBtn = document.createElement("button")
  undoneBtn.innerText = "Undo"

  undoneBtn.onclick = function () {
    taskList.appendChild(li)
    li.appendChild(doneBtn)
    undoneBtn.remove()
  }


  li.appendChild(deleteBtn)
  li.appendChild(doneBtn)

  taskList.appendChild(li)

  input.value = ""
}