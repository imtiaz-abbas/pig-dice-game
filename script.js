var scores, roundScore, activePlayer, gamePlaying, finalScore = 100;
init();
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer - 1] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer - 1];
        if (scores[activePlayer - 1] >= finalScore) {
            document.querySelector('.player-' + activePlayer + '-heading').textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-container').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-container').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('current-score-2').textContent = '0';
    document.querySelector('.player-1-container').classList.toggle('active');
    document.querySelector('.player-2-container').classList.toggle('active');
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('current-score-2').textContent = '0';
    document.querySelector('.player-1-heading').textContent = 'Player 1';
    document.querySelector('.player-2-heading').textContent = 'Player 2';
    document.querySelector('.player-1-container').classList.remove('winner');
    document.querySelector('.player-2-container').classList.remove('winner');
    document.querySelector('.player-1-container').classList.remove('active');
    document.querySelector('.player-2-container').classList.remove('active');
    document.querySelector('.player-1-container').classList.add('active');
    var inputFinalScore = document.querySelector('.finalScore').value;
    if (inputFinalScore === '') {
      finalScore = 100;
    } else {
      finalScore = inputFinalScore;
    }
}
