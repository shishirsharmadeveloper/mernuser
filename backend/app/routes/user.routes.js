const validateRequestBody = (req, res, next) => {
    if (!req.body.firstname || !req.body.email) {
      res.status(400).send('First Name and Email are required fields');
      return;
    }
  
    next();
  };

module.exports = function(app) {

    var userController = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/user', validateRequestBody, userController.create);

    // Retrieve all Notes
    app.get('/users', userController.findAll);

}