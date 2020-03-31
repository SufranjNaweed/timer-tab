import React from 'react';
import './App.css';

import Timer from './Components/Timer';
import Task from './Components/Tasks';

function App() {
  return (
    <div className="App">
      <Timer />
      <Task />
    </div>
  );
}

export default App;
