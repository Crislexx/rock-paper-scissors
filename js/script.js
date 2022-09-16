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
        return `You both chose ${playerSelection}! it's a tie`;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! paper beats rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! rock beats scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! paper beats rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! scissors beats paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! rock beats scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! scissors beats paper";
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let oneRound;
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please write your selection between: Rock, Paper and Scissors").toLocaleLowerCase();
        computerSelection = getComputerChoice();
        oneRound = singleRound(playerSelection, computerSelection);
        if(oneRound.slice(4,5) == "w"){
            playerWinCounter++;
            console.log(oneRound);
        }else if(oneRound.slice(4,5) == "l"){
            computerWinCounter++;
            console.log(oneRound);
        }else if(oneRound.slice(4,5) == "b"){
            tie++;
            console.log(oneRound);
        }
     }
     if (playerWinCounter > computerWinCounter){
        console.log("\nYou won the game!");
     }else if(playerWinCounter < computerWinCounter){
        console.log("\nYou lost the game!");
     }else if(playerWinCounter == computerWinCounter){
        console.log("\nThe game ended with a tie!");
     }
     console.log(`\nyou won ${playerWinCounter} times\nthe computer won ${computerWinCounter} times\nand there were ${tie} ties`);
}

game();
