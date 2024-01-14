import React, {useState} from 'react';
import './App.css';
import TextField from './components/TextField';

const App:React.FC = () => {
  const [note, setNote] = useState<string>("")
  return (
    <div className="App">
      <span className="App-header">Notefy</span>
      <TextField note={note} setNote={setNote} />
      
    </div>
  );
}

export default App;
