import React from 'react';

function GuessBox({ guesses, setGuesses, gameOver }) {
  const [guess, setGuess] = React.useState("");

  return <form className="guess-input-wrapper" id="guess-input-form"
    onSubmit={(event) => {
      event.preventDefault();

      console.log(guess)
      if (guess.length == 5) {
        const newGusses = [...guesses]
        newGusses.push({ guess, id: crypto.randomUUID() })
        setGuess("")
        setGuesses(newGusses)

      }


    }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text"
      htmlFor="guess-input-form"
      disabled={gameOver ? 1 : undefined}
      value={guess}
      required={true}
      minLength={5}
      onChange={(event) => {
        const userGuess = event.target.value
        if (userGuess.length < 6)
          setGuess(userGuess.toLocaleUpperCase())
      }} />

  </form>;
}

export default GuessBox;
