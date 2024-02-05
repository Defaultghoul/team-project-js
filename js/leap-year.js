let inputt = document.querySelector('.game1Input')
let submitt = document.querySelector('.game1Button')
let textt = document.querySelector('.game1Result')

submitt.addEventListener("click", () => {
    if(inputt.value % 4 == 0){
        textt.textContent = "Ви народилися у високосний рік"
				textt.style.color = 'green'
    }else{
        textt.textContent = "Ви не народилися у високосний рік"
				textt.style.color = 'red'
    }
})