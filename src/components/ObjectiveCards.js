import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
    width: "90%",
    display: "grid"
  },
  paper: {
    padding: theme.spacing.unit * 1.5,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "5em",
    display: "grid",
    gridTemplateColumns: "10px .10fr 10px 1fr 10px .25fr 10px",
    gridTemplateRows: "2.8em 1.5em"
  },
  buttonBox: {
    backgroundColor: "#08A84C",
    gridColumnStart: 6,
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "15px",
    letterSpacing: "2px",
    fontWeight: "bold",
    paddingTop: "10px"
  },
  headlineBox: {
    gridColumnStart: 4,
    gridRow: 1,
    textAlign: "justify",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "15px",
    letterSpacing: "1.5px",
    fontWeight: "bold"
  },
  taskStatusText: {
    gridRowStart: 2,
    gridColumnStart: 6,
    fontFamily: "Open Sans",
    letterSpacing: ".75px",
    fontSize: "14px"
  },
  ownerBox: {
    gridRowStart: 1,
    gridColumnStart: 2,
    textAlign: "justify",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "15px",
    letterSpacing: "1.5px",
    fontWeight: "bold"
  }
});

class ObjectiveCards extends Component {
  constructor(props) {
    super();

    this.state = {
      objectiveHeadline: "Compile all student agreements"
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <div className={classes.ownerBox}>{this.props.owner}</div>

          <div className={classes.headlineBox}>{this.props.headline}</div>

          <div className={classes.buttonBox}>{this.props.status}</div>
          <div className={classes.taskStatusText}>
            Due Date {this.props.dueDate}
          </div>
        </Paper>
      </div>
    );
  }
}

ObjectiveCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ObjectiveCards);
