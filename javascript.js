let compScore = 0;
let userScore = 0;
let round = 1;

const optBtn = document.querySelectorAll('button');
function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0){
        return "rock";
    } else if (compChoice == 1){
        return "paper";
    } else if (compChoice == 2){
        return "scissors";
    } else{
        return "Error!";
    }
}

function getResult(compChoice, userChoice, compScore, userScore){
    if (compChoice == userChoice){
        console.log("Draw!");
        return 0;
    } else if ((compChoice == "rock" && userChoice == "paper") || 
    (compChoice == "paper" && userChoice == "scissors") || 
    (compChoice == "scissors" && userChoice == "rock")){
        console.log("You Win!");
        return 1;
    } else if (compChoice != userChoice){
        console.log("You Lose!");
        return 2;
    }
}

function playRound(userChoice){
    //console.log("Round " + i + ": ")
    let compChoice = getComputerChoice();
    
    let result = getResult(compChoice, userChoice, compScore, userScore);
    if (result == 1)
    {
        userScore++
    } else if (result == 2){
        compScore++;
    }
    console.log("\nRound: " + round);
    console.log("User: " + userChoice);
    console.log("Computer: " + compChoice);
    console.log("Your Score: " + userScore);
    console.log("Computer Score: " + compScore);
    round++;
}


optBtn.forEach((button) => {                
    button.addEventListener('click', () => {
        playRound(button.id);       //button.id = rock paper, or scissors
    });
});