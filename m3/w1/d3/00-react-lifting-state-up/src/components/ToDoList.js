import React, { Component } from "react";
import Task from "./Task";
import Summary from "./Summary";
import data from "./../data.js";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0
    };

    this.deleteTaskById = this.deleteTaskById.bind(this);
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
  }
  /*** 
    We bind the method because it will be invoked by another component (<Task> - object)
    Without binding, `this` will not be referring to the `<ToDoList>` component.
    We `bind` `this` as we need it to point to <ToDoList> component (object) that holds the `state`.
    We can as well create the method as an arrow function to solve this issue of losing context.
  ***/

  /***  
    1. State shouldn't be modified directly, therefore we use the `filter` method 
    which creates a new array
  ***/
  deleteTaskById(id) {
    let { tasks, tasksCompleted } = this.state;

    const updatedTasks = tasks.filter((taskObj, index) => {
      if (taskObj.id === id) {
        if (taskObj.isDone) tasksCompleted--;
        return false; // exclude the deleted task
      }
      return true;
    });

    this.setState({ tasks: updatedTasks, tasksCompleted });
  }


  toggleTaskDone (id) {
    let { tasks, tasksCompleted } = this.state;

    const tasksCopy = [...tasks]; // [{}, {}, {}, {}]
    tasksCopy.forEach((oneTask) => {
      if (oneTask.id === id) {
        oneTask.isDone = oneTask.isDone ? false : true;   //    !oneTask.isDone

        if (oneTask.isDone) tasksCompleted++;
        else if (!oneTask.isDone) tasksCompleted--;
      }
    });

    this.setState({ tasks: tasksCopy, tasksCompleted: tasksCompleted });
  }


  render() {
    const { tasks, tasksCompleted } = this.state;

    return (
      <div>
        <Summary tasksCompleted={tasksCompleted} />
        <div className="todo-container">
          
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                deleteTask={this.deleteTaskById}
                updateTaskStatus={this.toggleTaskDone}
                name={task.name}
                description={task.description}
                taskId={task.id}
                isDone={task.isDone}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
