import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PaginateWithUseReducer from './components/PaginateWithUseReducer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PaginateWithUseReducer />
    </div>
  );
}

export default App;
