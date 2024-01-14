import React from 'react'
import './styles.css';

interface Props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>
}

const TextField = ({note, setNote}: Props) => {
  return (
    <form className='text'>
        <div className='text_input'>
        <label htmlFor='addname' className='text_label'>Add a new note</label>
        <textarea id='addnote' name='addnote' rows={7} cols={70} className='text_box'></textarea>
        </div>
        <button type='submit' className='text_submit'>Save</button>
    </form>
  )
}

export default TextField