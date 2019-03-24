import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Nav from "./layout/Nav";
import Dashboard from "./leads/Dashboard";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
