function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    if(choice===1){
        return "rock";
    } else if(choice===2){
        return "paper";
    } else {
        return "scissor";
    }
}








function playRound(playerSelection,computerSelection){
    let pChoice = playerSelection.toLowerCase();
    if (playerSelection===computerSelection){
        return "It's a draw";
    } else if (pChoice==="rock" && computerSelection==="scissor"){
        return "You won! Rock broke Scissor";
    } else if (pChoice==="rock" && computerSelection==="paper"){
        return "You lose! Paper wraps Rock";
    } else if (pChoice==="scissor" && computerSelection==="paper"){
        return "You won! Scissor cuts Paper";
    } else if (pChoice==="scissor" && computerSelection==="rock"){
        return "You lose! Rock broke Scissor";
    } else if (pChoice==="paper" && computerSelection==="rock"){
        return "You won! Paper wraps Rock";
    } else if (pChoice==="paper" && computerSelection==="scissor"){
        return "You lose! Scissor cuts Paper";
    }
}

function game(){
    let playerSelection = prompt("Enter your choice: ");
    let computerSelection = getComputerChoice();
    console.log(playerSelection,computerSelection)
    return playRound(playerSelection,computerSelection);
}

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
