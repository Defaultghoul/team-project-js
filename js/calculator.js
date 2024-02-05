const inputANode = document.querySelector('.inpA');
const inputBNode = document.querySelector('.inpB');
const buttonReturnResult = document.querySelector('.resultCalc');
const returnResult = document.querySelector('.returnResult');

let usedOperation = null;

buttonReturnResult.addEventListener('click', () => {
	const a = +inputANode.value;
	const b = +inputBNode.value;
	const result = calculate({ a: a, b: b, operation: usedOperation });
	returnResult.innerHTML = result;
});

const checkOperation = operation => {
	if (['+', '-', '*', '/'].includes(operation)) {
		usedOperation = operation;
	} else {
		alert('Незрозуміла операція');
	}
};

const calculate = ({ a, b, operation }) => {
	let result = null;

	if (!['+', '-', '*', '/'].includes(operation)) {
		alert('Незрозуміла операція');
		return;
	}

	switch (operation) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			if (a == 0 || b == 0) {
				alert('Ділення на нуль неможливе');
			} else {
				result = a / b;
			}
			break;
	}
	return result;
};
