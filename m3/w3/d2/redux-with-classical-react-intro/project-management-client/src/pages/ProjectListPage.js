// /pages/ProjectList.js

import React, { Component } from "react";
import axios from "axios";
import AddProject from "../components/projects/AddProject";
import Project from "../components/projects/Project";



import { connect } from 'react-redux';
import { addAllProjects } from './../redux/slices/projects.slice';



class ProjectList extends Component {

  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`)
      .then((response) => {
        this.props.addAllProjectsToRedux(response.data);


      // this.setState({ listOfProjects: response.data });
    });
  };

  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    // const { listOfProjects } = this.state;
    const listOfProjects = this.props.projects.value;

    return (
      <div>
        <AddProject updateProjectList={this.getAllProjects} />
        <div>
          {listOfProjects &&
            listOfProjects.map((project) => {
              return <Project projectData={project} key={project._id} />;
            })}
        </div>
      </div>
    );
  }
}




// Specify what data you want from the Redux state
const mapStateToProps = (reduxState) => ({
  projects: reduxState.projects                 // this.props.projects
})

// Specify what actions we want to dispatch to Redux state
const mapDispatchToProps = (dispatch) => ({
  addAllProjectsToRedux: (payload) =>   dispatch(addAllProjects(payload))  // this.props.addAllProjectsToRedux()
})


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList); 




/*
const mapStateToProps = (reduxState) => ({})

const mapDispatchToProps = (dispatch) => ({})


export default connect()(Component); 
*/
