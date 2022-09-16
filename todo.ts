const list = document.querySelector<HTMLUListElement>('#list')
const form = document.querySelector<HTMLFormElement>('#new-task-form')
const input = document.querySelector<HTMLInputElement>('#new-task-title')
const tasks: Task[] = []
type Task = {title: string, completed: boolean, createdAt: Date} // type of the task is defined here, used in addListItem function

form?.addEventListener('submit', e => { //the form can be HTMLFormElement of null, the ? means that we are checking if form exist then continue
    e.preventDefault() //prevents page refresh on submit button

    if (input?.value == '' || input?.value == null) return //if no input exist/empty stop the function

    const newTask: Task = {
        title: input.value,
        completed: true,
        createdAt: new Date()
    }
    tasks.push(newTask)
    addListItem(newTask)
    input.value = ''
})

function addListItem (task: Task) {
    const item = document.createElement('li')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.addEventListener('change', () => { //on checkbox check/uncheck set task completed/incompleted - true/false
        task.completed = checkbox.checked
    })
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed //checkbox checked by default
    label.append(checkbox, task.title) //can append multiple elements
    item.append(label)
    list?.append(item)
}