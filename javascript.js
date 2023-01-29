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

function getUserChoice(userChoice){
    userChoice = prompt("Type Rock, Paper, or Scissors: ");
    let userChoiceCorrect = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    console.log(userChoiceCorrect);
    return userChoiceCorrect;
}

function getResult(compChoice, userChoice, compScore, userScore){
    if (compChoice == userChoice){
        console.log("Draw!");
        return 0;
    } else if ((compChoice == "Rock" && userChoice == "Paper") || 
    (compChoice == "Paper" && userChoice == "Scissors") || 
    (compChoice == "Scissors" && userChoice == "Rock")){
        console.log("You Win!");
        return 1;
    } else if (compChoice != userChoice){
        console.log("You Lose!");
        return 2;
    }
    
}

function playGame(){
    let compScore = 0;
    let userScore = 0;
    let result = 0;
    for (let i = 1; i <= 5; i++){
        console.log("Round " + i + ": ")
        let compChoice = getComputerChoice();
        let userChoice = getUserChoice();
        result = getResult(compChoice, userChoice, compScore, userScore);
        if (result == 1)
        {
            userScore++
        } else if (result == 2){
            compScore++;
        }
        console.log("Computer Score: " + compScore);
        console.log("Your Score: " + userScore);
    }
}

playGame();