import React from 'react';
import { projects } from './../data';


function ProjectDetails(props) {
  console.log('props', props)

  // The dynamic part of the path in the Navigation bar
  // becomes available thanks to react-router on the `props`
  // and we can access it via  `props.match.params`, like:

  // <Route path="/projects/:idOfTheProject" ... />   ===>  `props.match.params.idOfTheProject`

  const projectId = props.match.params.idOfTheProject;
  console.log('projectId', projectId);

  // We iterate over the array of the projects to find that one project by it's id
  const project = projects.find((projectObj) => projectObj.id === projectId)
  
  return (
    <div>
      <h2>Project Details</h2>
      <h3>Project Name: { project.name}</h3>
      <h3>Tech stack: { project.technologies}</h3>
      <p>Description: { project.description}</p>
    </div>
  )
}

export default ProjectDetails
