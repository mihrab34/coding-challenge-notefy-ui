import React from 'react';
import './App.css';
import TextField from './components/TextField';

const App:React.FC = () => {
  return (
    <div className="App">
      <span className="App-header">Notefy</span>
      <TextField />
      
    </div>
  );
}

export default App;
