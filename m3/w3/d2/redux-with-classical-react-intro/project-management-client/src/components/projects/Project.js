import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
  const { projectData } = props;

  return (
    <div className="project">
      <Link to={`/projects/${projectData._id}`}>
        <h3>{projectData.title}</h3>
        <p>{projectData.description} </p>
      </Link>
    </div>
  );
}
