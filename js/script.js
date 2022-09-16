function getComputerChoice(min=1, max=3){
    if (Math.floor(Math.random() * (max - min + 1) + min)===1){
        return "Rock";
    }else if(Math.floor(Math.random() * (max - min + 1) + min)===2){
        return "Paper";
    }else 
        return "Scissors";
}
