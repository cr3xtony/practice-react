import React from 'react';

const TicTacToe = () => {
  return (
    <div className='tictactoe'>
      <div className='tictactoe-container'>
        <div className='tictactoe-row tictactoe-border-bottom'>
          <div className='tictactoe-cell tictactoe-border-right'>
            <span>x</span>
          </div>
          <div className='tictactoe-cell tictactoe-border-right'></div>
          <div className='tictactoe-cell'></div>
        </div>
        <div className='tictactoe-row tictactoe-border-bottom'>
          <div className='tictactoe-cell tictactoe-border-right'></div>
          <div className='tictactoe-cell tictactoe-border-right'></div>
          <div className='tictactoe-cell'></div>
        </div>
        <div className='tictactoe-row'>
          <div className='tictactoe-cell tictactoe-border-right'></div>
          <div className='tictactoe-cell tictactoe-border-right'></div>
          <div className='tictactoe-cell'></div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
