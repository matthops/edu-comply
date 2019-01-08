import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Objectives from "./Objectives";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Themes from "./Themes";

const style = {
  paddingLeft: "240px"
};

export default class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={style}>
        {this.props.history}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/themes" component={Themes} />
          <Route path="/objectives" component={Objectives} />
        </Switch>
      </div>
    );
  }
}
