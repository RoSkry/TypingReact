import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Uikit from "./pages/Uikit.jsx";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <br />
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/uikit/" component={Uikit} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
