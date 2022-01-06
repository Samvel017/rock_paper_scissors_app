import React from 'react';

export default function GameResult({
  currentVariant,
  computerVariant,
  gameResult,
}) {
  return (
    <div className="result-container">
      <h3 className="game-result">{gameResult}</h3>
      <div className="result">
        <div className="player-result">{currentVariant}</div>
        <span>VS</span>
        <div className="computer">{computerVariant}</div>
      </div>
    </div>
  );
}
