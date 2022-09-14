import React from 'react';
import { CrossIcon, CircleIcon } from './svg/icons';

const TicTacToe = () => {
  const [crossOrCircle, setCrossOrCircle] = React.useState('cross');
  return (
    <div className='tictactoe'>
      <div className='now-playing'>
        <div className='now-playing-header'>Now Playing</div>
        <div className='now-playing-player'>Player 1</div>
      </div>
      <div className='tictactoe-container'>
        <div className='tictactoe-row tictactoe-border-bottom'>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
        </div>
        <div className='tictactoe-row tictactoe-border-bottom'>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
        </div>
        <div className='tictactoe-row'>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell tictactoe-border-right'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
          <div className='tictactoe-cell'>
            {crossOrCircle === 'cross' ? <CrossIcon /> : <CircleIcon />}
          </div>
        </div>
      </div>

      <div className='bottom-button'>
        <button>New Game</button>
        <button>Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
