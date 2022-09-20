const contactInput = document.querySelectorAll('.contact__input')
const contactTextarea = document.querySelector('.contact__textarea')
const sendFormBtn = document.querySelector('.contact__send-btn')
const contactError = document.querySelector('.contact__error')
const contactBox = document.querySelectorAll('.contact__box')

const addInputStyles = () => {
	contactBox.forEach(box => {
		if (box.children[0].value) {
			box.children[0].classList.add('form-active')
			box.children[1].classList.add('form-active')
		} else {
			box.children[0].classList.remove('form-active')
			box.children[1].classList.remove('form-active')
		}
	})
	if (contactTextarea.value) {
		contactTextarea.nextElementSibling.classList.add('form-active')
	} else {
		contactTextarea.nextElementSibling.classList.remove('form-active')
	}
}

const checkEmptyInputs = e => {
	contactInput.forEach(input => {
		if (!input.value || !contactTextarea.value) {
			e.preventDefault()
			contactError.style.visibility = 'visible'
		} else {
			contactError.style.visibility = 'hidden'
		}
	})
}

contactBox.forEach(box => {
	box.firstElementChild.addEventListener('input', addInputStyles)
})
sendFormBtn.addEventListener('click', checkEmptyInputs)
