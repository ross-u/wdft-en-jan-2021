//      routes/project-routes.js
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Project = require("../models/project.model");
const Task = require("../models/task.model");

// POST '/api/projects'    => to post a new projects
router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then((createdProject) => {
      res
        .status(201) // Created
        .json(createdProject);
    })
    .catch((err) => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
});


// GET '/api/projects'		 => to get all the projects
router.get('/projects', (req, res, next) => {

  Project
    .find()
    .populate("tasks")
    .then((allProjects) => {
      res
        .status(200) // OK
        .json(allProjects);
    })
    .catch((err) => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
})


// GET '/api/projects/:id'		 => to get a specific projects
router.get('/projects/:id', (req, res, next) => {

  const { id } = req.params;

/*check if id coming from the params valid mongo _id*/
  const invalidId = !mongoose.Types.ObjectId.isValid(id);
  if (invalidId) {
    res
      .status(400) // Bad Request
      .json({ message: "Specified id is not valid" });
    
    return;
  }

  Project
    .findById(id)
    .populate("tasks")
    .then((project) => {
      res
        .status(200) // OK
        .json(project);
    })
    .catch((err) => {
      res
        .status(500) // Internal Server Error
        .json(err);
    });
})


// PUT '/api/projects/:id' 		=> to update a specific project
router.put('/projects/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) // Bad Request
      .json({ message: "Specified id is not valid" });
    
    return;
  }

  Project.findByIdAndUpdate(id, { title, description })
    .then(() => res.status(200).send())
    .catch((err) => res.status(500).json(err));

})





// DELETE '/api/projects/:id'   => to delete a specific project
router.delete('/projects/:id', (req, res, next) => {
  const { id } = req.params;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) // Bad Request
      .json({ message: "Specified id is not valid" });
    
    return;
  }

  Project.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202) // Accepted
        .send('Document was removed');
      
      // // OR:
      // res
      //   .status(204) // No Content
      //   .send()
    })
    .catch((err) => res.status(500).json(err));

})


module.exports = router;
