const router = require('express').Router();
const api_controller = require('../controllers/api_controllers');

// Create Note
router.post('/notes', api_controller.createNote);

// Get ALL Notes
router.get('/notes', api_controller.getNotes);

// Get ONE Note by ID
router.get('/note/:id', api_controller.getNote);

// Update Note
// PUT route that bgets passed a note id and a json body that contains a text property with the new text value

router.put('/note', api_controller.updateNote);

// Delete Note

router.delete('/note/:id', api_controller.deleteNote);

module.exports = router;
