let input = document.querySelector('.game2Input')
let submit = document.querySelector('.game2Button')
let text = document.querySelector('.game2Result')

submit.addEventListener("click", () => {
    let number = Math.round(Math.random() * (10 - 1) + 1)
    if(input.value == number){
        text.textContent = `Вітаю, ви вгадали число! ${number}`
				text.style.color = 'green'
    }else{
        text.textContent = `На жаль, ви не вгадали число! ${number}`
				text.style.color = 'red'
    }
})