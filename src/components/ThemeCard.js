import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "1%",
    width: "32%",
    height: "300px",
    display: "grid"
  },
  paper: {
    padding: theme.spacing.unit * 1.5,
    textAlign: "center",
    color: theme.palette.text.secondary,

    display: "grid",
    gridTemplateColumns: "1fr 20px .75fr .75fr 20px 1fr",
    gridTemplateRows: "30px 60px 20px 1fr 35px 20px"
  },
  themeBox: {
    gridRowStart: 1,
    gridColumnStart: 1,
    gridColumnEnd: -1,
    textAlign: "justify",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "20px",
    color: "#F4F3F3",
    letterSpacing: "1.5px",
    background: "linear-gradient(90deg, #636C72 50%, #F4F3F3 95%)",
    paddingLeft: "10px"
  },
  totalBox: {
    backgroundColor: "#F4F3F3",
    gridRowStart: 4,
    gridColumnStart: 3,
    gridColumnEnd: 5,
    span: 2,
    // color: "white",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "10px",
    letterSpacing: "2px",
    fontWeight: "bold",
    paddingTop: "10px"
  },
  compliantBox: {
    backgroundColor: "#F4F3F3",
    gridRowStart: 4,
    gridRowEnd: 6,
    gridColumnStart: 1,
    span: 2,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "10px",
    letterSpacing: "1px",
    fontWeight: "bold",
    paddingTop: "10px"
  },
  notCompliantBox: {
    backgroundColor: "#F4F3F3",
    gridRowStart: 4,
    gridColumnStart: 6,
    gridRowEnd: 6,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "10px",
    letterSpacing: "1px",
    fontWeight: "bold",
    paddingTop: "10px"
  },
  mainNum: {
    fontFamily: "Open Sans",
    fontSize: "30px",
    color: "#018DBB",
    padding: "5px"
  }
});

class ThemeCard extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <div className={classes.themeBox}> {this.props.theme}</div>

          <div className={classes.totalBox}>
            <div className={classes.mainNum}>{this.props.total}</div>
            Total Objectives
          </div>

          <div className={classes.compliantBox}>
            <div className={classes.mainNum}>{this.props.compliantTotal}> </div>
            Compliant
          </div>
          <div className={classes.notCompliantBox}>
            <div className={classes.mainNum}>
              {this.props.nonCompliantTotal}>
            </div>
            Not Compliant
          </div>
        </Paper>
      </div>
    );
  }
}

ThemeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ThemeCard);
