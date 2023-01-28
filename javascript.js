function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

/*
function getUserChoice(){
    let userChoice = null;
}
*/

function playGame(compChoice, userChoice){
    //console.log(userChoice, compChoice);
    if (compChoice == userChoice){
        return "Draw!"
    }
}


const userChoice = 2
const compChoice = getComputerChoice();
playGame(userChoice, compChoice);
