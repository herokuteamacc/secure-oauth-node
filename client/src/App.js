import React, { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";

//Simple Page components
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    //created a function to check if authenticated]
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className = "container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  window.location.href = 'https://lwc-lwc-recipes-oss.herokuapp.com/'
                )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  window.location.href = 'https://lwc-lwc-recipes-oss.herokuapp.com/'
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login"/>
                )
              }
            />
            <Route
              exact
              path='https://lwc-lwc-recipes-oss.herokuapp.com/'
              render={(props) =>
                isAuthenticated ? (
                  window.location.href = 'https://lwc-lwc-recipes-oss.herokuapp.com/'
                      ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
