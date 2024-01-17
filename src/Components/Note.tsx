import React, {useState, useEffect} from 'react'
import { INote, baseUrl } from './model';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import _ from 'lodash';
import io from 'socket.io-client';
// import * as io from "socket.io-client";

const socket = io(`${baseUrl}`);

type NoteProps = {
    note :INote,
    notes:INote[],
    fetchNotes: () => Promise<void>
}

const Note:React.FC<NoteProps> = ({note, notes, fetchNotes }) => {
    
    const [edit, setEdit] = useState<boolean>(false)
    const [editNote, setEditNote] = useState<INote>(note)

    useEffect(() => {
        const handleUpdateNote = (updatedNote: INote) => {
            if (updatedNote.id === note.id) {
              setEditNote(updatedNote);
              setEdit(false);
            }
          };
          socket.on('noteUpdated', handleUpdateNote);
          return () => {
            socket.off('noteUpdated', handleUpdateNote);
    };
    }, [note.id])

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditNote({ ...editNote, [e.target.id]: e.target.value });
      };

    //   delete Note
    const handleDelete = async(id:number) =>{
        try {
            const response = await fetch(`${baseUrl}note/${id}`, {method: 'DELETE'});
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
                {
                    edit ? (
                        <div>
                            <input id='title' type='text' name='title' placeholder='Enter note title' value={editNote.title} onChange={handleChange} />
                            <textarea id='body' name='body' rows={7} cols={70} className='text_box' value={editNote.body} onChange={handleChange}></textarea>
                        </div>

                    ) : (
                        <div className='mr-2'>
                            <h1 className='border-b-2 border-slate-500'>{note.title.toUpperCase()}</h1>
                            <p className='mt-5'>{note.body}</p>
                            <p className='mt-5'>{`Created: ${note.createdAt}`}</p>
                            <p className='mt-2'>{`Updated: ${note.updatedAt}`}</p>
                        </div>
                    )
                }
                <div className='flex flex-row align-center justify-center gap-y-5 '>
                    <span className='cursor-pointer text-2xl mr-2'
                        onClick={() => {
                            if (!edit) {
                                setEdit(!edit)
                            }
                        }}>
                        <CiEdit />
                    </span>
                    <span className='cursor-pointer text-2xl' onClick={() => handleDelete(note.id ?? -1)}>
                        <MdDelete />
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Note
