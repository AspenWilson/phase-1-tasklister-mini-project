document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.querySelector('form')
  taskList.addEventListener('submit', (e) => {
    e.preventDefault()
    addToList(e.target.new_task_description.value)
    taskList.reset()
  })
});

function addToList (task) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteButton)
  btn.textContent = 'Done!'
  p.textContent = `${task} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function deleteButton (e) {
  e.target.parentNode.remove()
}


//As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.