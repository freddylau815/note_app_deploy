import axios from 'axios';
import { useState, useEffect } from 'react';

function NoteForm({ editNote, setEditNote, setShowNoteForm, setNotes }) {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (editNote) {
      setNoteText(editNote.text);
    }
  }, []);

  const createOrEditNote = async (event) => {
    event.preventDefault();

    if (!editNote) {
      const res = await axios.post('/api/notes', {
        text: noteText,
      });
      setNotes((oldState) => {
        return [res.data, ...oldState];
      });
    } else {
      const res = await axios.put('/api/note', {
        note_id: editNote._id,
        text: noteText,
      });

      setNotes((oldState) => {
        // const note = oldState.find((n) => n._id) === editNote._id

        editNote.text = noteText;

        return [...oldState];
      });
    }

    setShowNoteForm(false);
    setEditNote(null);
  };

  const closeModal = () => {
    setEditNote(null);
    setShowNoteForm(false);
  };

  const handleInputChange = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div className='note-form'>
      <h1 className='text-center'>{editNote ? 'Edit' : 'Create'} Note</h1>

      <form onSubmit={createOrEditNote} className='column'>
        <input
          value={noteText}
          onChange={handleInputChange}
          type='text'
          placeholder='Enter the note text'
        />

        <button>{editNote ? 'Save' : 'Create'}</button>
        <button className='cancel-btn' onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
