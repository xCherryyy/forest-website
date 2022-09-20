const cookiesBtn = document.querySelector('.cookies-accept')
const cookiesAlert = document.querySelector('.cookies-alert')

const setCookiesAlert = () => {
	localStorage.setItem('popupState', 'hide')
	cookiesAlert.style.display = 'none'
}

const closeCookiesAlert = () => {
	if (localStorage.getItem('popupState') === 'hide') {
		cookiesAlert.style.display = 'none'
	} else {
		cookiesAlert.style.display = 'block'
	}
}

cookiesBtn.addEventListener('click', setCookiesAlert)
window.addEventListener('load', closeCookiesAlert)
