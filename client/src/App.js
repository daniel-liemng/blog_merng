import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
