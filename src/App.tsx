import React, {useEffect, useState} from 'react';
import './App.css';
import { INote } from './components/model';
import TextField from './components/TextField';
import NoteList from './components/NoteList';

const App:React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/notes");
          const data = await response.json();
          setNotes(data.notes);
        } catch (error) {
          console.error("Error fetching notes:", error);
        }
      };
      fetchNotes()
    }, [])    
  
  return (
    <div className="App">
      <span className="App-header">Notefy</span>
      <TextField  />
      <NoteList notes={notes} setNotes={setNotes} />
      
    </div>
  );
  }

export default App;
