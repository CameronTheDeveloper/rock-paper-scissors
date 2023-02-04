let compScore = 0;
let userScore = 0;
let round = 1;

const roundContent = document.querySelector("#round");
roundContent.textContent = "Round: " + round;
const comp_score = document.querySelector("#computer-score");
comp_score.textContent = "Computer score: " + compScore;
const user_score = document.querySelector("#user-score");
user_score.textContent = "Your score: " + userScore;
const result = document.querySelector("#winner");

const optBtn = document.querySelectorAll('button');
const user_choice = document.querySelector('#userChoice');
user_choice.textContent = "You: "
const comp_choice = document.querySelector('#compChoice');
comp_choice.textContent = "Computer: "
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
        result.textContent = "Draw!";
        return 0;
    } else if ((compChoice == "rock" && userChoice == "paper") || 
    (compChoice == "paper" && userChoice == "scissors") || 
    (compChoice == "scissors" && userChoice == "rock")){
        result.textContent = "You Win!";
        return 1;
    } else if (compChoice != userChoice){
        result.textContent = "You Lose!";
        return 2;
    }
}

function playRound(userChoice){
    let compChoice = getComputerChoice();
    
    let result = getResult(compChoice, userChoice, compScore, userScore);
    if (result == 1)            //User Wins
    {
        userScore++
    } else if (result == 2){    //User loses
        compScore++;
    }
    round++;
    roundContent.textContent = "Round: " + round;
    comp_score.textContent = "Computer score: " + compScore;
    user_score.textContent = "Your score: " + userScore;
    comp_choice.textContent = "Computer: " + compChoice;
    user_choice.textContent = "You: " + userChoice;
}

//results.textContent = "Round: " + round;
optBtn.forEach((button) => {                
    button.addEventListener('click', () => {
        playRound(button.id);       //button.id = rock paper, or scissors
    });
});