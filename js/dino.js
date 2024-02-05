const dino = document.querySelector(".dino")
const content = document.querySelector(".game")
const start = document.querySelector(".start")
const div = document.createElement("div");
const ground = document.querySelector(".ground")

content.append(div)

start.addEventListener("click", () => {
  if (div.className == "cactus") {
    start.innerHTML = "Почати"
    div.className = ""
    dino.classList.remove("run")
    ground.classList.remove("ground-move")
  } else {
    start.innerHTML = "Зупинити"
    div.className = "cactus";
    dino.classList.add("run")
    ground.classList.add("ground-move")
  }
  var isAlive = setInterval(() => {
    var dino = document.querySelector(".dino");
    var cactus = document.querySelector(".cactus");
    
    var dinoLeft = dino.offsetLeft;
    var dinoRight = dinoLeft + dino.offsetWidth;
    var dinoTop = dino.offsetTop;
    var dinoBottom = dinoTop + dino.offsetHeight;
    
    var cactusLeft = cactus.offsetLeft;
    var cactusRight = cactusLeft + cactus.offsetWidth;
    var cactusTop = cactus.offsetTop;
    var cactusBottom = cactusTop + cactus.offsetHeight;
    
    if (
        cactusLeft < dinoRight &&
        cactusRight > dinoLeft &&
        cactusTop < dinoBottom &&
        cactusBottom > dinoTop
    ) {
        alert("Game Over");
    }
    }, 10);
})

content.addEventListener("click", () => {
  jump()
})

const jump = () => {
  if (dino.classList != "jump"){
      dino.classList.add("jump")
  }
  setTimeout(() => {
      dino.classList.remove("jump")
  }, 300);
}