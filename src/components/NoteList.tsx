import React from 'react'
import { INote } from './model';
import Note from './Note';

interface Props {
    notes: INote[],
    setNotes:React.Dispatch<React.SetStateAction<INote[]>>
}

const NoteList:React.FC<Props> = ({notes, setNotes}) => {
  return (
    <div className='w-auto flex flex-row flex-wrap justify-between items-center'>
        {notes.map((note) => (
        <div key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  )
};

export default NoteList