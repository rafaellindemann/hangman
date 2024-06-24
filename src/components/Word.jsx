import React from 'react';
import './Word.css';

const Word = ({ word, guesses }) => {
  return (
    <div className='palavra'>
      {word.split('').map((letter, index) =>
        guesses.includes(letter) ? letter : '_'
      ).join(' ')}
    </div>
  );
};

export default Word;
