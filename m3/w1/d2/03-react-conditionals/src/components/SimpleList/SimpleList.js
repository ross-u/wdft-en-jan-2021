import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


const numbers = [1, 3, 4, 5, 9, 10];

const tens = numbers.map((num) => {
  return num * 10;
});

const projects = [
      { _id: '123fqw2asd', name: 'EatBCN', techStack: 'Express, Node, React'},
      { _id: '985asw5erh', name: 'TravelLite', techStack: 'React, Express, Redux'},
      { _id: '347jh45qww', name: 'IronClub', techStack: 'Express, Handlebars'},
      { _id: '90r1h9t1ea', name: 'ChatApp', techStack: 'React, Express, SocketIO'},
]

// If our data doesn't contain unique values that can be used for list `key`s
// we should create them before rendering the list
const projectsWithIds = projects.map((project) => {
  project.newId = uuidv4();
  return project;
})


console.log('projectsWithIds', projectsWithIds)


class SimpleList extends Component {
  render() {
    return (
      <div>
        <h1>Simple List</h1>

        { projects.map((project) => {
          return (
            <div key={project._id}>
              <h3>Project Name: { project.name}</h3>
              <p>Tech stack: { project.techStack}</p>
            </div>
          )
        })}
        






        {numbers.map((num, i) => {
          return (
            <div key={i}>
              <p>{num * 10}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SimpleList;
