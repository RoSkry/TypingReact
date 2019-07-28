import React from "react";
import "./App.css";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Uikit from "./pages/Uikit.jsx";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Cookies from "js-cookie";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import history from "./history";
import PostInfo from "./pages/PostInfo";

function App() {
  return (
    <div className="App">
      <br />
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/posts/:id" component={PostInfo} />
          <PrivateRoute exact path="/uikit" component={Uikit} />
          <Route
            path="/profile"
            render={() => {
              let isToken = false;

              if (Cookies.get("accessToken")) {
                isToken = true;
              }

              if (isToken) {
                return <Profile />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/login"
                    }}
                  />
                );
              }
            }}
          />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
