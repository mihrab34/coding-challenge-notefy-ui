import React,{useEffect} from 'react'
import { INote } from './model';
import Note from './Note';

interface Props {
    notes: INote[],
    fetchNotes: () => Promise<void>
}

const NoteList:React.FC<Props> = ({notes, fetchNotes}) => {

  const formatDateString = (dateString?: string) => {
    const date = new Date(dateString ?? '');
    return date.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    fetchNotes()
  }, []) 
  return (
    <div className='md:w-96 lg:w-11/12  flex flex-row flex-wrap justify-between md:gap-6 items-center'>
        
        {notes.map((note) => (
            <Note 
            key={note.id} 
            note={{
            ...note,
            createdAt: formatDateString(note.createdAt),
            updatedAt: formatDateString(note.updatedAt),
          }}
            notes={notes}
            fetchNotes={fetchNotes} />
      ))}
    </div>
  )
};

export default NoteList