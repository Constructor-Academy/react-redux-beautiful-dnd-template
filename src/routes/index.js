import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from "../components/Dashboard";

class Routes extends React.Component {
  render() {
    return <>
      <Router>
        <Switch>
          <Route exact path='/' component={ Dashboard }/>
        </Switch>
      </Router>
    </>;
  }
}

export default Routes
