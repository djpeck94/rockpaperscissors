let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Enter Choice");
  console.log(userInput);
  return userInput;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  alert("Final Score:" + humanScore + " - " + computerScore);
  resetScore();
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("its a draw!");
    return;
  }

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("you lose");
      computerScore++;
    }
  }
  if (computerChoice == "scissors") {
    console.log("you win!");
    humanScore++;
  }
}
if (humanChoice == "paper") {
  if (computerChoice == "scissors") {
    console.log("you lose");
    computerScore++;
  }

  if (computerChoice == "rock") {
    console.log("you win!");
    humanScore++;
  }
}
if (humanChoice == "scissors") {
  if (computerChoice == "rock") {
    console.log("you lose");
    computerScore++;
  }

  if (computerChoice == "paper") {
    console.log("you win!");
    humanScore++;
  }
}
