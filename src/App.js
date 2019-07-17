import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import Uikit from './pages/Uikit.jsx'

function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/uikit/" component={Uikit} />
        </Router>
    </div>
  );
}

export default App;
