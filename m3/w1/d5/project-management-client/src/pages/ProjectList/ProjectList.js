import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AddProject from "./../../components/AddProject/AddProject";

class ProjectList extends Component {
  state = {
    listOfProjects: [],
  };

  getAllProjects = () => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        const data = response.data;
        this.setState({ listOfProjects: data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    return (
      <div id="project-list">
        <AddProject getData={this.getAllProjects} />

        <div>
          {this.state.listOfProjects.map((project) => (
            <div key={project._id} className="project">
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
                <p>{project.description} </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
