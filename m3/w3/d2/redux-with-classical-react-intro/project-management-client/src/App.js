//	src/App.js
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';


// Pages
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CounterPage from './pages/CounterPage';
import TaskDetailsPage from './pages/TaskDetailsPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/counter" component={CounterPage} />
          <Route exact path="/projects" component={ProjectListPage} />
          <Route exact path="/projects/:id" component={ProjectDetailsPage} />
          <Route
            exact
            path="/projects/:id/tasks/:taskId"
            component={TaskDetailsPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
