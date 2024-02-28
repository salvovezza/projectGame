if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
} 
  /*
  when we updated our score in this part of the code: 
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1
    } else if (result === 'Tie.') {
      score ties += 1;
    }
  After we update the score, we're going to save it in local storage using local storage dot setItem. Now, local storage only supports strings, so we have to convert our score object into a JSON string using JSON dot 'stringify':
  localStorage.setItem('score', JSON.stringify(score));
  And then, after we've saved this into localStorage, when we load the page, up here: 
    let score = JSON.parse(localStorage.getItem('score'));
  up here we're going to load the score that we jsut saved from localStorage using 'localStorage.getItem', and the score was saved as a JSON string, so we need to convert it back into an object using 'JSON.parse'. So, that's how we use the JSON object and the localStorage object to save our score more permanently. 
  And the last feature we're going to add is when we click the 'Reset Score' button, we also need to remove the score from localStorage; otherwise, if we press Reset Score, and refresh and then play the game, it will just grab the old score from localStorage;
  
  */

updateScoreElement();  

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';    

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie';
    } else if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    }    

  } else if (playerMove === 'paper') {
      if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose';
      } else if (computerMove === 'rock') {
        result = 'You win';
      }    
      
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    } 
  }        

  if (result === 'You win') {          
    score.wins += 1;
  } 
  else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score)); 

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You chose: <img src="${playerMove}-emoji.png" class="smaller-moveicon"> &nbsp; - &nbsp;&nbsp;Computer got: <img src="${computerMove}-emoji.png" class="smaller-moveicon">` ;      
  }

  function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
  const randomNumber = Math.random(); 

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {        
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2/3) {        
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {       
    computerMove = 'scissors'; 
  }
  return computerMove; 
}       
