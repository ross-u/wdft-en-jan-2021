import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DashboardWRedirect from "./pages/DashboardWRedirect";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          {/* <Route path="/" component={Dashboard} exact /> */}
          <Route path="/" component={DashboardWRedirect} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />

          <Route path="/login" component={Login} exact />
          
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
