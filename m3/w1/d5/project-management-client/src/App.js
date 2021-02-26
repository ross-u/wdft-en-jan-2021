import "./App.css";

import { Route, Switch } from "react-router-dom";

import ProjectList from "./pages/ProjectList/ProjectList";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import TaskDetails from "./pages/TaskDetails/TaskDetails.js";

import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route
          exact
          path="/projects/:id/tasks/:taskId"
          component={TaskDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
