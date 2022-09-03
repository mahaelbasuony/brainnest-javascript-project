let dataObj = {
  round: 0,
  computerRate: 0,
  userRate: 0,
  computer: [],
  user: [],
};

function startGame() {
  if (dataObj.round < 5) {
    let getUserInput = prompt('Please write Rock or Paper or Scissors');
    if (!['rock', 'paper', 'scissors'].includes(getUserInput)) {
      console.log('Please write Rock or Paper or Scissors');
      startGame();
    } else {
      dataObj.user.push(getUserInput);
      game(getUserInput);
    }
  } else {
    if (dataObj.round == 5) {
      if (dataObj.computerRate > dataObj.userRate)
        console.log('Computer is the winner');
      else if (dataObj.computerRate < dataObj.userRate)
        console.log('You are the winner');
      else console.log('There is no winner, play again');
    }
  }
}

function game(getUserInput) {
  let computerRound = computerPlay();
  dataObj.computer.push(computerRound);

  console.log(playRound(getUserInput, computerRound));
  console.table(dataObj);
  startGame();
}

function computerPlay() {
  let arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor(Math.random() * arr.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  dataObj.round += 1;
  if (playerSelection === computerSelection)
    return `Both players selected ${playerSelection}. It's a tie!`;
  else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      dataObj.userRate++;
      return 'Rock beats scissors! You win!';
    } else {
      dataObj.computerRate++;
      return 'Paper beats rock! You lose.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      dataObj.userRate++;
      return 'Paper beats rock! You win!';
    } else {
      dataObj.computerRate++;
      return 'Scissors beats paper! You lose.';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      dataObj.userRate++;
      return 'Scissors beats paper! You win!';
    } else {
      dataObj.computerRate++;
      return 'Rock beats scissors! You lose.';
    }
  }
}
