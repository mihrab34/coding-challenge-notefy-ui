import React from 'react'
import { INote } from './model';
import Note from './Note';

interface Props {
    notes: INote[],
    setNotes:React.Dispatch<React.SetStateAction<INote[]>>
}

const NoteList:React.FC<Props> = ({notes, setNotes}) => {
  return (
    <div className='w-11/12 flex flex-row flex-wrap justify-between items-center'>
        
        {notes.map((note) => (
            <Note 
            key={note.id} 
            note={note} 
            notes={notes}
            setNotes={setNotes} />
      ))}
    </div>
  )
};

export default NoteList