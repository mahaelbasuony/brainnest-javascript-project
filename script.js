function computerPlay() {
  let arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor(Math.random() * arr.length)].toLowerCase();
}

let dataObj = {
  round: 0,
  computerRate: 0,
  computer: [],
  userRate: 0,
  user: [],
};
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


//UI
function showResult() {
  if (dataObj.round < 5) {
    let getUserInput = document.getElementById('userData').value.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(getUserInput)) {
      alert('Please write Rock or Paper or Scissors');
    } else {
      dataObj.user.push(getUserInput);
      gameUi();
    }
  } else {
    if (dataObj.round == 5) {
      document.getElementById('result').disabled = true;
      if (dataObj.computerRate > dataObj.userRate)
        alert('Computer is the winner');
      else if (dataObj.computerRate < dataObj.userRate)
        alert('You are the winner');
      else alert('There is no winner, play again');
    }
  }
}

function gameUi() {
  let getUserInput = document.getElementById('userData').value.toLowerCase();

  document.getElementById('round').innerText = dataObj.round;
  let computerRound = computerPlay();
  dataObj.computer.push(computerRound);
  console.log(dataObj);
  alert(playRound(getUserInput, computerRound));
  document.getElementById('yourResult').innerText = dataObj.userRate;
  let userRoundSelectionElm = document.createElement('li');

  userRoundSelectionElm.innerText = getUserInput;
  document.getElementById('userSelections').append(userRoundSelectionElm);

  document.getElementById('computerResult').innerText = dataObj.computerRate;

  let computerRoundSelectionElm = document.createElement('li');
  computerRoundSelectionElm.innerText = computerRound;
  document
    .getElementById('computerSelections')
    .append(computerRoundSelectionElm);
}
