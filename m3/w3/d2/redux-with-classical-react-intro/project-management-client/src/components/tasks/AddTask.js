// components/tasks/AddTask.js

import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = { title: '', description: '', isShowing: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { projectID } = this.props; 
 // we need to know to which project the task belongs, therefore we get its 'id'
                                                
    axios.post("http://localhost:5000/api/tasks",{ title, description, projectID })
    .then( () => {
// after form submit, GET project once more to display the updated task list 
        this.props.getTheProject();
        this.setState({title: '', description: ''});
    })
    .catch( error => console.log(error) )
  }
  
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <button onClick={this.toggleForm}> Add task </button>

        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" placeholder='Title'
                name="title" value={this.state.title}
                onChange={ (e) => this.handleChange(e)}/>
              
              <input name="description" placeholder='Description'
                value={this.state.description}
                onChange={ (e) => this.handleChange(e)} />
              
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
        }
      </div>
    )
  }
}

export default AddTask;