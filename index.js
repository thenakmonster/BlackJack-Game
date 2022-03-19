let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""

let player = {
    name: "Jalil",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById("message-el")

 let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let getRandomNumber = Math.floor(Math.random() * 13) + 1
    return getRandomNumber
}
 
function startGame() {
    cardsEl.textContent =  "Cards: "
    for(let i = 0; i < cards.length; i++)
    cardsEl.textContent += cards[i] + " "
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
    if(isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        startGame()
}  
}