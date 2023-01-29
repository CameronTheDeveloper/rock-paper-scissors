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

/*
function getUserChoice(){
    let userChoice = null;
}
*/

function playGame(compChoice, userChoice){
    //console.log(userChoice, compChoice);
    let compScore = 0;
    let userScore = 0;
   
    if (compChoice == userChoice){
        return "Draw!"
    }
}

for (let i = 0; i < 5; i++){
    let compChoice = getComputerChoice();
    let userChoice = prompt("Type Rock, Paper, or Scissors: ");
    playGame(compChoice, userChoice);
}

