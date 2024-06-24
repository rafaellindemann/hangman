import React, { useState } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';

const Hangman = () => {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 6;

  const handleGuess = (letter) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (!word.includes(letter)) {
        setAttempts(attempts + 1);
      }
    }
  };

  const handleSetWord = () => {
    const newWord = prompt('Por favor, informe a palavra para adivinhar:');
    if (newWord) {
      setWord(newWord.toUpperCase());
      setGuesses([]);
      setAttempts(0);
    }
  };

  const isGameOver = attempts >= maxAttempts;
  const isWinner = word.split('').every(letter => guesses.includes(letter));

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <button onClick={handleSetWord}>Definir Palavra</button>
      {word && (
        <>
          <Word word={word} guesses={guesses} />
          <Keyboard handleGuess={handleGuess} guesses={guesses} word={word} disabled={isGameOver || isWinner} />
          <p>Chances restantes: {maxAttempts - attempts}</p>
          {isGameOver && <p>Você perdeu! A palavra era: {word}</p>}
          {isWinner && <p>Parabéns! Você ganhou!</p>}
        </>
      )}
    </div>
  );
};

export default Hangman;
