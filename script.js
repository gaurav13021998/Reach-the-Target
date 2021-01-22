'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');

const rollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;
let scores = [0, 0];
let switchPlayer = 0;
let currentSum =0;
let playing = true;


dice.classList.add('hidden');

const activePlayer = function(){
        document.querySelector(`#current--${switchPlayer}`).textContent = 0;
                currentSum = 0;
                switchPlayer = (switchPlayer === 0) ? 1 : 0 ;
                document.querySelector('.player--0').classList.toggle('player--active');
                document.querySelector('.player--1').classList.toggle('player--active');
                document.querySelector(`.player--${switchPlayer}`);
                
}

rollDice.addEventListener('click',function(){
        if(playing){
        const random = Number(Math.trunc(Math.random()*6)+1);

        dice.classList.remove('hidden'); 
        dice.setAttribute('src',`dice-${random}.png`);
        if(random === 1){
                activePlayer();
        }else{

                currentSum += random;
                document.querySelector(`#current--${switchPlayer}`).textContent = currentSum;
                
        }
  }
});

btnHold.addEventListener('click',function(){
        if(playing){
        scores[switchPlayer] += currentSum; 
        document.getElementById(`score--${switchPlayer}`).textContent = scores[switchPlayer];
        
        if(scores[switchPlayer] >= 100){
                playing = false;
                dice.classList.add('hidden');
                document.querySelector(`.player--${switchPlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${switchPlayer}`).classList.remove('player--active');         
                
        }else{
                activePlayer();
        }
}
});

btnNew.addEventListener('click',function(){
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
        switchPlayer = 0;
        scores = [0, 0];
        currentSum =0;
        dice.classList.add('hidden');
        document.querySelector(`.player--0`).classList.remove('player--winner');
        document.querySelector(`.player--1`).classList.remove('player--winner');
        document.querySelector(`.player--0`).classList.add('player--active');  
        document.querySelector(`.player--1`).classList.remove('player--active');         
        playing = true;     


})