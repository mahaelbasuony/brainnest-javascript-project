function computerPlay() {
  let arr = ['Rock', 'Paper', 'Scissors'];

  return arr[Math.floor(Math.random() * arr.length)].toLowerCase();
}


function playRound(layerSelection, computerSelection) {
  if (layerSelection === computerSelection)
    return `Both players selected ${layerSelection}. It's a tie!`;
  else if (layerSelection === 'rock') {
    if (computerSelection === 'scissors') return 'Rock beats scissors! You win!';
    else return 'Paper beats rock! You lose.';
  } else if (layerSelection === 'paper') {
    if (computerSelection === 'rock') return 'Paper beats rock! You win!';
    else return 'Scissors beats paper! You lose.';
  } else if (layerSelection === 'scissors') {
    if (computerSelection === 'paper') return 'Scissors beats paper! You win!';
    else return 'Rock beats scissors! You lose.';
  }
}


// function game(){
//   let getUserInput= document.getElementById('userData').value.toLowerCase();
//   for(let i =0; i<5; i++){

//    console.log( playRound(getUserInput, computerPlay()))
//   }
// }
// game();

//  document.getElementById('result').addEventListener('click', showResult);


 function showResult(){
  let getUserInput= document.getElementById('userData').value.toLowerCase();
  console.log(getUserInput)
  if(getUserInput === '' ){
    alert('Please write Rock or Paper or Scissors')


  }else{
    alert( playRound(getUserInput, computerPlay()))
  }
 }

