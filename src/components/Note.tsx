import React from 'react'
import { INote } from './model';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

type NoteProps = {
    note :INote,
    notes:INote[],
    setNotes:React.Dispatch<React.SetStateAction<INote[]>>

}

const Note:React.FC<NoteProps> = ({note, notes, setNotes }) => {
  return (
    <div>
        <form className='w-96 min-h-60 flex flex-row justify-center bg-slate-100 my-4 px-8 py-8'>
            <div className='mr-2'>
            <h1 className='border-b-4 border-slate-500'>{note.title.toUpperCase()}</h1>
            <p className='mt-5'>{note.body}</p>
            </div>
            <div>
                <span>
                <CiEdit />
                </span>
                <span>
                <MdDelete />
                </span>
            </div>
        </form>
    </div>
  )
}

export default Note