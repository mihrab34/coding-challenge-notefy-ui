import React,{useState}from 'react';
import './styles.css';

interface Note {
  title: string;
  content: string;
}

const initialValues: Note = {
  title: "",
  content: "",
};

const TextField: React.FC = () => {
  const [note, setNote] = useState<Note>(initialValues)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };


  return (
    <form className='text flex flex-col justify-between items-center'>
      <div className='text_input text_note'>
        <label htmlFor='title'>Note title:</label>
        <input id='title' type='text' name='title' placeholder='Enter note title' onChange={handleChange} />
      </div>
      <div className='text_note'>
        <label htmlFor='addname' className='text_label'>Add a new note</label>
        <textarea id='addnote' name='content' rows={7} cols={70} className='text_box' onChange={handleChange}></textarea>
      </div>
      <button type='submit' className='text_submit'>Save</button>
    </form>
  )
}

export default TextField