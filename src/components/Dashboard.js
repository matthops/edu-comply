import React, { Component } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import ThemeCard from "./ThemeCard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  dashWrap: {
    display: "flex",
    flexWrap: "wrap",
    flex: "none"
  }
});

class Dashboard extends Component {
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

  filterArr = (allData, themeId) => {
    const arr = allData.filter(e => e.themes === themeId);
    const arrLength = arr.length;
    let trueCount = arr.filter(e => e.status === "true").length;
    const falseCount = arrLength - trueCount;

    return (
      <ThemeCard
        theme={themeId}
        total={arrLength}
        compliantTotal={trueCount}
        nonCompliantTotal={falseCount}
        key={themeId}
      />
    );
  };

  render() {
    const { classes } = this.props;
    const {
      allObjectives,
      allCompleteObjectives,
      allIncompleteObjectives
    } = this.state;

    // Calculate data here
    const sumTotal = allObjectives.length;
    const sumCompliant = allCompleteObjectives.length;
    const sumNonCompliant = allIncompleteObjectives.length;

    const themeArray = [1, 2, 3, 4, 5];
    const themeCardComponent = themeArray.map(e =>
      this.filterArr(allObjectives, e)
    );

    return (
      <div className={classes.root}>
        <TopBar pageName="dashboard" />
        <div className={classes.dashWrap}>
          <ThemeCard
            theme="Summary"
            total={sumTotal}
            compliantTotal={sumCompliant}
            nonCompliantTotal={sumNonCompliant}
          />
          {themeCardComponent}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
