const Note = require('../models/Note');

module.exports = {
  async createNote(req, res) {
    const note = await Note.create(req.body);
    res.json(note);
  },

  async getNotes(req, res) {
    const notes = await Note.find().select('-__v');
    res.json(notes);
  },

  async getNote(req, res) {
    const note_id = req.params.id;

    const notes = await Note.findById(note_id).select('-__v');
    res.json(notes);
  },

  async updateNote(req, res) {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.body.note_id },
      {
        text: req.body.text,
      },
      { new: true }
    ).select('-__v');

    res.json(updatedNote);
  },

  async deleteNote(req, res) {
    await Note.deleteOne({
      _id: req.params.id,
    });

    res.json('Note has been deleted');
  },
};
