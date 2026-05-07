const express = require('express');
const router = express.Router();
const { Note } = require('../db');

// GET all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single note
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create a note
router.post('/', async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  try {
    const note = await Note.create({
      title,
      content,
      tags: tags || []
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a note
router.delete('/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
       return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ message: 'deleted', id: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
