console.log("Hello World")


function getComputerChoice(){
    valueFrom0To1 = Math.random()
    console.log(valueFrom0To1)
    if (valueFrom0To1 <= 0.3){
        return "rock"
    } else if (valueFrom0To1 > 0.3 && valueFrom0To1 <= 0.6){
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice());


function getHumanChoice(){
    userCoice = prompt("Enter rock, paper or scissors");
    console.log(userCoice);
}

getHumanChoice();