const form = document.querySelector('.form')
const inputForm = form.querySelector('.form__input')
const buttonForm = form.querySelector('.form__button')
const list = document.querySelector('.list')
form.addEventListener('submit', (e) => {
	e.preventDefault()
})
buttonForm.addEventListener('click', addTask)
list.addEventListener('click', itemManipulations)

function addTask() {
	const inputValue = inputForm.value
	if (inputValue.trim() === '') {
		return
	}
	const newTask = markUp(inputValue)
	list.innerHTML += newTask
	inputForm.value = ''
}
function markUp(value) {
	return `<li class='item'>
            <p class='item__text'>
            		${value}
            </p>
            <div class='controls'>
                <input type='checkbox' class='check'>
                <button class='delete button'>Delete</button>
            </div>
        </li>
    `
}
function itemManipulations(e) {
	if (e.target.classList.contains('check')) {
		e.target.closest('.item').classList.toggle('item-completed')
	}
	if (e.target.classList.contains('delete')) {
		e.target.closest('.item').remove()
	}
}