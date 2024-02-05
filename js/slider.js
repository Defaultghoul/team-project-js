const teamList = document.querySelector('.team-list-main');

const Svyatoslav = document.querySelector('.Svyatoslav');
const Anton = document.querySelector('.Anton');
const Taras = document.querySelector('.Taras');

const next = document.querySelector('.team-arrowRight');
const prev = document.querySelector('.team-arrowLeft');

const dot = document.querySelectorAll('.dot');

let count = -320;

const plusSlide = () => {
	if (count == -885) {
		next.style.opacity = '40%';
		return;
	}

	prev.style.opacity = '100%';

	count += -565;
	teamList.style.left = count + 'px';

	if (count == -885) {
		dot[2].style.backgroundColor = '#797979';
		dot[2].style.width = '30px';
		
		dot[1].style.width = '18px';
		dot[1].style.backgroundColor = '#d9d9d9';
		dot[0].style = 'none';
	}

	if (count == -320) {
		dot[1].style.backgroundColor = '#797979';
		dot[1].style.width = '30px';

		dot[2].style = 'none';
		dot[0].style = 'none';
	}
};

const subtrackSlide = () => {
	if (count == 245) {
		prev.style.opacity = '40%';
		return;
	}

	next.style.opacity = '100%';

	count += 565;
	teamList.style.left = count + 'px';

	if (count == 245) {
		dot[0].style.backgroundColor = '#797979';
		dot[0].style.width = '30px';

		dot[1].style.backgroundColor = '#d9d9d9';
		dot[1].style.width = '18px';
		dot[2].style = 'none';
	}

	if (count == -320) {
		dot[1].style.backgroundColor = '#797979';
		dot[1].style.width = '30px';

		dot[2].style = 'none';
		dot[0].style = 'none';
	}
};
