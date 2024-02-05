let headCounter = 0;
const filter = document.querySelector('.filter');

const showFilter = () => {
	if(headCounter % 2 != 0) {
		filter.style.display = 'none'
	} else {
			filter.style.display = 'block'
	}

}

// 
const task1 = document.querySelector('.game1')
const task2 = document.querySelector('.game2');
const task3 = document.querySelector('.game3');
const task4 = document.querySelector('.calculator');
const task5 = document.querySelector('.calculator-time');
const task6 = document.querySelector('.dino-game');
const task7 = document.querySelector('.football');
const task8 = document.querySelector('.highest-number');
const task9 = document.querySelector('.team');
const task10 = document.querySelector('.scientists');

let line = document.querySelectorAll('.line')


const numberFilter = () => {
	task3.style.display = 'none'
	task6.style.display = 'none'
	task7.style.display = 'none'
	task9.style.display = 'none'
	task10.style.display = 'none'

	task1.style.display = 'flex';
	task2.style.display = 'flex';
	task4.style.display = 'inline';
	task5.style.display = 'inline';
	task8.style.display = 'flex';

	line[3].style.display = 'none'
	line[6].style.display = 'none';
	line[7].style.display = 'none';
	line[9].style.display = 'none';

	line[0].style.display = 'inline';
	line[1].style.display = 'inline';
	line[2].style.display = 'inline';
	line[4].style.display = 'inline';
	line[5].style.display = 'inline';
	line[8].style.display = 'inline';


}

const gameFilter = () => {
	task1.style.display = 'none';
	task2.style.display = 'none';
	task4.style.display = 'none';
	task5.style.display = 'none';
	task8.style.display = 'none';
	task9.style.display = 'none';

	task3.style.display = 'flex';
	task6.style.display = 'flex';
	task7.style.display = 'inline';
	task10.style.display = 'inline';

	line[1].style.display = 'none';
	line[2].style.display = 'none';
	line[3].style.display = 'none';
	line[4].style.display = 'none';
	line[7].style.display = 'none';
	line[8].style.display = 'none';

	line[0].style.display = 'inline';
	line[5].style.display = 'inline';
	line[6].style.display = 'inline';
	line[9].style.display = 'inline';
}

const helloFilter = () => {
	task1.style.display = 'none';
	task2.style.display = 'none';
	task3.style.display = 'none';
	task4.style.display = 'none';
	task5.style.display = 'none';
	task6.style.display = 'none';
	task7.style.display = 'none';
	task8.style.display = 'none';

	task9.style.display = 'inline'
	task10.style.display = 'inline'

	line[1].style.display = 'none';
	line[2].style.display = 'none';
	line[3].style.display = 'none';
	line[4].style.display = 'none';
	line[5].style.display = 'none';
	line[6].style.display = 'none';
	line[7].style.display = 'none';
	line[8].style.display = 'none';

	line[0].style.display = 'inline';
	line[9].style.display = 'inline';
};