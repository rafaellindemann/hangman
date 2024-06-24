import React from 'react';

const Keyboard = ({ handleGuess, guesses, word, disabled }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  const getButtonStyle = (letter) => {
    if (guesses.includes(letter)) {
      return word.includes(letter) ? 'correct' : 'incorrect';
    }
    return '';
  };

  return (
    <div>
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={disabled || guesses.includes(letter)}
          className={getButtonStyle(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
