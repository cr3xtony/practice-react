import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PaginateWithUseReducer from './components/PaginateWithUseReducer';
import TicTacToe from './components/tic-tac-toe/TicTacToe.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <PaginateWithUseReducer /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
