import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Successfull from './components/Successfull';
import Counter from './components/counter/Counter';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signUp" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/navigation" component={Navigation} />
          <Route path="/successfull" component={Successfull} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
    
  
  );
};

export default App;
