import React, {useState} from 'react';
import './App.css';
import { INote } from './components/model';
import TextField from './components/TextField';

const App:React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([])
  return (
    <div className="App">
      <span className="App-header">Notefy</span>
      <TextField  />
      
    </div>
  );
}

export default App;
