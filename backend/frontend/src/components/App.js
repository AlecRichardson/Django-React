import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import Nav from "./layout/Nav";
import Dashboard from "./leads/Dashboard";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Nav />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
