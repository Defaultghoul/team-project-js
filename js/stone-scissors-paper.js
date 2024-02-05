let rock = document.querySelector(".rock")
let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper")
let totalCompCount = document.querySelector(".game3CompCount")
let totalUserCount = document.querySelector(".game3UserCount")
let result = document.querySelector(".game3Result")
let revCompChoice = document.querySelector(".game3Button")
let compChoiceText = document.querySelector(".compChoiceText")
let compChoice 
let compCount = 0
let userCount = 0

rock.addEventListener("click", () => {
    compChoice = Math.round(Math.random() * (3 - 1) + 1)
    if(compChoice === 1){
        result.textContent = "Ви виграли раунд!"
				result.style.color = 'green'
        userCount += 1
        totalUserCount.textContent = `Ви - ${userCount}`
    }else{
        result.textContent = "Ви програли раунд!"
				result.style.color = 'red'
        compCount += 1
        totalCompCount.textContent = `Комп'ютер - ${compCount}`
    }
})

scissors.addEventListener("click", () => {
    compChoice = Math.round(Math.random() * (3 - 1) + 1);
    if(compChoice === 2){
        result.textContent = "Ви виграли раунд!";
				result.style.color = 'green'
        userCount += 1;
        totalUserCount.textContent = `Ви - ${userCount}`;
    }else{
        result.textContent = "Ви програли раунд!";
				result.style.color = 'red'
        compCount += 1;
        totalCompCount.textContent = `Комп'ютер - ${compCount}`;
    };
});

paper.addEventListener("click", () => {
    compChoice = Math.round(Math.random() * (3 - 1) + 1);
    if(compChoice === 3){
        result.textContent = "Ви виграли раунд!";
				result.style.color = 'green'
        userCount += 1;
        totalUserCount.textContent = `Ви - ${userCount}`;
    }else{
        result.textContent = "Ви програли раунд!";
				result.style.color = 'red'
        compCount += 1;
        totalCompCount.textContent = `Комп'ютер - ${compCount}`;
    };
});

revCompChoice.addEventListener("click", () => {
    if(compChoice === 1){
        compChoiceText.textContent = "Варіант комп'ютера: Камінь"
    }else if(compChoice === 2){
        compChoiceText.textContent = "Варіант комп'ютера: Ножиці"
    }else{
        compChoiceText.textContent = "Варіант комп'ютера: Папір"
    }
})