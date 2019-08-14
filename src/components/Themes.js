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
    const themeMap = this.state.activeThemes.map((e, i) => {
      return <div key={i}> {e.theme} </div>;
    });

    return (
      <div>
        <TopBar pageName="Themes" />
        {themeMap}
      </div>
    );
  }
}
