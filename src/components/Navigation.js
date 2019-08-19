import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2D353C'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  navStyle: {
    marginTop: '30px'
  },
  linkStyle: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    letterSpacing: '2px',
    color: '#fff'
  }
});

const logoStyle = {
  backgroundColor: '#71CCFA',
  textTransform: 'uppercase',
  minHeight: '64px',
  paddingTop: '18px'
};

const logoChild = {
  color: '#fff',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '3.5px'
};

class Navigation extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.root}>
        {/* <DashStyle> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div>
            <Typography theme={this.props.theme} variant="h5" style={logoStyle}>
              <NavLink style={logoChild} to="/">
                EduComply
              </NavLink>
            </Typography>
          </div>
          <List>
            <li className={classes.navStyle}>
              <NavLink className={classes.linkStyle} to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className={classes.navStyle}>
              <NavLink className={classes.linkStyle} to="/tasks">
                Tasks
              </NavLink>
            </li>
            <li className={classes.navStyle}>
              <NavLink className={classes.linkStyle} to="/objectives">
                Objectives
              </NavLink>
            </li>
            <li className={classes.navStyle}>
              <NavLink className={classes.linkStyle} to="/themes">
                Themes
              </NavLink>
            </li>
          </List>
        </Drawer>
        {/* </DashStyle> */}
      </nav>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
