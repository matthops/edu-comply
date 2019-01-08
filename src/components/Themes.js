import React, { Component } from "react";
import TopBar from "./TopBar";
import axios from "axios";

export default class Themes extends Component {
  constructor(props) {
    super();

    this.state = {
      activeThemes: []
    };
  }

  componentDidMount() {
    axios.get("/api/getallthemes").then(results =>
      this.setState({
        activeThemes: results.data
      })
    );
  }

  render() {
    console.log("Themes", this.state.activeThemes);
    return (
      <div>
        <TopBar pageName="Themes" />
        <p>Themes</p>
      </div>
    );
  }
}
