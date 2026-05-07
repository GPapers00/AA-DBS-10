import React from 'react';
import { Plus, FileText, Star, Trash2, Archive, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">My Notebook</h1>
        <p className="subtitle">Personal Workspace</p>
      </div>

      <button className="new-collection-btn">
        <Plus size={16} /> New Collection
      </button>

      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <FileText size={18} /> All Notes
          </li>
          <li>
            <Star size={18} /> Favorites
          </li>
          <li>
            <Trash2 size={18} /> Trash
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <ul>
          <li>
            <Archive size={18} /> Archive
          </li>
          <li>
            <Settings size={18} /> Settings
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
