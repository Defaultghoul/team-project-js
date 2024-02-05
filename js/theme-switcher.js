let themeCounter = 0

const switchTheme = () => {
	// Темна тема
	if(themeCounter % 2 != 0) {
		document.body.setAttribute('dark', '')
	}

	// Світла тема
		if(themeCounter % 2 == 0) {
		document.body.removeAttribute('dark')
	}
}