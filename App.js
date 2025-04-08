import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getComputerChoice = () => {
    const choices = ['Pierre', 'Feuille', 'Ciseaux'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Match nul';
    if (
      (user === 'Pierre' && computer === 'Ciseaux') ||
      (user === 'Ciseaux' && computer === 'Feuille') ||
      (user === 'Feuille' && computer === 'Pierre')
    ) {
      return 'Vous avez gagné !';
    }
    return 'Vous avez perdu.';
  };

  const handleUserChoice = (choice) => {
    const computer = getComputerChoice();
    const gameResult = determineWinner(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="game-container">
      <h1>Pierre Feuille Ciseaux</h1>

      <div className="choices">
        <button onClick={() => handleUserChoice('Pierre')}>Pierre</button>
        <button onClick={() => handleUserChoice('Feuille')}>Feuille</button>
        <button onClick={() => handleUserChoice('Ciseaux')}>Ciseaux</button>
      </div>

      {userChoice && (
        <div className="result">
          <p>Votre choix: {userChoice}</p>
          <p>Choix de l'ordinateur: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}

      <button className="reset-button" onClick={resetGame}>Recommencer</button>
    </div>
  );
};

export default App;
