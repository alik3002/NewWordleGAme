import React from 'react';

export default function Modal({ isCorrect, solution, turn, onClose, }) {
  return (
    <div className="modal">

      {isCorrect ? (
        <div>
          <button onClick={onClose} className="close-button">
            ✖
          </button>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      ) : (
        <div>
          <button onClick={onClose} className="close-button">
            ✖
          </button>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
        
      )}

      
    </div>
  );
}
