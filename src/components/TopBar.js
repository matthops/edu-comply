import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const textStyle = {
  color: "#71CCFA",
  fontFamily: "Open Sans",
  textTransform: "uppercase",
  fontSize: "17px"
};

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" style={textStyle}>
            {props.pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
