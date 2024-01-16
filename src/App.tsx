import React, {useEffect, useState} from 'react';
import './App.css';
import { INote } from './Components/model';
import TextField from './Components/TextField';
import NoteList from './Components/NoteList';

const App:React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes");
      const data = await response.json();
      setNotes(data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
    useEffect(() => {
      fetchNotes()
    }, [setNotes])  
  
  return (
    <div className="App">
      <span className="App-header">Notefy</span>
      <TextField fetchNotes={fetchNotes}  />
      <NoteList notes={notes} fetchNotes={fetchNotes} />
      
    </div>
  );
  }

export default App;
