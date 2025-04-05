import React, { useState } from "react";
import "./App.css";

const choices = ["Pierre", "Feuille", "Ciseaux"];

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("Match nul !");
    } else if (
      (user === "Pierre" && computer === "Ciseaux") ||
      (user === "Feuille" && computer === "Pierre") ||
      (user === "Ciseaux" && computer === "Feuille")
    ) {
      setResult("Vous avez gagné !");
    } else {
      setResult("Vous avez perdu !");
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="app">
      <h1>Pierre - Feuille - Ciseaux</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      <div className="results">
        <p>Votre choix : <strong>{userChoice}</strong></p>
        <p>Choix de l'ordinateur : <strong>{computerChoice}</strong></p>
        <h2>{result}</h2>
      </div>

      <button className="reset" onClick={resetGame}>Réinitialiser</button>
    </div>
  );
}

export default App;
