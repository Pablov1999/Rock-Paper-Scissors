const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
} ))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else {computerChoice = 'scissors'}

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw"
    } else if (computerChoice == 'rock' && userChoice== 'scissors') {
        result = 'you lost'
    } else if(computerChoice == 'rock' && userChoice== 'paper'){
        result = 'you won'
    } else if (computerChoice == 'paper' && userChoice== 'scissors') {
        result = 'you won'
    } else if(computerChoice == 'paper' && userChoice== 'rock'){
        result = 'you lost'
    } else if (computerChoice == 'scissors' && userChoice== 'rock') {
        result = 'you won'
    } else if(computerChoice == 'scissors' && userChoice== 'paper'){
        result = 'you lost'
    }

    resultDisplay.innerHTML = result
}