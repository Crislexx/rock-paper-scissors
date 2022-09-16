function getComputerChoice(min=1, max=3){
    if (Math.floor(Math.random() * (max - min + 1) + min)===1){
        return "rock";
    }else if(Math.floor(Math.random() * (max - min + 1) + min)===2){
        return "paper";
    }else 
        return "scissors";
}

function singleRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return`You both chose ${playerSelection}! it's a tie!`;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return"You lose! paper beats rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return"You win! rock beats scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return"You win! paper beats rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return"You lose! scissors beats paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return"You lose! rock beats scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return"You win! scissors beats paper";
    }
        
}

const playerSelection = prompt("Please write your selection between: Rock, Paper and Scissors").toLocaleLowerCase();
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));