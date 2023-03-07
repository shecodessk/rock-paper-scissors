let playerScore = 0
let compScore = 0

const getComputerChoice = () => {
  const arrChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = arrChoices[randomNum]
  return compChoice
}



const playRound = (playerSelection, computerSelection) => {
 if(playerSelection === 'rock' && computerSelection === 'rock'){
      console.log('You tie! you both pick rock')
  } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
      console.log('You tie! you both pick scissors')
  } else if(playerSelection === 'paper' && computerSelection === 'paper'){
      console.log('You tie! you both pick paper')
  } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
      playerScore++
      console.log('You win! scissors wins over paper')
  } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
      compScore++  
      console.log('You lose, rock wins over scissors')
  } else if(playerSelection === 'paper' && computerSelection === 'rock'){
      playerScore++
      console.log('You win! paper wins rock')
  } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
      compScore++
      console.log('You lose, scissors win over paper')
  } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
      playerScore++
      console.log('You win! rock wins over scissors')
  } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      compScore++
      console.log('You lose, paper wins over rock!')
  } 
}



const game = () => {
  for(i = 0; i < 5; i++){
    const playerSelection = prompt('Choose what to throw:', 'rock, paper, scissors?').toLocaleLowerCase();
   
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
  }
  if (playerScore > compScore){
    return 'You beat the computer!'
  } else if (playerScore < compScore){
    return 'Sorry, you lost'
  } else {
    return 'You tie with the computer!'
  }
}
console.log(game())