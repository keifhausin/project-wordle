import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function PastGuesses({ guesses, answer }) {
  return <div>

    {range(NUM_OF_GUESSES_ALLOWED).map((index) => {

      const guess = index < guesses.length ? guesses[index] : { 'guess': '', 'id': index }

      const checkData = checkGuess(guess.guess, answer)
      return <p className='guess' key={guess.id}> {

        range(5).map((val) => {

          const letterInfo = checkData && checkData[val].status
          const newClass = "cell" + (letterInfo ? " " + letterInfo : "")
          return <span key={Math.random()} className={newClass}  > {val < guess.guess.length ? guess.guess[val] : ""}</span>
        })

      }</p>
    })}

  </div>;
}



export default PastGuesses;
