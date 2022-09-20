const footerYear = document.querySelector('.footer__year')
const burgerBtn = document.querySelector('.nav__hamburger-box')
const navItemsBox = document.querySelector('.nav__items')
const navItem = document.querySelectorAll('.nav__item')
const scrollSection = document.querySelectorAll('.scroll')

const setCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

const handleNavBtn = () => {
	burgerBtn.classList.toggle('nav__hamburger-box--active')

	if (burgerBtn.classList.contains('nav__hamburger-box--active')) {
		setTimeout(() => {
			navItemsBox.classList.add('nav__items--active')
		}, 0)
		navItemsBox.classList.add('display-flex')
	} else {
		navItemsBox.classList.remove('nav__items--active')
		setTimeout(() => {
			navItemsBox.classList.remove('display-flex')
		}, 300)
	}
}

const closeNav = () => {
	burgerBtn.classList.remove('nav__hamburger-box--active')
	navItemsBox.classList.remove('nav__items--active')
	setTimeout(() => {
		navItemsBox.classList.remove('display-flex')
	}, 300)
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

burgerBtn.addEventListener('click', handleNavBtn)
setCurrentYear()
window.addEventListener('scroll', checkScrollPosition)
checkScrollPosition()
navItem.forEach(item => item.addEventListener('click', closeNav))
