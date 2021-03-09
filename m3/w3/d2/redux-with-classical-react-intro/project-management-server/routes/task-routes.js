// outes/task-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/task-model');
const Project = require('../models/project-model');


// GET '/api/projects/:projectId/tasks/:taskId'   => to retrieve a specific task
router.get('/projects/:projectId/tasks/:taskId', (req, res) => {
  
  Task.findById(req.params.taskId)
  .then((foundTask) =>{
      res.json(foundTask);
  })
  .catch( err =>{
      res.status(500).json(err);
  })
});


// POST '/api/tasks'      => to create a new task
router.post('/tasks', (req, res)=>{
  const { title, description, projectID } = req.body;

  Task.create({
      title: title,
      description: description,  
      project: projectID
  })
    .then((newTaskDocument) => {

      Project.findByIdAndUpdate( projectID, { $push:{ tasks: newTaskDocument._id } })
        .then((theResponse) => {
          res.status(201).json(theResponse);
        })
        .catch(err => {
          res.status(500).json(err);
      })
  })
  .catch(err => {
    res.status(500).json(err);
  })
})


// PUT '/api/tasks/:id'    => to update a specific task
router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  
  if ( !mongoose.Types.ObjectId.isValid(id) ) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Task.findByIdAndUpdate(id, req.body)
    .then(() => {
      res
        .status(201)
        .json({ message: `Task with ${id} updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})



// DELETE '/api/tasks/:id'     => to delete a specific task
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id) ) {
    res
      .status(400)
      .json({ message: 'Specified id is not valid'});
    return;
  }

  Task.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)
        .json({ message: `Task with ${id} removed successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

module.exports = router;