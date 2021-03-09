// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './../components/projects/EditProject';
import AddTask from './../components/tasks/AddTask';

class ProjectDetails extends Component {
  constructor(props){
    super(props);
    this.state = {title: '', description: '', tasks: []};
  }
  
  renderEditForm = () => {
    /* Check if `renderEditForm` is triggered before the state gets populated. 
     If the state is empty nothing can be passed to `EditProject` as the
    value in `theProject` prop to populate the form  */
    if (!this.state.title && !this.state.description) return <p>LOADING</p>; 
    else {
      return (
        <EditProject theProject={this.state}
          getTheProject={this.getSingleProject} 
          {...this.props} /> 
       // {...this.props}  so that we can use 'this.props.history' in EditProject  
      )      
    }
  }

  renderAddTaskForm = () => {
    if(!this.state.title && !this.state.description) return  <p>LOADING</p>; 
    else {
      return <AddTask projectID={this.state._id} getTheProject={this.getSingleProject} />
          // pass the projectID and method `getSingleProject()` to AddTask component
    }
  }

  deleteProject = () => {
    const { id } = this.props.match.params;
    
    axios.delete(`http://localhost:5000/api/projects/${id}`)
    	.then( () => this.props.history.push('/projects') )
    	.catch( (err) => console.log(err));
  }


  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { id } = this.props.match.params;
  
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then( (apiResponse) =>{
        const theProject = apiResponse.data;
        this.setState(theProject);
      })
      .catch((err) => console.log(err));
  }
  
  render() {
    return (
      <div>

        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        <Link to={'/projects'}>
          <button>Back</button>
        </Link>

        { this.renderEditForm() }   {/* Render the form in here */}
        <button onClick={() => this.deleteProject()}>
    	    Delete project
  	    </button>

        { this.renderAddTaskForm() }

        { 
          (this.state.tasks.length === 0) ?
          <h2>NO TASKS TO DISPLAY</h2>
          :
           this.state.tasks.map((task) => {
            return(
              <Link key={task._id} to={`/projects/${this.state._id}/tasks/${task._id}`}>
                 <h2 className='task'>{ task.title }</h2>
               </Link>
            )
            
        })
      }

      </div>
    )
  }
}

export default ProjectDetails;