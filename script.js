function getcomputerchoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomindex = Math.floor(Math.random() * choices.length);

    return choices[randomindex];
}



function playgame(playerselection, computerselection) {

    if (playerselection === computerselection) {
        return "it's a tie!";
    } else if (
        (playerselection === "rock" && computerselection === "scissors") ||
        (playerselection === "paper" && computerselection === "rock") ||
        (playerselection === "scissors" && computerselection === "paper")
    ) {
        playerscore = playerscore + 1;
        return "player wins";

    } else {
        computerscore = computerscore + 1;
        return "computer wins";

    }
}

let playerscore = 0;
let computerscore = 0;


for (i = 0; playerscore < 5 && computerscore < 5; i++) {
    const userinput = prompt("Please pick rock, paper, or scissors").toLowerCase();
    const computerchoice = getcomputerchoice();

    console.log("Players choice:" + userinput);
    console.log("Computers choice:" + computerchoice);
    console.log("Result:" + playgame(userinput, computerchoice));
    console.log("player score: " + playerscore);
    console.log("computer score: " + computerscore);

    if (playerscore === 5) {
        console.log("Player wins the game!");
        break; // Exit the loop
    } else if (computerscore === 5) {
        console.log("Computer wins the game!");
        break; // Exit the loop
    }
}   
