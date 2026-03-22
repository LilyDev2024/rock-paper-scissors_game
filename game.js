let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    valueFrom0To1 = Math.random()
    if (valueFrom0To1 <= 0.3){
        console.log("Computer choice is: rock");
        return "rock";
    } else if (valueFrom0To1 > 0.3 && valueFrom0To1 <= 0.6){
        console.log("Computer choice is: paper");
        return "paper"
    } else {
        console.log("Computer choice is: scissors");
        return "scissors"
    }
}

function getHumanChoice(){
    userChoice = prompt("Enter rock, paper or scissors");
    console.log("Your choice is: ", userChoice);
    return userChoice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == humanChoice){
        console.log("You tied!");
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);        
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        computerScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);   
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        humanScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        computerScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);   
    }
    console.log("Score computer/user is: ", computerScore, "/", humanScore);
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();