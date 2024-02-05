const startWindow = document.querySelector('.modal-start')
const subscribeWindow = document.querySelector('.modal-subscribe')
const startClose = document.querySelector

// start window

document.addEventListener('DOMContentLoaded', () => { 
	startWindow.style.display = 'flex'
})

const closeStart = () => {
	startWindow.style.display = 'none'
}

const saveStart = () => {
	startWindow.style.display = 'none'

	document.querySelector('.theme p span').innerHTML = 	document.querySelector('.start-input').value
}



// subscribe

const closeSubscribe = () => [
	subscribeWindow.style.display = 'none'
]

const showSubscribe = () => {
	subscribeWindow.style.display = 'flex'
}