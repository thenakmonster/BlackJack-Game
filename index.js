let firstCard = 6
let secondCard = 4
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""


let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

 
function startGame() {
    cardsEl.textContent =  "Cards: " + firstCard + ", " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum < 20) {
        message = "Do you want a new card?"
    } else if (sum === 20) {
        message = "You have BlackJack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let newCard = 5
    sum += newCard
    startGame()
}