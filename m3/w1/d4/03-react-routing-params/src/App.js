import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import DashboardWRedirect from './pages/DashboardWRedirect';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';

import ProjectDetails from './pages/ProjectDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:idOfTheProject" component={ProjectDetails} exact />

          <Route component={Error} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
