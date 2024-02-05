const inputs = [
	document.querySelector('.first-input'),
	document.querySelector('.second-input'),
	document.querySelector('.last-input'),
];
const results = document.querySelector('.highest-number').querySelector('h4');

const Count = () => {
	let highestNumber = 0;

	for (let i = 0; i < inputs.length; i++) {
		if (+inputs[i].value > highestNumber) {
			highestNumber = +inputs[i].value;
		}
	}

	results.innerHTML = `Найбільше число, яке ви ввели - ${highestNumber}`;
};
