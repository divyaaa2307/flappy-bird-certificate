import React from 'react';
import logo from '../assets/codecheflogo.png';

const GameCertificate = ({ screen, setScreen, playerName, score }) => {
  const handleClose = () => {
    setScreen('gameOver');
  };


  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-phoneview w-full sm:bg-deskview absolute h-screen'>
      <div className="bg-white p-7 shadow-lg w-3/4 mx-auto text-center mb-4 mt-4 sm:w-2/3 ">
      <div className="bg-white borderr">
        <div className="mb-4">
          <img src={logo} alt="Logo" className="mx-auto sm:w-1/6 w-1/3 mb-2 mt-2" />
        </div>
        <h1 className="text-2xl sm:text-6xl mb-6 gamefont">CERTIFICATE</h1>
        <div className="flex flex-col items-center mb-6">
          <p className="text-xl sm:text-4xl pr-4 font-semibold congrats mb-2">Congratulations <span className="text-black ull">{playerName}</span></p>
    
        </div>
        <p className="text-xl sm:text-4xl font-bold congrats mb-6">for achieving an impressive score of</p>
       
        <p className="text-xl sm:text-4xl font-bold text-black mb-4"><span className="ull">{score}</span></p>
    
      </div></div>
      <div className="text-center">
        <button
          onClick={handleClose}
          className="buttton px-12 py-2 rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GameCertificate;
