# React | Lifting State Up

## Introduction

We’ve learnt how to **pass data from a parent component to a child component using props**.

We’ve also learnt how to **change the data within the same component using state**.

**To summarize**:

_state belongs to the component itself and props are used to pass data to child components_

<br>

## Lifting State Up

<br>

Often, several components need to reflect the same changing data.

Moving the values from one component to its parent in order for the common ancestor components to be able to access that value, is called **lifting the state up** .

<br>

### [STARTER REPO](https://github.com/ross-u/React---Lifting-State-Starter-Repo-.git)

```bash
git clone https://github.com/ross-u/00-react-lifting-state-up.git

cd 00-react-lifting-state-up

npm i

code .

# The starter code is on the master branch
git checkout master
```

<br>

### Open the project with the dev server

```bash
npm start
```

<br>

In our current example each `<Task>` card component is a `class` component and has a `state` that holds `taskCompleted` value.

<br>

![img](https://i.imgur.com/yYWXobZ.png)

In the `<Summary>` component we want to display how many tasks are completed and update that number whenever we click on a green button in any of the `<Task>` components.

In order to do that we have to "lift the `state`" (some information that will be used by both components) to the closest common ancestor above them, so that both components can have access to the same value, as they both depend on it for this functionality.

<br>

### Lifting the state from `<Task />` component, up to the `<ToDoList />`

The next step is to remove the state from the `<Task />` components and lift it to the parent `<ToDoList />`, and create an additional method which will enable the functionality of calculating the number of tasks completed, as represented in the below image:

![img](https://i.imgur.com/REJyV9U.png)

<hr>

<br>

#### Remove the `state` object from the `<Task />` component

<br>

**First we will remove `state` from the `<Task />` component** and instead create a new property in the `state` of the `<ToDoList />` which is the most common ancestor of `<Task />` and `<Summary />`.

**We are lifting the `state` from `<Task />` to the closest common ancestor.**

<br>

##### `src/components/Task.js`

```js
//		src/components/Task.js

	import React from 'react';

	class Task extends React.Component {
//   state = {
//     taskCompleted: false
//   }

//			 ⇡  	⇡
// Delete `state` from `Task.js`
```

<br>

#### Create new property in `ToDoList` state

##### `src/components/ToDoList.js`

```js
//		src/components/ToDoList.js

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0			//			⟻  create new property
    };
```

<br>

After lifting the state to `ToDoList` we can now create all the methods needed for functionality and pass props that we want to use in `<Task>` and `<Summary>`

<br>

#### Create methods to update the `tasksCompleted`

##### `src/components/TodoList.js`

```js
//		src/components/ToDoList.js


class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0
    };

    this.deleteTaskById = this.deleteTaskById.bind(this);

    this.toggleTaskDone = this.toggleTaskDone.bind(this);

//			↥	  `bind` new method toggleTaskDone   ↥
  };


//	⤥	  create method to update number of tasksCompleted   ⤦
  toggleTaskDone(id) {
    const tasksCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

//	 Find the selected (clicked) task.
//	 Update (toggle) that task's `isDone` property,
//	 Then update `tasksCompleted` value in the shared `state`
    tasksCopy.forEach((oneTask) => {

      if (oneTask.id === id) {
        oneTask.isDone = oneTask.isDone ? false : true;

        if (oneTask.isDone) tasksCompleted++;
        else if (!oneTask.isDone) tasksCompleted--;
      }

    });

    this.setState( {tasks: tasksCopy, tasksCompleted } );
  }
```

<br>

#### Pass method `toggleTaskDone` to the `<Task>` and tie it to the button

##### `src/components/ToDoList.js`

```jsx
//		src/components/ToDoList.js


render() {
//	...
//			...

  			this.state.tasks.map( (task) => {
            return <Task
                     key={task.id}
                     {...task}
                     deleteTask={ this.deleteTaskById }
                     updateTaskStatus={ this.toggleTaskDone } />
//                  ⤤       PASS METHOD AS PROP 		⤣
//			...
//  ...
```

<br>

#### 1. Update `Task.js` and remove method `toggleTask` .

#### 2. Replace `this.state.taskCompleted` with `this.props.isDone`

##### `src/components/Task.js`

```jsx
//		src/components/Task.js

//	...
//	...
//	...

render() {
  return (
    <div className='task-card'>
      <div className='task-card-half'>
        <h1>{this.props.name}</h1>
        {
     	{/* this.state.taskCompleted ? 	 	 ⟻	REMOVE   */}
          this.props.isDone ?			 {/* 	 ⟻	REPLACE WITH  */}
            <h3 style={{color: 'green'}}>DONE ✅</h3>
            :
            <h3 style={{color: 'red'}}>PENDING</h3>
        }
      </div>

  //    ...

  //    ...

  <button className='add'
    onClick={()=> this.props.updateTaskStatus(this.props.id) }>
{/*          ⤤        USE THE METHOD PASSED AS A PROP  		⤣        */}

    {
        this.props.isDone ?			// 	 ⟻	UPDATE HERE
        <span>UNDO ❌</span>
        :
        <span>✅</span>
      }
      </button>
```

<br>

## Last steps

<br>

#### Pass the data from the shared `state` of `ToDoList` to `<Summary>`

<br>

![img](https://i.imgur.com/wYsfLPY.png)

<br>

##### `components/ToDoList.js`

```jsx
// src/components/ToDoList.js

// ...

  render() {
    return (
      <div>

        <Summary tasksCompleted={this.state.tasksCompleted}/>
        {/*		⤤   PASS "TASKS COMPLETED" AS A PROP 		⤣			*/}
```

<br>

#### Update `Summary.js` to show the data passed through `props`

##### `components/Summary.js`

```jsx
import React from "react";

function summary(props) {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.tasksCompleted}</p>
      {/*                            ⤤    HERE    ⤣        */}
    </div>
  );
}

export default summary;
```

<br>

#### Update `deleteTaskById()` in `ToDoList.js`

##### `components/ToDoList.js`

```jsx
//		components/ToDoList.js

deleteTaskById (id)  {
  const taskListCopy = [...this.state.tasks];
  let tasksCompleted = this.state.tasksCompleted;

  taskListCopy.forEach((taskObj, index) => {
    if(taskObj.id === id) {
      taskListCopy.splice(index, 1);
      if (taskObj.isDone && tasksCompleted > 0) tasksCompleted--;	// 	⟻	UPDATE
    }
  })
  this.setState( {tasks: taskListCopy, tasksCompleted} );
};
```

<br>

## Additional Resources

#### [Lifting State Up - React docs](https://reactjs.org/docs/lifting-state-up.html)

<br>

#### [8 things to learn in React before using Redux](https://www.robinwieruch.de/learn-react-before-using-redux/)
