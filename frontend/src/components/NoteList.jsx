import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onDeleteClick }) => {
  return (
    <div className="note-grid">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
};

export default NoteList;
