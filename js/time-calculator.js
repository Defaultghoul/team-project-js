const calculateTime = () => {
	const inputValue = parseInt(
		document.querySelector('.calculator-time-input').value
	);

	const days = Math.floor(inputValue / 86400); // 1 день = 86400 секунд
	const hours = Math.floor((inputValue % 86400) / 3600);
	const minutes = Math.floor((inputValue % 3600) / 60);
	const seconds = inputValue % 60;

	const resultElement = document.querySelector('.time-result');
	resultElement.textContent = `${days} дн. ${formatTime(hours)}:${formatTime(
		minutes
	)}:${formatTime(seconds)}`;
};

const formatTime = time => {
	return time < 10 ? `0${time}` : time;
};
