import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from "../../routes/index";

class App extends Component {
  render() {
    return (
      <Routes/>
    )
  }
}

export default connect()(App);
