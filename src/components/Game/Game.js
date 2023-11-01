import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessBox from "../GuessBox";
import PastGuesses from '../PastGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });





function Game() {
  const [guesses, setGuesses] = React.useState([]);



  //return <>Put a game here!</>;

  const isWin = guesses[guesses.length - 1]?.guess === answer
  const isLoss = guesses.length >= NUM_OF_GUESSES_ALLOWED
  const gameOver = (isWin || isLoss)

  return <>

    {isWin ? <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{" " + guesses.length} guesses</strong>.
      </p>
    </div> : ""}

    {isLoss ? <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div> : ""}

    <PastGuesses guesses={guesses} answer={answer}></PastGuesses>
    <GuessBox guesses={guesses} setGuesses={setGuesses} gameOver={gameOver}></GuessBox>
  </>
}

export default Game;
