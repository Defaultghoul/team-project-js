let ball = document.querySelector('.football-ball');
let footballMain = document.querySelector('.football-main');

// const kick = () => {
// 	console.log(event.clientX, event.clientY)

// 	ball.style.left = `${event.clientX}px`
// 	ball.style.top = `${event.clientY}px`

// }

footballMain.addEventListener('click', event => {
	let newPositionLeft =
		event.clientX - footballMain.getBoundingClientRect().left;
	let newPositionTop = event.clientY - footballMain.getBoundingClientRect().top;

	ball.style.top = newPositionTop - 25 + 'px';
	ball.style.left = newPositionLeft - 25 + 'px';
});
