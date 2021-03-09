//      routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/project-model');
const Task = require('../models/task-model');

// POST '/projects'
router.post('/projects', (req, res) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then(response => {
      res.status(201).json(response);
      // `res.json` is similar to ->  `res.send( JSON.stringify(response) )`
    })
    .catch(err => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
});

// GET '/projects'		 => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find()
    .populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET '/api/projects/:id'		 => to get a specific projects
router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findById(id)
    .populate('tasks')
    .then(foundProject => {
      res.status(200).json(foundProject);
    })
    .catch(err => {
      res.res.status(500).json(err);
    });
});

// PUT '/api/projects/:id' 		=> to update a specific project
router.put('/projects/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is updated successfully.`,
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE '/api/projects/:id'   => to delete a specific project
router.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202) //  Accepted
        .json({ message: `Project with ${id} was removed successfully.` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
