import React, { Component } from "react";
import TopBar from "./TopBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <TopBar pageName="Home" />
        <p>Home</p>
      </div>
    );
  }
}
