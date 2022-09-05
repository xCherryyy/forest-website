const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.nav__hamburger-box')
const closeNavBtn = document.querySelector('.nav__close')
const navItems = document.querySelector('.nav__items')
const navItem = document.querySelectorAll('.nav__item')
const scrollSection = document.querySelectorAll('.scroll')
const cookiesBtn = document.querySelector('.cookies-accept')
const cookiesAlert = document.querySelector('.cookies-alert')

const setCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

const openNav = () => {
	burgerBtn.style.display = 'none'
	navItems.style.display = 'flex'
	closeNavBtn.style.display = 'block'
	nav.classList.add('nav__active')
	navItem.forEach(item => item.classList.add('nav__item--active'))
}

const closeNav = () => {
	burgerBtn.style.display = 'block'
	navItems.style.display = 'none'
	closeNavBtn.style.display = 'none'
	nav.classList.remove('nav--active')
	navItem.forEach(item => item.classList.remove('nav__item--active'))
}

const checkScrollPosition = () => {
	scrollSection.forEach(section => {
		const topScroll = window.scrollY
		const distance = section.offsetTop - 150
		const height = section.offsetHeight
		const id = section.getAttribute('id')
		const highlightedNavItem = document.getElementById(`nav__${id}`)
		if (topScroll >= distance && distance + height > topScroll) {
			highlightedNavItem.classList.add('nav__item--scroll')
		} else {
			highlightedNavItem.classList.remove('nav__item--scroll')
		}
	})
}

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

burgerBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)
navItem.forEach(item => item.addEventListener('click', closeNav))
setCurrentYear()
window.addEventListener('scroll', checkScrollPosition)
checkScrollPosition()
