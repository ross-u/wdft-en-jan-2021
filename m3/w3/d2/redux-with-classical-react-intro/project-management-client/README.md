# React | Integrating the React App



After this lesson, you will be able to:

- Make a request to a REST API using `axios`
- Understand how to integrate backend and frontend parts of your application



In this lesson, we will build a  `React` application to consume our REST API.


<br>


#### Let’s start with creating the React app using CLI command:

```bash
create-react-app project-management-client
```

<br>


We already updated the port where our server side is running-we changed it from `3000` to `5000`, so we have: 



- `project-management-server` runs on `http://localhost:5000`
- `project-management-client` runs on `http://localhost:3000`


<br>


#### Install `axios` for http requests and `react-router-dom`

```bash
npm install axios react-router-dom --save
```

<br>


#### Create folders for the components

```bash
mkdir src/components     
mkdir src/components/projects
mkdir src/components/navbar
```



<br>


#### Add styles to the app

Before we start, let's add some basic styles to our app in  `src/App.css`.



`src/App.css`

```css
.App {
  text-align: center;
  margin-top: -20px;
  padding: 0;
}

.nav-style {
  background: slateblue;
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

form {
  padding: 10px 50px;
  border: 2px solid black;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
}

input {
  height: 30px;
  font-size: 18px;
  text-align: center;
}

button {
  width: 150px;
  padding: 5px 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.project, .task {
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 7px;
  max-width: 700px;
}
```



<br>


#### Setup the `<Router>` in `index.js`

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render((
<Router> 
    <App />
</Router> 
), document.getElementById('root'));

// ...
registerServiceWorker();
```




<br>


#### Create `<AddProject />` component.

```jsx
// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "" };
  }
   
  handleFormSubmit = (event) => {}

  handleChange = (event) => {}

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={ (e) => this.handleChange(e) }/>
          
          <label>Description:</label>
          <textarea name="description" 
            value={this.state.description} 
            onChange={ (e) => this.handleChange(e) } />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;
```



<br>

#### Let's create the methods `handleFormSubmit` and `handleChange`

```jsx
// components/projects/AddProject.js

handleFormSubmit = (event) => {
    event.preventDefault();
    const {title, description } = this.state;
    
  axios.post("http://localhost:5000/api/projects", { title, description })
  .then( () => {
     // this.props.getData();
     this.setState({title: "", description: ""});
   })
   .catch( (err) => console.log(err) )
 }


 handleChange = (event) => {  
   const {name, value} = event.target;
   this.setState({[name]: value});
 }
```






<br>
<br>

#### Update `App.js` and include `<AddProject />`

<br>

```jsx
//	src/App.js

import React from 'react';
import './App.css';
import AddProject from './components/projects/AddProject'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddProject />
      </div>
    );
  }
}

export default App;

```



<br>

#### Start the server  before running react app.

<br>

#### Run the app `npm start`  which will open the React app in the  browser.

<br>

<br>

#### Using a created form submit a new Project and check the projects in Postman:

<br>


####   `GET` - `http://localhost:5000/api/projects`



<br>



### Create a `<ProjectList />` component

```jsx
// components/projects/ProjectList.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddProject from './AddProject'; // <== !!!

class ProjectList extends Component {
	state = { 
    listOfProjects: [] 
  };

  getAllProjects = () => {}

  componentDidMount() {
    //  fetch the data from API befor initial render
    this.getAllProjects();  
  }

  render() {
    const { listOfProjects } = this.state;

    return(
      <div>  {/* After adding a project, we will GET all projects again from API */} 
        <AddProject getData={this.getAllProjects} />   
        <div>
          { 
            listOfProjects.map( (project) => {
            return (
              <div key={project._id} className='project'>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                  <p>{project.description} </p>
                </Link>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default ProjectList;
```





<br>

#### Finish the method `getAllProjects()` in `<ProjectList>`

```jsx
// components/projects/ProjectList.js

...

  getAllProjects = () =>{
    axios.get(`http://localhost:5000/api/projects`)
    .then((apiResponse) => {
      this.setState({ listOfProjects: apiResponse.data })
    })
  }
```
<br>
<br>


#### Uncomment the line in `AddProject.js` -  `this.props.getData()` passed from the parent component. 

#### It gets all projects every time new project is posted to the API.


<br>

`projects/AddProject`

```jsx
// components/projects/AddProject.js

handleFormSubmit = (event) => {
    event.preventDefault();
    const {title, description } = this.state;

    axios.post("http://localhost:5000/api/projects", { title, description })
    .then( () => {
      this.props.getData();		//		   ⟸  UNCOMMENT THIS LINE * *
      
      this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }
```





<br>

#### Create a `<ProjectDetails />`component

```jsx
// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
  
  render(){
    return <h1>Welcome to project details page!</h1>
  }
}

export default ProjectDetails;
```



<br>

#### Create `<Navbar>` component

```jsx
// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
    </ul>
    </nav>
  )
}

export default navbar;
```







### Update `App.js`

```jsx
//	src/App.js
import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// import AddProject from './components/projects/AddProject'  // REMOVE
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      {/* <AddProject /> */}  {/* REMOVE */}
      <Navbar />

      <Switch>
        <Route exact path="/projects" component={ProjectList}/>
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
```





<br>

#### Update `<ProjectDetails>` to add functionality

```jsx
// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
  constructor(props){
      super(props);
      this.state = {title: '', description: '', tasks: []};
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => { 
  /* here we do a GET request and then set the state */
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        <Link to={'/projects'}>
        	<button>Back</button>
        </Link>
      </div>
    )
  }
}

export default ProjectDetails;
```





<br>

#### Finalize `getSingleProject()` method in `<ProjectDetails>`

```jsx
// components/projects/ProjectDetails.js

