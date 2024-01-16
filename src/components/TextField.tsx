import React,{useState}from 'react';
import './styles.css';
import { INote } from './model';

// interface Note {
//   title: string;
//   content: string;
// }

const initialValues: INote = {
  id:0,
  title: "",
  body: "",
};

const TextField = () => {
  const [note, setNote] = useState<INote>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNote({ ...note, [e.target.id]: value });
  };

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    if (note) {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note)
    };

    try {
        const response = await fetch("http://localhost:5000/api/", options);
        const data = await response.json();
        if (response.status === 201) {
          alert(data.message);
          setNote(initialValues)
        }
        else if (response.status === 400){
          setNote({...note, [note.title]:" "});
          alert("Note title must be unique");
        }
      } catch (error) {
        alert(error);
      }
    }
 };

 const {title, body} = note;


  return (
    <form className='text flex flex-col justify-between items-center my-2' onSubmit={handleSubmit}>
      <div className='text_input text_note'>
        <label htmlFor='title'>Note title:</label>
        <input id='title' type='text' name='title' placeholder='Enter note title' value={title} onChange={handleChange} />
      </div>
      <div className='text_note'>
        <label htmlFor='addname' className='text_label'>Add a new note</label>
        <textarea id='body' name='body' rows={7} cols={70} className='text_box' value={body} onChange={handleChange}></textarea>
      </div>
      <button type='submit' className='text_submit'>Save</button>
    </form>
  )
}

export default TextField