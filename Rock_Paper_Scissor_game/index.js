const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
//psd=playerScoreDisplay
const psd=document.getElementById("playerScoreDisplay");
//csd=computerScoreDisplay
const csd=document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice){

    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerchoice===computerchoice){
        result="IT'S A TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice==="scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result=(computerchoice==="rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result=(computerchoice==="paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerchoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerchoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("wintext","losetext");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("wintext");
            playerScore++;
            psd.textContent=playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("losetext");
            computerScore++;
            csd.textContent=computerScore;
            break;
    }

}