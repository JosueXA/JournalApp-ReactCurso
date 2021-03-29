import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">

        <input 
          type="text"
          placeholder="Some awesome tilte"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://judiciaryreport.com/images/space-10-16-09.jpg"
            alt="imagen"
          />
        </div>

      </div>

    </div>
  )
}
