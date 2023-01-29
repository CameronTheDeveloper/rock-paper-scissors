function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0){
        return "Rock";
    } else if (compChoice == 1){
        return "Paper";
    } else if (compChoice == 2){
        return "Scissors";
    } else{
        return "Error!";
    }
    
}

function playGame(compChoice, userChoice){
    let compScore = 0;
    let userScore = 0;
    
    if (compChoice == userChoice){
        return console.log("Draw!");
    } else if ((compChoice == "Rock" && userChoice == "Paper") || 
    (compChoice == "Paper" && userChoice == "Scissors") || 
    (compChoice == "Scissors" && userChoice == "Rock")){
        console.log("You Win!");
    } else if (compChoice != userChoice){
        console.log("You Lose!");
    }
}

for (let i = 1; i <= 5; i++){
    console.log("Round " + i)
    let compChoice = getComputerChoice();
    let userChoice = prompt("Type Rock, Paper, or Scissors: ");
    playGame(compChoice, userChoice);
}

