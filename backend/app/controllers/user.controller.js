const validator = require('email-validator');

var User = require('../models/user.model.js');

exports.create = function(req, res) {

  var user = new User({firstname: req.body.firstname, lastname: req.body.lastname, email:req.body.email});
    
  const isValid = validator.validate(req.body.email);

  if (isValid) {
    user.save(function(err, data) {
        if(err) {
            res.status(500).send({message: "Some error occurred"});
        } else {
            res.send(data);
        }
    });
  } else {
    return res.status(400).json({ error: 'Email is not valid' });
  }

   
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Note.findById(req.params.noteId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.noteId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Note.findById(req.params.noteId, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.noteId});
        }

        note.title = req.body.title;
        note.content = req.body.content;

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Note.remove({_id: req.params.noteId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

