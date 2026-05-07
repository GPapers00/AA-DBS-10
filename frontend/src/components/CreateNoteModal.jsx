import React, { useState } from 'react';
import { X, Tag, Folder } from 'lucide-react';

const CreateNoteModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({ title, content, tags: [] });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content create-modal">
        <div className="modal-header">
          <button className="icon-btn-text" onClick={onClose}>
            <X size={18} /> Cancel
          </button>
          <div className="header-actions">
            <span className="status-text">cloud_done Saved to Drafts</span>
            <button className="btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className="modal-body create-body">
           <div className="note-meta-bar">
              <button className="tag-btn"><Tag size={14} /> Add Tag</button>
              <span className="workspace-badge"><Folder size={14} /> Personal Workspace</span>
           </div>
           <input 
              type="text" 
              className="note-title-input" 
              placeholder="Note Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <textarea 
              className="note-content-input" 
              placeholder="Start writing..." 
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
        </div>
      </div>
    </div>
  );
};

export default CreateNoteModal;
