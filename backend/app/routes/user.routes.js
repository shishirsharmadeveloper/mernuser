module.exports = function(app) {

    var notes = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/user', notes.create);

    // Retrieve all Notes
    app.get('/users', notes.findAll);

}