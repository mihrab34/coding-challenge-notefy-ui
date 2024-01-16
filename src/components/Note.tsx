import React from 'react'
import { INote } from './model';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

type NoteProps = {
    note :INote,
    notes:INote[],
    fetchNotes: () => Promise<void>
}

const Note:React.FC<NoteProps> = ({note, notes, fetchNotes }) => {
    const handleDelete = async(id:number) =>{
        try {
            const response = await fetch(`http://localhost:5000/api/note/${id}`, {method: 'DELETE'});
            if (response.status === 204) {
                alert("Note deleted");
                fetchNotes();  // refreshpage with fetch notes
              }
        } catch (error) {
            alert(error);
        }

    }
  return (
    <div>
        <form className='w-96 min-h-60 flex flex-row justify-center bg-slate-100 my-4 px-8 py-8'>
            <div className='mr-2'>
            <h1 className='border-b-2 border-slate-500'>{note.title.toUpperCase()}</h1>
            <p className='mt-5'>{note.body}</p>
            </div>
            <div className='flex flex-row align-center justify-center gap-y-5 '>
                <span className='cursor-pointer text-2xl mr-2'>
                <CiEdit />
                </span>
                <span className='cursor-pointer text-2xl' onClick={() => handleDelete(note.id)}>
                <MdDelete />
                </span>
            </div>
        </form>
    </div>
  )
}

export default Note