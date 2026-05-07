import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import CreateNoteModal from './components/CreateNoteModal';
import DeleteModal from './components/DeleteModal';
import { getNotes, createNote, deleteNote } from './api';

function App() {
  const [notes, setNotes] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  const handleCreateNote = async (note) => {
    try {
      const newNote = await createNote(note);
      setNotes([newNote, ...notes]);
      setCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(n => n.id !== id));
      setNoteToDelete(null);
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="main-header">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search notes..." />
          </div>
          <div className="header-right">
            <button className="btn-primary" onClick={() => setCreateModalOpen(true)}>
              Add Note
            </button>
            <div className="user-profile">
              <span className="user-initial">D</span>
            </div>
          </div>
        </header>
        
        <div className="notes-container">
          <NoteList notes={notes} onDeleteClick={setNoteToDelete} />
        </div>
      </main>

      {isCreateModalOpen && (
        <CreateNoteModal 
          onClose={() => setCreateModalOpen(false)} 
          onSave={handleCreateNote} 
        />
      )}

      {noteToDelete && (
        <DeleteModal 
          note={noteToDelete}
          onClose={() => setNoteToDelete(null)}
          onConfirm={handleDeleteNote}
        />
      )}
    </div>
  );
}

export default App;
