// src/components/AddTask/AddTask.js

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
    isShowing: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { id } = this.props.match.params; // made available by withRouter()

    // we need to know to which project the task belongs,
    // therefore we get project 'id'

    axios
      .post("http://localhost:5000/api/tasks", {
        title,
        description,
        projectId: id,
      })
      .then(() => {
        // after form submit, GET project again to display the updated task list
        this.props.getUpdatedProject();
        this.setState({ title: "", description: "" });
      })
      .catch((error) => console.log(error));
  };

  toggleForm = () => this.setState({ isShowing: !this.state.isShowing });

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  displayForm = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <input
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>
          {this.state.isShowing ? "Close" : "Add task"}
        </button>

        {!this.state.isShowing ? null : this.displayForm()}
      </div>
    );
  }
}

// By wrapping AddTask in withRouter,
// we inject react-router props (match, location, history)
// to the component. This will help us to access the project's id from the URL (this.props.match.params)
export default withRouter(AddTask);
