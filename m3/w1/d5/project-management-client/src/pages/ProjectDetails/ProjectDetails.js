import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProject from "./../../components/EditProject/EditProject";
import AddTask from "./../../components/AddTask/AddTask";

class ProjectDetails extends Component {
  state = {
    title: " ",
    description: " ",
    tasks: [],
  };

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then((apiResponse) => {
        const theProject = apiResponse.data;
        const { title, description, tasks } = theProject;
        this.setState({ title, description, tasks });
      })
      .catch((err) => console.log(err));
  };

  deleteProject = () => {
    const { id } = this.props.match.params;

    axios
      .delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => this.props.history.push("/projects"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Project Details</h1>
        <h2>{this.state.title}</h2>
        <h4>{this.state.description}</h4>
        <Link to={"/projects"}>
          <button>Back</button>
        </Link>

        <EditProject getTheProject={this.getSingleProject} />

        <button onClick={this.deleteProject}>Delete project</button>

        <AddTask getUpdatedProject={this.getSingleProject} />

        {this.state.tasks.length === 0 ? (
          <h2>NO TASKS TO DISPLAY</h2>
        ) : (
          this.state.tasks.map((task) => {
            return (
              <Link
                key={task._id}
                to={`/projects/${this.state._id}/tasks/${task._id}`}
              >
                <div className="task">
                  <h2>{task.title}</h2>
                </div>
              </Link>
            );
          })
        )}
      </div>
    );
  }
}

export default ProjectDetails;