getSingleProject = () => {
	const { id } = this.props.match.params;

	axios.get(`http://localhost:5000/api/projects/${id}`)
		.then( (apiResponse) =>{
			const theProject = apiResponse.data;
			this.setState(theProject);
		})
		.catch((err) => console.log(err));
}
```









<br>

#### Create `EditProject.js` component with a form to update a specific project.



```jsx
// components/projects/EditProject.js

import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
        description: this.props.theProject.description
    }
  }
    
  handleFormSubmit = (event) => {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    //                 ▲   Assign value to property using "object bracket notataion"
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text"
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange}/>
          
          <label>Description:</label>
          <textarea name="description" 
            value={this.state.description} 
            onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProject;
```









<br>

#### Finalize `handleFormSubmit` in `EditProject.js`

```jsx
// components/projects/EditProject.js

handleFormSubmit = (event) => {
  event.preventDefault();
  const { title, description } = this.state;
  const { _id } = this.props.theProject;

  axios.put(
    `http://localhost:5000/api/projects/${_id}`,
    { title, description }
  )
  .then( () => {
    this.props.getTheProject();						//  <---  hmmm
    this.props.history.push('/projects');    
    // after submitting the form, redirect to '/projects'
  })
   .catch( (err) => console.log(err) )
}
```













<br>

#### Place `<EditProject>` form in `ProjectDetails.js`



```jsx
// components/projects/ProjectDetails.js


  renderEditForm = () => {
    /* Check if state is not empty when`renderEditForm` is triggered before the state gets populated. 
     If the state is empty nothing can be passed to `EditProject` as the
    value in `theProject` prop to populate the form  */
    if (!this.state.title  && !this.state.description) return;
    else {
      return (
        <EditProject theProject={this.state}
          getTheProject={this.getSingleProject} 
          {...this.props} /> 
       // {...this.props}  so that we can use 'this.props.history' in EditProject    
      )      
    }
  }
  
  ...
  	...
  
    render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h4>{this.state.description}</h4>
        <Link to={'/projects'}>
          <button>Back</button>
         </Link>

        <div>{this.renderEditForm()} </div>   {/* Render the form in here */}
      </div>
    )
  }
```











<br>

#### Update `ProjectDetails` and create additional method to make DELETE requests to the API.

```jsx
// components/projects/ProjectDetails.js


// DELETE PROJECT:

  deleteProject = () => {
    const { id } = this.props.match.params;
    
    axios.delete(`http://localhost:5000/api/projects/${id}`)
    	.then( () => this.props.history.push('/projects') )
    	.catch( (err) => console.log(err));
  }
  
  
  ...
  		...
  
  	<button onClick={() => this.deleteProject()}>
    	Delete project
  	</button>
```











### Create `AddTask` component



```jsx
// components/tasks/AddTask.js

import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = { title: '', description: '', isShowing: false};
  }
   
  handleFormSubmit = (event) => {}
  
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
```

 















<br>

#### Finalize `handleFormSubmit` in `AddTask.js`



```jsx
// components/tasks/AddTask.js

handleFormSubmit = () => {
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
```









<br>

#### Add component `<AddTask />` to the `ProjectDetails.js`



```jsx
// components/projects/ProjectDetails.js  

...
	...


renderAddTaskForm = () => {
  if(!this.state.title && !this.state.description) return;
  else {
  	return <AddTask projectID={this.state._id} 
             getUpdatedProject={this.getSingleProject} />
  }
}	

    ...
      ...


      // INSIDE `render()` put `renderAddTaskForm` last

        <button onClick={() => this.deleteProject()}>
    	    Delete project
  	    </button>

        { this.renderAddTaskForm() }		{/* Render AddTask form  */}
```







<br>
<br>



### Render All the tasks



```jsx
// components/projects/ProjectDetails.js  



        { this.renderAddTaskForm() }
        // After the last line of code, render list of tasks	
	
        { 
          (this.state.tasks.length === 0) ?
           <h2>NO TASKS TO DISPLAY</h2>
          :
           this.state.tasks.map((task) => {
            return(
                <div key={ task._id }>
                  <h2>{ task.title }</h2>
                  <p>{ task.description}</p>
                </div>
            )
            
        })
      }
```









<br>

#### Refactor each task into a Link

```jsx
// components/projects/ProjectDetails.js  


        <div>{this.renderAddTaskForm()}</div>
        // After the last line of code, render list of tasks

        { 
          (this.state.tasks.length === 0) ?
           <h2>NO TASKS TO DISPLAY</h2>
          :
           this.state.tasks.map( (task) => {
            return(
               <Link to={`/projects/${this.state._id}/tasks/${task._id}`}>
                 <h2>{ task.title }</h2>
               </Link>
            )
            
        })
      }



```









<br>

#### Update routes, and create route to render `<TaskDetails>`



```jsx
// App.js

...

import TaskDetails from './components/tasks/TaskDetails'; // import <TaskDetails> 


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          
          {/* added to display task details page: */}
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> 
          {/* !!! */}
        </Switch>
      </div>
    );
  }
}

export default App;
```







<br>

#### Create `<TaskDetails>` component

```jsx
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
        
        
{/* To go back we use react-router-dom method `history.goBack()` available on `props` object */}
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default TaskDetails;
```

<br>
<br>


### NEXT STEPS:



- Create `<EditTask>` component which makes a `PUT` request to the API to update the task.  Render `<EditTask>` inside of `<TaskDetails>` .
- Create a delete button in the `<TaskDetails>` which calls a function to send  `DELETE` request via axios to the API (delete a task by id) and then does a new `GET `request to get the updated project and it's tasks (you can reuse the function from `<ProjectDetails>` `getSingleProject()`, by passing it as a prop  ).