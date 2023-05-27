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




let p=0;
let c=0;
let count = 0;


function playRound(playerSelection,computerSelection){
    let pChoice = playerSelection.toLowerCase();
    let t = document.querySelector(".text")
    
    if (playerSelection===computerSelection){
        t.textContent = `It's a draw, Player Score: ${p}, Computer Score: ${c}`;
    } else if (pChoice==="rock" && computerSelection==="scissor"){
        p++;
        t.textContent = `You won! Rock broke Scissor, Player Score: ${p}, Computer Score: ${c}`;
    } else if (pChoice==="rock" && computerSelection==="paper"){
        c++;
        t.textContent = `You lose! Paper wraps Rock, Player Score: ${p}, Computer Score: ${c}` ;
    } else if (pChoice==="scissor" && computerSelection==="paper"){
        p++;
        t.textContent = `You won! Scissor cuts Paper, Player Score: ${p}, Computer Score: ${c}`;
    } else if (pChoice==="scissor" && computerSelection==="rock"){
        c++;
        t.textContent = `You lose! Rock broke Scissor, Player Score: ${p}, Computer Score: ${c}`;
    } else if (pChoice==="paper" && computerSelection==="rock"){
        p++;
        t.textContent = `You won! Paper wraps Rock, Player Score: ${p}, Computer Score: ${c}`;
    } else if (pChoice==="paper" && computerSelection==="scissor"){
        c++;
        t.textContent = `You lose! Scissor cuts Paper, Player Score: ${p}, Computer Score: ${c}`; 
    }
    if(p===5 || c===5){
        if(p===5){
            t.textContent = `Game Over! Player won`;
        } 
        else if(c===5) {
            t.textContent = `Game Over! Computer won`;
        }
        return;
        }
}

function game(){
    let computerSelection = getComputerChoice();
    console.log(playerSelection,computerSelection)
    return playRound(playerSelection,computerSelection);
}

const btns = document.querySelectorAll("button");

count=0;

btns.forEach(btn=>btn.addEventListener("click",function(e){
    console.log(playRound(e.target.className,getComputerChoice()));
    
}));

const body = document.querySelector("body");

const div = document.createElement("div");
body.insertBefore(div,body.children[3])
console.log(body.children[3]);
const h1 = document.createElement("h1");
h1.classList.add("text");
div.appendChild(h1);
let new_btn = document.createElement("button");
new_btn.classList.add("replay")
new_btn.textContent = "Play Again"
body.insertBefore(new_btn,body.children[3])
new_btn.addEventListener("click",function(){
location.reload();
})


// console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
// console.log(game());
