import React, { Component } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import ThemeCard from "./ThemeCard";

export default class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      allObjectives: [],
      allCompleteObjectives: [],
      allIncompleteObjectives: []
    };
  }
  componentDidMount() {
    axios.get("/api/getallobjectives").then(results =>
      this.setState({
        allObjectives: results.data
      })
    );

    axios.get("/api/getAllCompleteObjectives").then(results =>
      this.setState({
        allCompleteObjectives: results.data
      })
    );

    axios.get("/api/getAllIncompleteCompleteObjectives").then(results =>
      this.setState({
        allIncompleteObjectives: results.data
      })
    );
  }
  render() {
    const {
      allObjectives,
      allCompleteObjectives,
      allIncompleteObjectives
    } = this.state;

    // Calculate data here
    const sumTotal = allObjectives.length;
    const sumCompliant = allCompleteObjectives.length;
    const sumNonCompliant = allIncompleteObjectives.length;

    return (
      <div>
        <TopBar pageName="dashboard" />
        <p>dashboard</p>
        <ThemeCard
          theme="Summary"
          total={sumTotal}
          compliantTotal={sumCompliant}
          nonCompliantTotal={sumNonCompliant}
        />
      </div>
    );
  }
}
