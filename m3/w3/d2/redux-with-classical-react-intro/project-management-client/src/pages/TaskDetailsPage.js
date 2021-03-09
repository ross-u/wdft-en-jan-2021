// components/tasks/TaskDetails.js

import React, { Component } from 'react';
import axios from 'axios';


class TaskDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { id, taskId } = this.props.match.params;
    axios.get(`http://localhost:5000/api/projects/${id}/tasks/${taskId}`)
    	.then( (apiResponse) => {
      	const theTask = apiResponse.data;
      	this.setState(theTask);
    })
    .catch( (err) => console.log(err))
  }

  render(){
    return(
      <div>
        <h3>TASK DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>

        {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default TaskDetails;