import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DeleteModal = ({ note, onClose, onConfirm }) => {
  if (!note) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content delete-modal">
        <div className="delete-icon-wrapper">
          <AlertTriangle size={24} color="#d32f2f" />
        </div>
        <h2>Delete Note?</h2>
        <p>
          This action cannot be undone. "{note.title}" will be permanently removed from your notebook.
        </p>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-danger" onClick={() => onConfirm(note.id)}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
