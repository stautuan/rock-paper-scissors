function getComputerChoice() {
  let answer = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    if (answer === 0) {
      return "Rock";
    } else if (answer === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
}
getComputerChoice();

function playGame() {
  for (let i = 0; i < 5; i++) {
    const answer = prompt(`Let's play "Rock, Paper, Scissors"!`);
    const playerSelection =
      answer[0].toUpperCase() + answer.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie! 😌";
      } else if (
        playerSelection === "Rock" &&
        computerSelection === "Scissors"
      ) {
        return "You win! 🥳 Rock beat Scissors!";
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! 🥳 Paper beats Rock!";
      } else if (
        playerSelection === "Scissors" &&
        computerSelection === "Paper"
      ) {
        return "You win! 🥳 Scissors beats Paper!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! 👎 Paper beats Rock!";
      } else if (
        playerSelection === "Paper" &&
        computerSelection === "Scissors"
      ) {
        return "You lose! 👎 Scissors beats Paper!";
      } else if (
        playerSelection === "Scissors" &&
        computerSelection === "Rock"
      ) {
        return "You lose! 👎 Rock beats Scissors!";
      } else {
        return "Invalid input! ⛔️";
      }
    }
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
  }
}
playGame();
