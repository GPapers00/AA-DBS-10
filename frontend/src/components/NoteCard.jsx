import React from 'react';
import { Trash2 } from 'lucide-react';

const NoteCard = ({ note, onDeleteClick }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="note-card">
      <div className="note-card-header">
        <h3 className="note-title">{note.title}</h3>
      </div>
      <p className="note-content-preview">{note.content || 'Empty note...'}</p>
      
      <div className="note-card-footer">
        <span className="note-date">{formattedDate}</span>
        <div className="note-actions">
          {note.tags && note.tags.map((tag, idx) => (
             <span key={idx} className="note-tag">{tag}</span>
          ))}
          <button className="icon-btn delete-icon" onClick={() => onDeleteClick(note)}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
