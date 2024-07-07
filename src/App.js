import React, { useState } from 'react';
import GameCertificate from './components/GameCertificate';

const App = () => {
  const [screen, setScreen] = useState('certificate');
  const playerName = "PLAYER'S NAME"; // Replace with dynamic data
  const score = 12345; // Replace with dynamic data

  return (
    <div>
      {screen === 'certificate' && (
        <GameCertificate screen={screen} setScreen={setScreen} playerName={playerName} score={score} />
      )}
      {screen === 'gameOver' && (
        <div>Game Over Screen</div>
      )}
    </div>
  );
};

export default App;
